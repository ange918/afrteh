'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, Sparkles } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

const mockResponses: Record<string, string> = {
  'tenue mariage': `Pour un mariage traditionnel béninois, je vous recommande :

**Pour les femmes :**
- Un ensemble en **Bazin riche** brodé, couleur or ou bordeaux
- Accompagné d'un **gele** (coiffe) assorti
- Des bijoux dorés pour compléter le look

**Pour les hommes :**
- Un **Agbada** majestueux en bazin blanc ou crème
- Broderies dorées sur le col et les manches
- Un bonnet traditionnel (fila) assorti

Voulez-vous que je vous montre des créateurs spécialisés dans ces tenues ?`,

  'look streetwear africain': `Voici mes suggestions pour un look streetwear africain moderne :

**Pièces clés :**
- **Hoodie oversize** avec motifs wax ou adinkra
- **Bomber jacket** en tissu kente revisité
- **T-shirt graphique** inspiré de l'art vodoun

**Accessoires :**
- Casquette ou bob avec imprimés africains
- Sneakers blanches pour un contraste élégant
- Sac banane en wax

Je peux vous orienter vers notre collection Streetwear sur la marketplace !`,

  'default': `Merci pour votre message ! En tant que styliste IA spécialisé dans la mode béninoise et africaine, je peux vous aider avec :

- **Conseils personnalisés** pour vos tenues traditionnelles ou modernes
- **Recommandations de créateurs** locaux selon votre style
- **Associations de couleurs et tissus** (wax, kente, bazin, bogolan)
- **Idées de looks** pour toutes les occasions

Quel type de conseil recherchez-vous aujourd'hui ?`
};

const quickSuggestions = [
  'Tenue mariage',
  'Look streetwear africain',
  'Tenue pour gala',
  'Style business africain'
];

export default function ChatUI() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Bonjour ! Je suis votre styliste IA DAHOMEY-TECH, expert en mode africaine contemporaine. Comment puis-je vous aider à créer votre look idéal aujourd\'hui ?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getMockResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    if (lowerMessage.includes('mariage') || lowerMessage.includes('wedding')) {
      return mockResponses['tenue mariage'];
    }
    if (lowerMessage.includes('streetwear') || lowerMessage.includes('urbain') || lowerMessage.includes('street')) {
      return mockResponses['look streetwear africain'];
    }
    return mockResponses['default'];
  };

  const handleSend = async (text?: string) => {
    const messageText = text || input;
    if (!messageText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: messageText
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: getMockResponse(messageText)
      };
      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-full bg-zinc-950">
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-3xl mx-auto px-4 py-8">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`mb-6 ${message.role === 'user' ? 'flex justify-end' : ''}`}
            >
              {message.role === 'assistant' ? (
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-700 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-black" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-zinc-500 mb-2">Styliste IA</p>
                    <div className="text-zinc-200 leading-relaxed whitespace-pre-line">
                      {message.content}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-zinc-800 rounded-2xl px-4 py-3 max-w-[80%]">
                  <p className="text-zinc-200">{message.content}</p>
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex gap-4 mb-6">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-700 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-black" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-zinc-500 mb-2">Styliste IA</p>
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                  <span className="w-2 h-2 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                  <span className="w-2 h-2 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      <div className="border-t border-zinc-800 bg-zinc-950">
        <div className="max-w-3xl mx-auto px-4 py-4">
          {messages.length === 1 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {quickSuggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => handleSend(suggestion)}
                  className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-full text-sm text-zinc-300 transition-colors"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          )}

          <div className="relative">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Décrivez le look de vos rêves..."
              rows={1}
              className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl py-4 px-5 pr-14 text-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:border-yellow-500 resize-none"
              style={{ minHeight: '56px', maxHeight: '200px' }}
            />
            <button
              onClick={() => handleSend()}
              disabled={!input.trim() || isTyping}
              className={`absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-lg transition-all ${
                input.trim() && !isTyping
                  ? 'bg-yellow-500 text-black hover:bg-yellow-400'
                  : 'bg-zinc-700 text-zinc-500 cursor-not-allowed'
              }`}
            >
              <Send className="w-5 h-5" />
            </button>
          </div>

          <p className="text-xs text-center mt-3 text-zinc-600">
            L'IA peut faire des erreurs. Vérifiez les informations importantes.
          </p>
        </div>
      </div>
    </div>
  );
}
