'use client';

import { useState, useMemo } from 'react';
import { products, searchProducts } from '@/lib/mock-data';
import ProductCard from '@/components/ProductCard';
import { Search } from 'lucide-react';

const styles = ['Tous', 'Streetwear', 'Traditionnel', 'Luxe'];

export default function MarketplacePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('Tous');

  const filteredProducts = useMemo(() => {
    return searchProducts(searchQuery, selectedStyle);
  }, [searchQuery, selectedStyle]);

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Marketplace
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
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
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-700 rounded-full py-3 pl-12 pr-4 text-white placeholder:text-zinc-500 focus:outline-none focus:border-yellow-500 transition-colors"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {styles.map((style) => (
              <button
                key={style}
                onClick={() => setSelectedStyle(style)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedStyle === style
                    ? 'bg-yellow-500 text-black'
                    : 'bg-zinc-800 text-white hover:bg-zinc-700'
                }`}
              >
                {style}
              </button>
            ))}
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-zinc-400 text-lg">Aucun produit trouvé</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedStyle('Tous');
              }}
              className="mt-4 text-yellow-500 hover:underline"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}

        <div className="mt-12 text-center text-zinc-500">
          {filteredProducts.length} produit{filteredProducts.length > 1 ? 's' : ''} trouvé{filteredProducts.length > 1 ? 's' : ''}
        </div>
      </div>
    </div>
  );
}
