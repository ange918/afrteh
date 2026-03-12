'use client';

import { useCart } from '@/context/CartContext';
import { Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const SERVICE_FEE_RATE = 0.12;
const FCFA_RATE = 655.957;

export default function CartPage() {
  const { items, removeFromCart, clearCart, getTotal } = useCart();

  const subtotal = getTotal();
  const serviceFee = subtotal * SERVICE_FEE_RATE;
  const total = subtotal + serviceFee;
  const totalFCFA = Math.round(total * FCFA_RATE);

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4">
        <div className="text-center">
          <ShoppingBag className="w-20 h-20 text-zinc-700 mx-auto mb-6" />
          <h1 className="font-display text-4xl font-bold text-white mb-3">Votre panier est vide</h1>
          <p className="text-zinc-400 font-sans mb-8">Découvrez nos créations d'exception et ajoutez-les à votre panier.</p>
          <Link href="/marketplace" className="btn-gold inline-block font-sans">
            Explorer la Marketplace
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="flex items-center gap-4 mb-10">
          <Link href="/marketplace" className="text-zinc-400 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="font-display text-4xl font-bold text-white">Mon Panier</h1>
          <span className="text-zinc-500 font-sans text-sm">({items.length} article{items.length > 1 ? 's' : ''})</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.id} className="luxury-card flex gap-4 p-4">
                <div className="w-24 h-32 rounded-lg overflow-hidden flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-zinc-400 text-sm font-sans mb-0.5">{item.creator}</p>
                  <h3 className="font-display text-xl font-semibold text-white mb-1">{item.name}</h3>
                  <p className="text-zinc-500 text-sm font-sans mb-2">{item.material}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-lg" style={{ color: 'var(--gold)' }}>
                        {(item.price * item.quantity).toLocaleString('fr-FR')} €
                      </p>
                      {item.quantity > 1 && (
                        <p className="text-zinc-500 text-xs font-sans">{item.price} € × {item.quantity}</p>
                      )}
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 text-zinc-500 hover:text-red-400 transition-colors rounded-lg hover:bg-red-400/10"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <button
              onClick={clearCart}
              className="text-sm text-zinc-500 hover:text-red-400 transition-colors font-sans flex items-center gap-1.5"
            >
              <Trash2 className="w-4 h-4" />
              Vider le panier
            </button>
          </div>

          <div className="lg:col-span-1">
            <div className="luxury-card p-6 sticky top-24">
              <h2 className="font-display text-2xl font-semibold text-white mb-6">Récapitulatif</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm font-sans">
                  <span className="text-zinc-400">Sous-total</span>
                  <span className="text-white">{subtotal.toLocaleString('fr-FR')} €</span>
                </div>
                <div className="flex justify-between text-sm font-sans">
                  <span className="text-zinc-400">Frais de service (12%)</span>
                  <span className="text-white">{serviceFee.toFixed(2)} €</span>
                </div>
                <div className="border-t border-white/10 pt-3">
                  <div className="flex justify-between font-semibold font-sans">
                    <span className="text-white">Total</span>
                    <div className="text-right">
                      <p className="text-xl" style={{ color: 'var(--gold)' }}>{total.toFixed(2)} €</p>
                      <p className="text-zinc-500 text-xs">{totalFCFA.toLocaleString('fr-FR')} FCFA</p>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => alert('Le paiement sera bientôt disponible. Merci de votre intérêt pour DAHOMEY-TECH !')}
                className="w-full btn-gold font-sans text-center block"
              >
                Procéder au paiement
              </button>

              <div className="mt-4 p-3 rounded-lg bg-zinc-900 border border-zinc-800">
                <p className="text-center text-zinc-400 text-xs font-sans">
                  ✨ Paiement sécurisé — <span style={{ color: 'var(--gold)' }}>Bientôt disponible</span>
                </p>
              </div>

              <div className="mt-4 text-center">
                <Link href="/marketplace" className="text-sm text-zinc-400 hover:text-[#C9A84C] transition-colors font-sans">
                  Continuer mes achats
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
