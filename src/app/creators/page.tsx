'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Star, Users, Package } from 'lucide-react';
import { creators, Creator } from '@/lib/mock-data';

const specialties = ['Tous', 'Wax & Pagne', 'Haute Couture', 'Streetwear Africain'];

export default function CreatorsPage() {
  const [activeFilter, setActiveFilter] = useState('Tous');

  const filtered = activeFilter === 'Tous'
    ? creators
    : creators.filter(c => c.specialty === activeFilter);

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-14">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-4">
            Nos <span style={{ color: 'var(--gold)' }}>Créateurs</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto font-sans">
            Rencontrez les artistes et artisans qui donnent vie à la mode béninoise contemporaine
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {specialties.map(spec => (
            <button
              key={spec}
              onClick={() => setActiveFilter(spec)}
              className={`px-6 py-2 rounded-full font-medium font-sans transition-all text-sm ${
                activeFilter === spec
                  ? 'text-black'
                  : 'bg-zinc-800 text-white hover:bg-zinc-700'
              }`}
              style={activeFilter === spec ? { backgroundColor: 'var(--gold)' } : {}}
            >
              {spec}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(creator => (
            <CreatorCard key={creator.id} creator={creator} />
          ))}
        </div>
      </div>
    </div>
  );
}

function CreatorCard({ creator }: { creator: Creator }) {
  return (
    <Link href={`/creators/${creator.id}`}>
      <div className="group luxury-card overflow-hidden hover:scale-[1.02] transition-all duration-300 cursor-pointer">
        <div className="relative h-48 overflow-hidden">
          <img
            src={creator.avatar}
            alt={creator.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-4 left-4">
            <span className="px-3 py-1 rounded-full text-xs font-semibold font-sans text-black" style={{ backgroundColor: 'var(--gold)' }}>
              {creator.specialty}
            </span>
          </div>
        </div>
        <div className="p-5">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="font-display text-xl font-bold text-white group-hover:text-[#C9A84C] transition-colors">
                {creator.name}
              </h3>
              <p className="text-zinc-400 text-sm font-sans">{creator.city}, Bénin</p>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-[#C9A84C] text-[#C9A84C]" />
              <span className="text-white text-sm font-semibold font-sans">{creator.rating}</span>
            </div>
          </div>
          <p className="text-zinc-400 text-sm font-sans leading-relaxed mb-4 line-clamp-2">
            {creator.bio}
          </p>
          <div className="flex items-center gap-4 border-t border-white/10 pt-4">
            <div className="flex items-center gap-1.5">
              <Package className="w-4 h-4 text-zinc-500" />
              <span className="text-zinc-300 text-sm font-sans">{creator.totalCreations} créations</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Users className="w-4 h-4 text-zinc-500" />
              <span className="text-zinc-300 text-sm font-sans">{(creator.followers / 1000).toFixed(1)}k abonnés</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
