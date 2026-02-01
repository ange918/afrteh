export default function DashboardPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <h1 className="text-3xl font-black tracking-tight">Studio <span className="text-[#D4AF37]">Créateur</span></h1>
          <p className="text-gray-400 text-sm">Gérez vos collections et utilisez nos outils IA de design.</p>
        </div>
        <button className="bg-[#D4AF37] text-black font-bold px-6 py-2.5 rounded-full text-sm hover:scale-105 transition-all">
          Nouvelle Création IA
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        {[
          { label: "Modèles Générés", value: "48", icon: "🎨" },
          { label: "Essayages Virtuels", value: "1,240", icon: "👤" },
          { label: "Ventes (MTN MoMo)", value: "450k", icon: "💰" },
          { label: "Note Créateur", value: "4.9/5", icon: "⭐️" },
        ].map((stat, i) => (
          <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-3xl">
            <div className="text-2xl mb-2">{stat.icon}</div>
            <div className="text-xs text-gray-400 mb-1 font-bold uppercase tracking-widest">{stat.label}</div>
            <div className="text-2xl font-black">{stat.value}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Design Tool Preview */}
        <div className="bg-gradient-to-br from-[#D4AF37]/20 to-transparent border border-[#D4AF37]/30 rounded-3xl p-8">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <span className="mr-2">⚡️</span> IA Creative Mode
          </h3>
          <p className="text-sm text-gray-300 mb-6 leading-relaxed">
            Notre algorithme d'optimisation des coupes vient de finaliser l'analyse de votre dernier patron "Kanvô-Slim". 
            Gain de tissu estimé : <span className="text-[#D4AF37] font-bold">14%</span>.
          </p>
          <div className="h-32 bg-black/40 rounded-2xl border border-white/5 flex items-center justify-center italic text-xs text-gray-500">
            [ Visualisation du patron optimisé par IA ]
          </div>
        </div>

        {/* Local Trends */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <span className="mr-2">📈</span> Tendances Bénin
          </h3>
          <div className="space-y-4">
            {[
              { label: "Batik Indigo", val: "High Demand", color: "bg-blue-500" },
              { label: "Coupes Déstructurées", val: "Rising", color: "bg-green-500" },
              { label: "Accessoires Bronze", val: "Stable", color: "bg-yellow-500" }
            ].map((t, i) => (
              <div key={i} className="flex justify-between items-center bg-white/5 p-3 rounded-xl border border-white/5">
                <span className="text-sm font-medium">{t.label}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full ${t.color} text-white font-bold`}>{t.val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
