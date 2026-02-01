export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-[calc(100vh-64px)]">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/10 bg-white/5 hidden lg:block">
        <div className="p-6 space-y-1">
          <a href="/dashboard" className="flex items-center space-x-3 px-4 py-2 bg-[#D4AF37]/10 text-[#D4AF37] rounded-lg text-sm font-medium">
            <span>Aperçu</span>
          </a>
          <a href="#" className="flex items-center space-x-3 px-4 py-2 text-gray-400 hover:bg-white/5 hover:text-white rounded-lg text-sm font-medium transition-colors">
            <span>Mes Projets</span>
          </a>
          <a href="#" className="flex items-center space-x-3 px-4 py-2 text-gray-400 hover:bg-white/5 hover:text-white rounded-lg text-sm font-medium transition-colors">
            <span>Facturation</span>
          </a>
          <a href="#" className="flex items-center space-x-3 px-4 py-2 text-gray-400 hover:bg-white/5 hover:text-white rounded-lg text-sm font-medium transition-colors">
            <span>Paramètres</span>
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
