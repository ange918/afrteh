'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { getProductById, getRelatedProducts } from '@/lib/mock-data';
import ProductCard from '@/components/ProductCard';
import { ArrowLeft, ShoppingCart, Sparkles } from 'lucide-react';
import { useState } from 'react';

export default function ProductDetailPage() {
  const params = useParams();
  const productId = params.id as string;
  const product = getProductById(productId);
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-white mb-4">Produit non trouvé</h1>
          <Link href="/marketplace" className="text-yellow-500 hover:underline">
            Retour à la marketplace
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product.id, product.style);

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const styleColors = {
    'Streetwear': 'bg-orange-500',
    'Traditionnel': 'bg-green-600',
    'Luxe': 'bg-yellow-500'
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Link 
          href="/marketplace" 
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8"
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
            <div className={`absolute top-4 left-4 ${styleColors[product.style]} text-black text-sm font-semibold px-4 py-2 rounded-full`}>
              {product.style}
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-yellow-500 text-sm font-medium mb-2">{product.creator}</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{product.name}</h1>
            
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              {product.description}
            </p>

            <div className="bg-zinc-900 rounded-xl p-6 mb-8">
              <h3 className="text-white font-semibold mb-4">Détails du produit</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-zinc-400">Créateur</span>
                  <span className="text-white">{product.creator}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Matière</span>
                  <span className="text-white">{product.material}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Style</span>
                  <span className="text-white">{product.style}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between mb-6">
              <span className="text-3xl font-bold text-yellow-500">{product.price} €</span>
            </div>

            <button
              onClick={handleAddToCart}
              disabled={addedToCart}
              className={`w-full py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-3 transition-all ${
                addedToCart
                  ? 'bg-green-500 text-white'
                  : 'bg-yellow-500 text-black hover:bg-yellow-400'
              }`}
            >
              <ShoppingCart className="w-5 h-5" />
              {addedToCart ? 'Ajouté au panier !' : 'Ajouter au panier'}
            </button>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="border-t border-zinc-800 pt-12">
            <div className="flex items-center gap-3 mb-8">
              <Sparkles className="w-6 h-6 text-yellow-500" />
              <h2 className="text-2xl font-bold text-white">Vous aimerez aussi</h2>
              <span className="text-zinc-500 text-sm">Suggestions IA</span>
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
