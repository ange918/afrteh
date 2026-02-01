export default function AssistantPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[80vh]">
        
        {/* Panneau de configuration Stylisme */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hidden lg:block">
          <h2 className="text-lg font-bold mb-6 flex items-center">
            <span className="w-2 h-2 bg-[#D4AF37] rounded-full mr-2"></span>
            Préférences Style
          </h2>
          <div className="space-y-6">
            <div>
              <label className="text-xs text-gray-400 block mb-2 uppercase tracking-wider">Tissus Préférés</label>
              <div className="flex flex-wrap gap-2">
                {['Kanvô', 'Batik', 'Wax', 'Soie'].map(t => (
                  <button key={t} className="px-3 py-1 rounded-full border border-white/10 text-xs hover:border-[#D4AF37] transition-all">{t}</button>
                ))}
              </div>
            </div>
            <div>
              <label className="text-xs text-gray-400 block mb-2 uppercase tracking-wider">Occasion</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-lg p-2 text-sm">
                <option>Mariage Traditionnel</option>
                <option>Gala / Soirée</option>
                <option>Daily Wear</option>
                <option>Business</option>
              </select>
            </div>
          </div>
        </div>

        {/* Interface Chat */}
        <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-2xl overflow-hidden flex flex-col">
          <div className="p-6 border-b border-white/10 bg-white/5 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4AF37] to-black border border-[#D4AF37]/30 flex items-center justify-center font-bold text-black italic">D</div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-black"></div>
              </div>
              <div>
                <h1 className="text-sm font-bold">Styliste IA Dahomey</h1>
                <p className="text-[10px] text-gray-400">Expert en mode africaine moderne</p>
              </div>
            </div>
          </div>
          
          <div className="flex-1 p-6 overflow-y-auto space-y-6">
            <div className="flex items-start gap-3">
              <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-2xl rounded-tl-none p-4 text-sm leading-relaxed max-w-[85%]">
                Bonjour ! Je suis votre conseiller en image DAHOMEY-TECH. 
                Souhaitez-vous explorer des designs à base de <span className="text-[#D4AF37] font-bold">Kanvô</span> (pagne tissé du Bénin) pour votre prochain événement ?
              </div>
            </div>
          </div>

          <div className="p-4 bg-black/40 backdrop-blur-xl border-t border-white/10">
            <div className="relative group">
              <input 
                type="text" 
                placeholder="Décrivez le look de vos rêves..." 
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 pr-14 focus:outline-none focus:border-[#D4AF37]/50 focus:bg-white/10 transition-all"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#D4AF37] p-2 rounded-xl text-black hover:scale-105 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              </button>
            </div>
            <p className="text-[10px] text-center mt-3 text-gray-500 italic">L'IA peut générer des croquis de design basés sur vos descriptions.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
