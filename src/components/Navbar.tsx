import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tighter text-white">
          DAHOMEY<span className="text-[#D4AF37]">-TECH</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-sm font-medium hover:text-[#D4AF37] transition-colors">Accueil</Link>
          <Link href="/marketplace" className="text-sm font-medium hover:text-[#D4AF37] transition-colors">Marketplace</Link>
          <Link href="/assistant" className="text-sm font-medium hover:text-[#D4AF37] transition-colors">Assistant IA</Link>
          <Link href="/dashboard" className="text-sm font-medium px-4 py-2 bg-[#D4AF37] text-black rounded-full hover:bg-[#B8962E] transition-colors">Dashboard</Link>
        </div>

        <button className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
        </button>
      </div>
    </nav>
  );
}
