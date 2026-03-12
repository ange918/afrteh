import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Star, Users, TrendingUp, ArrowLeft } from 'lucide-react';
import { getCreatorById, getProductsByCreator, creators } from '@/lib/mock-data';
import ProductCard from '@/components/ProductCard';
import FollowButton from '@/components/FollowButton';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return creators.map(c => ({ id: c.id }));
}

export default async function CreatorProfilePage({ params }: PageProps) {
  const { id } = await params;
  const creator = getCreatorById(id);

  if (!creator) notFound();

  const creatorProducts = getProductsByCreator(creator.name);

  return (
    <div className="min-h-screen bg-black">
      <div className="relative h-72 md:h-96 overflow-hidden">
        <img
          src={creator.avatar}
          alt={creator.name}
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-4 pb-8">
          <Link href="/creators" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-6 font-sans text-sm">
            <ArrowLeft className="w-4 h-4" />
            Tous les créateurs
          </Link>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <span className="px-3 py-1 rounded-full text-xs font-semibold font-sans text-black mb-3 inline-block" style={{ backgroundColor: 'var(--gold)' }}>
                {creator.specialty}
              </span>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-white">{creator.name}</h1>
              <p className="text-zinc-300 font-sans mt-1">{creator.city}, Bénin</p>
            </div>
            <FollowButton />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="luxury-card p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-1">
              <Star className="w-5 h-5 fill-[#C9A84C] text-[#C9A84C]" />
              <span className="font-display text-3xl font-bold text-white">{creator.rating}</span>
            </div>
            <p className="text-zinc-400 text-sm font-sans">Note moyenne</p>
          </div>
          <div className="luxury-card p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-1">
              <TrendingUp className="w-5 h-5" style={{ color: 'var(--gold)' }} />
              <span className="font-display text-3xl font-bold text-white">{creator.totalSales.toLocaleString('fr-FR')}</span>
            </div>
            <p className="text-zinc-400 text-sm font-sans">Ventes totales</p>
          </div>
          <div className="luxury-card p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-1">
              <Users className="w-5 h-5" style={{ color: 'var(--gold)' }} />
              <span className="font-display text-3xl font-bold text-white">{(creator.followers / 1000).toFixed(1)}k</span>
            </div>
            <p className="text-zinc-400 text-sm font-sans">Abonnés</p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="font-display text-3xl font-bold text-white mb-3">À propos</h2>
          <p className="text-zinc-300 font-sans leading-relaxed max-w-3xl">{creator.bio}</p>
        </div>

        {creatorProducts.length > 0 ? (
          <div>
            <h2 className="font-display text-3xl font-bold text-white mb-6">
              Créations de <span style={{ color: 'var(--gold)' }}>{creator.name}</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {creatorProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-zinc-400 font-sans">Aucune création disponible pour le moment.</p>
            <Link href="/marketplace" className="mt-4 inline-block text-[#C9A84C] hover:underline font-sans">
              Voir toute la marketplace
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
