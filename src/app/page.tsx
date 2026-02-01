export default function HomePage() {
  return (
    <div className="relative isolate pt-14">
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
            L'excellence technologique au service de <span className="text-[#D4AF37]">l'Afrique</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300 max-w-2xl mx-auto">
            DAHOMEY-TECH propulse l'innovation avec des solutions d'intelligence artificielle premium et une marketplace dédiée à l'écosystème tech.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a href="/marketplace" className="rounded-full bg-[#D4AF37] px-8 py-3.5 text-sm font-semibold text-black shadow-sm hover:bg-[#B8962E] transition-all">
              Explorer la Marketplace
            </a>
            <a href="/assistant" className="text-sm font-semibold leading-6 text-white border border-white/20 rounded-full px-8 py-3 hover:bg-white/10 transition-all">
              Parler à l'Assistant IA
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
