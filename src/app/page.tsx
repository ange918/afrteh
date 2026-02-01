export default function HomePage() {
  return (
    <div className="relative isolate">
      {/* Hero Section avec texture textile subtile en fond */}
      <div className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/fabric-of-squares.png')]"></div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium leading-6 text-[#D4AF37] ring-1 ring-inset ring-[#D4AF37]/20 bg-[#D4AF37]/5 mb-8">
            L'IA au service du patrimoine textile
          </div>
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-7xl mb-8 leading-tight">
            Redéfinir la mode <span className="text-[#D4AF37]">Béninoise</span> à l'ère de l'IA
          </h1>
          <p className="mt-6 text-xl leading-8 text-gray-300 max-w-3xl mx-auto">
            DAHOMEY-TECH connecte le savoir-faire ancestral africain aux technologies de pointe pour créer la mode augmentée de demain.
          </p>
          
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="/marketplace" className="w-full sm:w-auto rounded-full bg-[#D4AF37] px-10 py-4 text-base font-bold text-black shadow-lg hover:bg-[#B8962E] hover:scale-105 transition-all">
              Découvrir les Créateurs
            </a>
            <a href="/assistant" className="w-full sm:w-auto text-base font-semibold leading-6 text-white border border-white/20 rounded-full px-10 py-4 hover:bg-white/10 backdrop-blur-sm transition-all">
              Essayer le Styliste IA
            </a>
          </div>

          {/* Features Preview */}
          <div className="mt-24 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {[
              { title: "Génération de Designs", desc: "Créez des motifs uniques inspirés des traditions béninoises via notre IA créative." },
              { title: "Essayage Virtuel", desc: "Visualisez les créations sur vous instantanément grâce à la réalité augmentée." },
              { title: "Authenticité Blockchain", desc: "Chaque pièce est certifiée unique et tracée pour protéger nos créateurs." }
            ].map((f, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 text-left hover:border-[#D4AF37]/30 transition-all group">
                <h3 className="text-[#D4AF37] font-bold text-lg mb-3 group-hover:translate-x-1 transition-transform">{f.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
