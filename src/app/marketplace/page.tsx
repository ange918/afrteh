export default function MarketplacePage() {
  const collections = [
    { id: 1, name: "Veste Kanvô Royale", artist: "Maison Abomey", price: "245€", tags: ["Kanvô", "Tradition"], img: "🧥" },
    { id: 2, name: "Robe Batik Indigo", artist: "Atelier Ouidah", price: "180€", tags: ["Batik", "Fait main"], img: "👗" },
    { id: 3, name: "Chemise Lin & Pagne", artist: "Zinsou Design", price: "120€", tags: ["Mixte", "Élégance"], img: "👔" },
    { id: 4, name: "Ensemble Bogolan Noir", artist: "Afro-Chic", price: "310€", tags: ["Premium", "Bogolan"], img: "👘" },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h1 className="text-4xl font-black mb-2 tracking-tighter uppercase">Showroom <span className="text-[#D4AF37]">Digital</span></h1>
          <p className="text-gray-400">Le meilleur de la mode béninoise certifiée et augmentée.</p>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
          {['Tous', 'Kanvô', 'Batik', 'Prêt-à-porter', 'Accessoires'].map(cat => (
            <button key={cat} className="px-5 py-2 rounded-full border border-white/10 text-xs font-bold hover:bg-[#D4AF37] hover:text-black transition-all whitespace-nowrap">
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {collections.map((item) => (
          <div key={item.id} className="group relative bg-white/5 rounded-3xl overflow-hidden border border-white/10 hover:border-[#D4AF37]/50 transition-all">
            <div className="aspect-[4/5] bg-gradient-to-b from-white/5 to-black/20 flex items-center justify-center text-7xl group-hover:scale-110 transition-transform duration-500">
              {item.img}
            </div>
            
            <div className="p-6 bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-2 mb-3">
                {item.tags.map(tag => (
                  <span key={tag} className="text-[9px] uppercase font-bold tracking-widest text-[#D4AF37] bg-[#D4AF37]/10 px-2 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-lg font-bold mb-1 leading-tight">{item.name}</h3>
              <p className="text-xs text-gray-500 mb-4">{item.artist}</p>
              
              <div className="flex items-center justify-between">
                <span className="text-xl font-black text-white">{item.price}</span>
                <button className="bg-white text-black text-[10px] font-black uppercase px-4 py-2 rounded-full hover:bg-[#D4AF37] transition-all">
                  Voir la pièce
                </button>
              </div>
            </div>

            {/* Overlay Essayage Virtuel */}
            <button className="absolute top-4 right-4 bg-black/60 backdrop-blur-md p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity border border-white/10 text-[#D4AF37]">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
