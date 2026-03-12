'use client';

import { useState, useMemo } from 'react';
import { searchProducts } from '@/lib/mock-data';
import ProductCard from '@/components/ProductCard';
import { Search } from 'lucide-react';

const styles = ['Tous', 'Streetwear', 'Traditionnel', 'Luxe'];
const priceRanges = ['Tous les prix', '< 50€', '50-150€', '150€+'];
const sortOptions = ['Plus récent', 'Prix croissant', 'Prix décroissant', 'Mieux noté'];

export default function MarketplacePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('Tous');
  const [selectedPrice, setSelectedPrice] = useState('Tous les prix');
  const [selectedSort, setSelectedSort] = useState('Plus récent');
  const [visible, setVisible] = useState(true);

  const applyFilter = (setter: (v: string) => void, value: string) => {
    setVisible(false);
    setTimeout(() => {
      setter(value);
      setVisible(true);
    }, 150);
  };

  const filteredProducts = useMemo(() => {
    return searchProducts(
      searchQuery,
      selectedStyle,
      selectedPrice === 'Tous les prix' ? undefined : selectedPrice,
      selectedSort === 'Plus récent' ? undefined : selectedSort
    );
  }, [searchQuery, selectedStyle, selectedPrice, selectedSort]);

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-4">
            Marketplace
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto font-sans">
            Découvrez des créations uniques mêlant savoir-faire ancestral et design contemporain
          </p>
        </div>

        <div className="mb-8 space-y-4">
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Rechercher un produit, créateur, matière..."
              value={searchQuery}
              onChange={(e) => applyFilter(setSearchQuery, e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-700 rounded-full py-3 pl-12 pr-4 text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#C9A84C] transition-colors font-sans text-sm"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {styles.map((style) => (
              <button
                key={style}
                onClick={() => applyFilter(setSelectedStyle, style)}
                className={`px-5 py-2 rounded-full font-medium transition-all text-sm font-sans ${
                  selectedStyle === style
                    ? 'text-black'
                    : 'bg-zinc-800 text-white hover:bg-zinc-700'
                }`}
                style={selectedStyle === style ? { backgroundColor: 'var(--gold)' } : {}}
              >
                {style}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-zinc-500 text-sm font-sans">Prix :</span>
              <div className="flex gap-2">
                {priceRanges.map(range => (
                  <button
                    key={range}
                    onClick={() => applyFilter(setSelectedPrice, range)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-sans transition-all border ${
                      selectedPrice === range
                        ? 'border-[#C9A84C] text-[#C9A84C]'
                        : 'border-zinc-700 text-zinc-400 hover:border-zinc-500'
                    }`}
                  >
                    {range}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-zinc-500 text-sm font-sans">Tri :</span>
              <select
                value={selectedSort}
                onChange={(e) => applyFilter(setSelectedSort, e.target.value)}
                className="bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-1.5 text-white text-xs font-sans focus:outline-none focus:border-[#C9A84C]"
              >
                {sortOptions.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div
          className="transition-opacity duration-150"
          style={{ opacity: visible ? 1 : 0 }}
        >
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-zinc-400 text-lg font-sans">Aucun produit trouvé</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedStyle('Tous');
                  setSelectedPrice('Tous les prix');
                  setSelectedSort('Plus récent');
                }}
                className="mt-4 font-sans"
                style={{ color: 'var(--gold)' }}
              >
                Réinitialiser les filtres
              </button>
            </div>
          )}
        </div>

        <div className="mt-12 text-center text-zinc-500 font-sans text-sm">
          {filteredProducts.length} produit{filteredProducts.length > 1 ? 's' : ''} trouvé{filteredProducts.length > 1 ? 's' : ''}
        </div>
      </div>
    </div>
  );
}
