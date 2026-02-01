export default function DashboardPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Bienvenue, Innovateur</h1>
        <p className="text-gray-400">Voici l'état actuel de votre écosystème DAHOMEY-TECH.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[
          { label: "Projets Actifs", value: "12", trend: "+2" },
          { label: "Crédits IA", value: "2,450", trend: "Premium" },
          { label: "Ventes Marketplace", value: "840€", trend: "+15%" },
        ].map((stat, i) => (
          <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl">
            <div className="text-sm text-gray-400 mb-2">{stat.label}</div>
            <div className="flex items-baseline space-x-2">
              <span className="text-2xl font-bold">{stat.value}</span>
              <span className="text-xs text-[#D4AF37]">{stat.trend}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <h3 className="text-lg font-medium mb-4">Activités Récentes</h3>
        <div className="space-y-4 text-sm text-gray-300">
          <div className="flex justify-between items-center py-2 border-b border-white/5">
            <span>Achat de "IA Analytics Pro"</span>
            <span className="text-xs text-gray-500">Il y a 2h</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-white/5">
            <span>Mise à jour de l'Assistant IA</span>
            <span className="text-xs text-gray-500">Hier</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span>Nouveau projet déployé</span>
            <span className="text-xs text-gray-500">Il y a 3 jours</span>
          </div>
        </div>
      </div>
    </div>
  );
}
