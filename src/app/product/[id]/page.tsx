'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { getProductById, getRelatedProducts } from '@/lib/mock-data';
import ProductCard from '@/components/ProductCard';
import { ArrowLeft, ShoppingCart, Sparkles, Star } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';

export default function ProductDetailPage() {
  const params = useParams();
  const productId = params.id as string;
  const product = getProductById(productId);
  const [addedToCart, setAddedToCart] = useState(false);
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-3xl text-white mb-4">Produit non trouvé</h1>
          <Link href="/marketplace" className="font-sans hover:underline" style={{ color: 'var(--gold)' }}>
            Retour à la marketplace
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product.id, product.style);

  const handleAddToCart = () => {
    addToCart(product);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const styleColors: Record<string, string> = {
    'Streetwear': 'bg-orange-500',
    'Traditionnel': 'bg-green-600',
    'Luxe': 'bg-yellow-500'
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Link
          href="/marketplace"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8 font-sans text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour à la marketplace
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className={`absolute top-4 left-4 ${styleColors[product.style]} text-black text-sm font-semibold px-4 py-2 rounded-full font-sans`}>
              {product.style}
            </div>
            {product.isNew && (
              <div className="absolute top-4 right-4 text-black text-sm font-bold px-3 py-1 rounded-full font-sans" style={{ backgroundColor: 'var(--gold)' }}>
                Nouveau
              </div>
            )}
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-sm font-medium mb-2 font-sans" style={{ color: 'var(--gold)' }}>{product.creator}</p>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-4">{product.name}</h1>

            {product.rating && (
              <div className="flex items-center gap-2 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-[#C9A84C] text-[#C9A84C]' : 'text-zinc-600'}`} />
                ))}
                <span className="text-zinc-400 text-sm font-sans">{product.rating} ({product.reviewCount} avis)</span>
              </div>
            )}

            <p className="text-zinc-400 text-lg mb-8 leading-relaxed font-sans">
              {product.description}
            </p>

            <div className="bg-zinc-900 rounded-xl p-6 mb-8 border border-zinc-800">
              <h3 className="text-white font-semibold mb-4 font-sans">Détails du produit</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-zinc-400 font-sans text-sm">Créateur</span>
                  <span className="text-white font-sans text-sm">{product.creator}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400 font-sans text-sm">Matière</span>
                  <span className="text-white font-sans text-sm">{product.material}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400 font-sans text-sm">Style</span>
                  <span className="text-white font-sans text-sm">{product.style}</span>
                </div>
                {product.tags.length > 0 && (
                  <div className="flex justify-between items-start">
                    <span className="text-zinc-400 font-sans text-sm">Tags</span>
                    <div className="flex flex-wrap gap-1 justify-end">
                      {product.tags.map(tag => (
                        <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-300 font-sans">#{tag}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between mb-6">
              <span className="font-display text-4xl font-bold" style={{ color: 'var(--gold)' }}>{product.price} €</span>
              <span className="text-zinc-500 text-sm font-sans">{Math.round(product.price * 655.957).toLocaleString('fr-FR')} FCFA</span>
            </div>

            <button
              onClick={handleAddToCart}
              disabled={addedToCart}
              className={`w-full py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-3 transition-all font-sans ${
                addedToCart
                  ? 'bg-green-500 text-white'
                  : 'text-black'
              }`}
              style={!addedToCart ? { backgroundColor: 'var(--gold)' } : {}}
            >
              <ShoppingCart className="w-5 h-5" />
              {addedToCart ? '✓ Ajouté au panier !' : 'Ajouter au panier'}
            </button>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="border-t border-zinc-800 pt-12">
            <div className="flex items-center gap-3 mb-8">
              <Sparkles className="w-6 h-6" style={{ color: 'var(--gold)' }} />
              <h2 className="font-display text-3xl font-bold text-white">Vous aimerez aussi</h2>
              <span className="text-zinc-500 text-sm font-sans">Suggestions IA</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
