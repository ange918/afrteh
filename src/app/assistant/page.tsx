export default function AssistantPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden flex flex-col h-[70vh]">
        <div className="p-6 border-b border-white/10 bg-white/5 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <h1 className="text-xl font-bold">DAHOMEY AI Assistant</h1>
          </div>
          <span className="text-xs text-[#D4AF37]">Premium Access</span>
        </div>
        
        <div className="flex-1 p-6 overflow-y-auto space-y-4">
          <div className="bg-white/10 rounded-2xl p-4 max-w-[80%]">
            Bonjour ! Je suis l'assistant IA de DAHOMEY-TECH. Comment puis-je vous accompagner dans vos projets technologiques aujourd'hui ?
          </div>
        </div>

        <div className="p-4 border-t border-white/10 bg-black/50">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Posez votre question..." 
              className="w-full bg-white/5 border border-white/20 rounded-full py-3 px-6 pr-12 focus:outline-none focus:border-[#D4AF37] transition-colors"
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-[#D4AF37]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
