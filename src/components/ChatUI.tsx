'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, Sparkles } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

const quickSuggestions = [
  'Tenue mariage traditionnel',
  'Look streetwear africain',
  'Tenue pour gala',
  'Style business africain'
];

export default function ChatUI() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Bonjour ! Je suis votre Styliste IA DAHOMEY-TECH, expert en mode béninoise et africaine contemporaine. Comment puis-je vous aider à créer votre look idéal aujourd\'hui ?'
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

  const handleSend = async (text?: string) => {
    const messageText = text || input;
    if (!messageText.trim() || isTyping) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: messageText
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: messageText })
      });

      const data = await response.json();

      if (!response.ok || data.error) {
        throw new Error(data.error || 'Erreur inconnue');
      }

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.message
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      const fallback: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'Je suis momentanément indisponible. Veuillez vérifier que la clé API Anthropic est configurée dans votre fichier .env.local, puis réessayez dans quelques instants.'
      };
      setMessages(prev => [...prev, fallback]);
      console.error('Chat error:', error);
    } finally {
      setIsTyping(false);
    }
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
                  <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #C9A84C, #8B6914)' }}>
                    <Sparkles className="w-4 h-4 text-black" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-zinc-500 mb-2 font-sans">Styliste IA</p>
                    <div className="text-zinc-200 leading-relaxed whitespace-pre-line font-sans text-sm">
                      {message.content}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-zinc-800 rounded-2xl px-4 py-3 max-w-[80%]">
                  <p className="text-zinc-200 font-sans text-sm">{message.content}</p>
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex gap-4 mb-6">
              <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #C9A84C, #8B6914)' }}>
                <Sparkles className="w-4 h-4 text-black" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-zinc-500 mb-2 font-sans">Styliste IA</p>
                <div className="flex gap-1 items-center h-6">
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
                  className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-full text-sm text-zinc-300 transition-colors font-sans"
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
              disabled={isTyping}
              className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl py-4 px-5 pr-14 text-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:border-[#C9A84C] resize-none font-sans text-sm disabled:opacity-60"
              style={{ minHeight: '56px', maxHeight: '200px' }}
            />
            <button
              onClick={() => handleSend()}
              disabled={!input.trim() || isTyping}
              className={`absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-lg transition-all ${
                input.trim() && !isTyping
                  ? 'text-black hover:opacity-80'
                  : 'bg-zinc-700 text-zinc-500 cursor-not-allowed'
              }`}
              style={input.trim() && !isTyping ? { backgroundColor: 'var(--gold)' } : {}}
            >
              <Send className="w-5 h-5" />
            </button>
          </div>

          <p className="text-xs text-center mt-3 text-zinc-600 font-sans">
            Powered by Claude · L'IA peut faire des erreurs. Vérifiez les informations importantes.
          </p>
        </div>
      </div>
    </div>
  );
}
