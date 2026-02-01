export default function MarketplacePage() {
  const products = [
    { id: 1, name: "IA Analytics Pro", price: "299€", category: "SaaS" },
    { id: 2, name: "Smart Contract Audit", price: "850€", category: "Security" },
    { id: 3, name: "Cloud Infrastructure", price: "150€/m", category: "Infrastructure" },
    { id: 4, name: "DevOps Automation", price: "450€", category: "Tooling" },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8 border-l-4 border-[#D4AF37] pl-4">Marketplace</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <div key={p.id} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#D4AF37]/50 transition-colors">
            <div className="text-xs text-[#D4AF37] font-semibold mb-2">{p.category}</div>
            <h3 className="text-lg font-medium mb-4">{p.name}</h3>
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold">{p.price}</span>
              <button className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-sm transition-all">Détails</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
