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

        {/* Section À Propos */}
        <div id="about" className="mx-auto max-w-7xl px-6 lg:px-8 py-24 border-t border-white/10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
                Notre Vision : Allier Tradition et Innovation
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                DAHOMEY-TECH n'est pas seulement une plateforme technologique, c'est un pont entre les générations. Nous croyons que l'intelligence artificielle peut magnifier le travail manuel de nos artisans au lieu de le remplacer.
              </p>
              <div className="space-y-4">
                {[
                  "Valorisation du Wax et du Bogolan via l'IA",
                  "Transparence totale grâce à la blockchain",
                  "Soutien direct aux artisans locaux"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-[#D4AF37]"></div>
                    <span className="text-gray-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=1200" 
                alt="Artisanat Africain Moderne" 
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Section Comment ça marche */}
        <div className="bg-black/20 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Comment ça marche ?</h2>
              <p className="mt-4 text-lg text-gray-400">Le futur de la mode africaine en 4 étapes simples.</p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
              {[
                { step: "01", title: "Inspiration", desc: "Choisissez un thème culturel ou téléchargez une image d'inspiration." },
                { step: "02", title: "Génération IA", desc: "Notre IA génère des motifs textiles uniques basés sur votre concept." },
                { step: "03", title: "Confection", desc: "Nos artisans partenaires donnent vie au design avec des matériaux locaux." },
                { step: "04", title: "Livraison", desc: "Recevez votre pièce unique certifiée par NFT sur la blockchain." }
              ].map((s, i) => (
                <div key={i} className="relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                  <span className="text-4xl font-black text-[#D4AF37]/20 absolute top-4 right-6">{s.step}</span>
                  <h3 className="text-xl font-bold text-white mb-4 mt-4">{s.title}</h3>
                  <p className="text-gray-400 text-sm">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section FAQ */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Questions Fréquentes</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 max-w-3xl mx-auto">
            {[
              { q: "Qu'est-ce que la certification blockchain ?", a: "C'est une preuve numérique d'authenticité et de propriété unique pour chaque vêtement." },
              { q: "Comment les créateurs sont-ils rémunérés ?", a: "Les créateurs reçoivent 80% du prix de vente directement via des smart contracts." },
              { q: "Puis-je personnaliser mon design ?", a: "Oui, notre Styliste IA permet d'ajuster les motifs et les coupes selon vos envies." }
            ].map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <h4 className="text-[#D4AF37] font-semibold mb-2">{faq.q}</h4>
                <p className="text-gray-400 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-white/10 py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-2xl font-bold text-white">DAHOMEY-TECH</div>
            <div className="flex gap-8 text-sm text-gray-400">
              <a href="#" className="hover:text-[#D4AF37]">Twitter</a>
              <a href="#" className="hover:text-[#D4AF37]">Instagram</a>
              <a href="#" className="hover:text-[#D4AF37]">Discord</a>
            </div>
            <p className="text-xs text-gray-500">© 2026 DAHOMEY-TECH. Tous droits réservés.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
