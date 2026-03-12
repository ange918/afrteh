'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { creators } from '@/lib/mock-data';
import { Star, Users, Package } from 'lucide-react';

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatCounter({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const count = useCountUp(target, 2000, started);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-5xl md:text-6xl font-bold mb-2" style={{ color: 'var(--gold)' }}>
        {count}{suffix}
      </p>
      <p className="text-zinc-400 font-sans text-sm">{label}</p>
    </div>
  );
}

export default function HomePage() {
  const featuredCreators = creators.slice(0, 3);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <div className="relative isolate">
      <div className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/fabric-of-squares.png')]"></div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium leading-6 ring-1 ring-inset mb-8 font-sans" style={{ color: 'var(--gold)', ringColor: 'var(--gold)', backgroundColor: 'rgba(201,168,76,0.05)', borderColor: 'rgba(201,168,76,0.2)', border: '1px solid rgba(201,168,76,0.2)' }}>
            L'IA au service du patrimoine textile
          </div>
          <h1 className="font-display text-6xl font-bold tracking-tight text-white sm:text-8xl mb-8 leading-tight">
            Redéfinir la mode <span style={{ color: 'var(--gold)' }}>Béninoise</span> à l'ère de l'IA
          </h1>
          <p className="mt-6 text-xl leading-8 text-gray-300 max-w-3xl mx-auto font-sans">
            DAHOMEY-TECH connecte le savoir-faire ancestral africain aux technologies de pointe pour créer la mode augmentée de demain.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/marketplace" className="btn-gold w-full sm:w-auto text-center font-sans">
              Découvrir les Créateurs
            </Link>
            <Link href="/assistant" className="w-full sm:w-auto text-base font-semibold leading-6 text-white border border-white/20 rounded-full px-10 py-4 hover:bg-white/10 backdrop-blur-sm transition-all text-center font-sans">
              Essayer le Styliste IA
            </Link>
          </div>

          <div className="mt-24 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {[
              { title: "Génération de Designs", desc: "Créez des motifs uniques inspirés des traditions béninoises via notre IA créative." },
              { title: "Essayage Virtuel", desc: "Visualisez les créations sur vous instantanément grâce à la réalité augmentée." },
              { title: "Authenticité Blockchain", desc: "Chaque pièce est certifiée unique et tracée pour protéger nos créateurs." }
            ].map((f, i) => (
              <div key={i} className="luxury-card p-8 text-left group">
                <h3 className="font-bold text-lg mb-3 group-hover:translate-x-1 transition-transform font-sans" style={{ color: 'var(--gold)' }}>{f.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed font-sans">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div id="about" className="mx-auto max-w-7xl px-6 lg:px-8 py-24 border-t border-white/10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
                Notre Vision : Allier Tradition et Innovation
              </h2>
              <p className="text-lg text-gray-300 mb-6 font-sans">
                DAHOMEY-TECH n'est pas seulement une plateforme technologique, c'est un pont entre les générations. Nous croyons que l'intelligence artificielle peut magnifier le travail manuel de nos artisans au lieu de le remplacer.
              </p>
              <div className="space-y-4">
                {[
                  "Valorisation du Wax et du Bogolan via l'IA",
                  "Transparence totale grâce à la blockchain",
                  "Soutien direct aux artisans locaux"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--gold)' }}></div>
                    <span className="text-gray-200 font-sans">{item}</span>
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

        <div className="bg-black/20 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">Comment ça marche ?</h2>
              <p className="mt-4 text-lg text-gray-400 font-sans">Le futur de la mode africaine en 4 étapes simples.</p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
              {[
                { step: "01", title: "Inspiration", desc: "Choisissez un thème culturel ou téléchargez une image d'inspiration." },
                { step: "02", title: "Génération IA", desc: "Notre IA génère des motifs textiles uniques basés sur votre concept." },
                { step: "03", title: "Confection", desc: "Nos artisans partenaires donnent vie au design avec des matériaux locaux." },
                { step: "04", title: "Livraison", desc: "Recevez votre pièce unique certifiée par NFT sur la blockchain." }
              ].map((s, i) => (
                <div key={i} className="relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                  <span className="text-4xl font-black absolute top-4 right-6 font-display" style={{ color: 'rgba(201,168,76,0.2)' }}>{s.step}</span>
                  <h3 className="font-display text-xl font-bold text-white mb-4 mt-4">{s.title}</h3>
                  <p className="text-gray-400 text-sm font-sans">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section Créateurs en vedette */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 border-t border-white/10">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-white sm:text-5xl mb-3">
              Créateurs en <span style={{ color: 'var(--gold)' }}>Vedette</span>
            </h2>
            <p className="text-zinc-400 font-sans">Des artistes béninois d'exception qui redéfinissent la mode africaine</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {featuredCreators.map(creator => (
              <Link key={creator.id} href={`/creators/${creator.id}`}>
                <div className="group luxury-card overflow-hidden hover:scale-[1.02] transition-all duration-300">
                  <div className="relative h-52 overflow-hidden">
                    <img src={creator.avatar} alt={creator.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="font-display text-2xl font-bold text-white">{creator.name}</h3>
                      <p className="text-zinc-300 text-sm font-sans">{creator.specialty}</p>
                    </div>
                  </div>
                  <div className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 fill-[#C9A84C] text-[#C9A84C]" />
                        <span className="text-white text-sm font-sans">{creator.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Package className="w-3.5 h-3.5 text-zinc-500" />
                        <span className="text-zinc-400 text-sm font-sans">{creator.totalCreations}</span>
                      </div>
                    </div>
                    <span className="text-xs font-sans transition-colors group-hover:text-[#C9A84C]" style={{ color: 'var(--gold)' }}>Voir le profil →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link href="/creators" className="btn-gold inline-block font-sans">
              Voir tous les créateurs
            </Link>
          </div>
        </div>

        {/* Section Chiffres clés */}
        <div className="py-24 bg-black/30 border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="font-display text-4xl font-bold text-white sm:text-5xl mb-3">DAHOMEY-TECH en chiffres</h2>
              <p className="text-zinc-400 font-sans">Une communauté qui grandit chaque jour</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <StatCounter target={500} suffix="+" label="Créateurs" />
              <StatCounter target={10000} suffix="+" label="Clients satisfaits" />
              <StatCounter target={30} suffix="" label="Pays desservis" />
              <StatCounter target={49} suffix="/5" label="Note moyenne" />
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 border-t border-white/10">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">Questions Fréquentes</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 max-w-3xl mx-auto">
            {[
              { q: "Qu'est-ce que la certification blockchain ?", a: "C'est une preuve numérique d'authenticité et de propriété unique pour chaque vêtement." },
              { q: "Comment les créateurs sont-ils rémunérés ?", a: "Les créateurs reçoivent 80% du prix de vente directement via des smart contracts." },
              { q: "Puis-je personnaliser mon design ?", a: "Oui, notre Styliste IA permet d'ajuster les motifs et les coupes selon vos envies." }
            ].map((faq, i) => (
              <div key={i} className="luxury-card p-6">
                <h4 className="font-semibold mb-2 font-sans" style={{ color: 'var(--gold)' }}>{faq.q}</h4>
                <p className="text-gray-400 text-sm font-sans">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section Newsletter */}
        <div style={{ backgroundColor: '#0f0f0f' }} className="border-t border-white/10 py-20">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <h2 className="font-display text-4xl font-bold text-white mb-3">
              Rejoignez la <span style={{ color: 'var(--gold)' }}>Communauté</span>
            </h2>
            <p className="text-zinc-400 font-sans mb-8">
              Recevez en avant-première les nouvelles collections, les actualités des créateurs et les offres exclusives.
            </p>
            {subscribed ? (
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border font-sans text-sm" style={{ borderColor: 'var(--gold)', color: 'var(--gold)' }}>
                ✓ Merci ! Vous êtes inscrit à notre newsletter.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="votre@email.com"
                  required
                  className="flex-1 bg-zinc-900 border border-zinc-700 rounded-full py-3 px-5 text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#C9A84C] font-sans text-sm"
                />
                <button type="submit" className="btn-gold font-sans whitespace-nowrap">
                  Rejoindre la communauté
                </button>
              </form>
            )}
          </div>
        </div>

        <footer className="border-t border-white/10 py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="font-display text-2xl font-bold text-white">DAHOMEY-TECH</div>
            <div className="flex gap-8 text-sm text-gray-400 font-sans">
              <a href="#" className="hover:text-[#C9A84C] transition-colors">Twitter</a>
              <a href="#" className="hover:text-[#C9A84C] transition-colors">Instagram</a>
              <a href="#" className="hover:text-[#C9A84C] transition-colors">Discord</a>
            </div>
            <p className="text-xs text-gray-500 font-sans">© 2026 DAHOMEY-TECH. Tous droits réservés.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
