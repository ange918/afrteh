'use client';

import Link from 'next/link';
import { ShoppingBag, Star } from 'lucide-react';
import { Product } from '@/lib/mock-data';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const styleColors: Record<string, string> = {
    'Streetwear': 'bg-orange-500',
    'Traditionnel': 'bg-green-600',
    'Luxe': 'bg-yellow-500'
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <Link href={`/product/${product.id}`}>
      <div className="group bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-[#C9A84C]/50 transition-all duration-300 hover:scale-[1.02]">
        <div className="relative aspect-[3/4] overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className={`absolute top-3 left-3 ${styleColors[product.style]} text-black text-xs font-semibold px-3 py-1 rounded-full`}>
            {product.style}
          </div>
          {product.isNew && (
            <div className="absolute top-3 right-3 bg-[#C9A84C] text-black text-xs font-bold px-2 py-1 rounded-full">
              Nouveau
            </div>
          )}
          <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 p-3">
            <button
              onClick={handleAddToCart}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-black text-sm font-semibold transition-opacity"
              style={{ backgroundColor: 'var(--gold)' }}
            >
              <ShoppingBag className="w-4 h-4" />
              Ajouter au panier
            </button>
          </div>
        </div>
        <div className="p-4">
          <p className="text-zinc-400 text-sm mb-1 font-sans">{product.creator}</p>
          <h3 className="text-white font-semibold text-lg mb-1 group-hover:text-[#C9A84C] transition-colors font-display">
            {product.name}
          </h3>
          <div className="flex items-center justify-between">
            <p className="font-bold text-xl" style={{ color: 'var(--gold)' }}>{product.price} €</p>
            {product.rating && (
              <div className="flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-[#C9A84C] text-[#C9A84C]" />
                <span className="text-zinc-400 text-xs font-sans">{product.rating}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
