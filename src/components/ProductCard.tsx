'use client';

import Link from 'next/link';
import { Product } from '@/lib/mock-data';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const styleColors = {
    'Streetwear': 'bg-orange-500',
    'Traditionnel': 'bg-green-600',
    'Luxe': 'bg-yellow-500'
  };

  return (
    <Link href={`/product/${product.id}`}>
      <div className="group bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-yellow-500/50 transition-all duration-300 hover:transform hover:scale-[1.02]">
        <div className="relative aspect-[3/4] overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className={`absolute top-3 left-3 ${styleColors[product.style]} text-black text-xs font-semibold px-3 py-1 rounded-full`}>
            {product.style}
          </div>
        </div>
        <div className="p-4">
          <p className="text-zinc-400 text-sm mb-1">{product.creator}</p>
          <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-yellow-500 transition-colors">
            {product.name}
          </h3>
          <p className="text-yellow-500 font-bold text-xl">{product.price} €</p>
        </div>
      </div>
    </Link>
  );
}
