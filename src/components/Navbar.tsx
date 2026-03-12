'use client';

import Link from "next/link";
import { ShoppingBag, Menu, X, User } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";

export default function Navbar() {
  const { getItemCount } = useCart();
  const { user } = useAuth();
  const itemCount = getItemCount();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/marketplace', label: 'Marketplace' },
    { href: '/creators', label: 'Créateurs' },
    { href: '/assistant', label: 'Assistant IA' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tighter text-white font-display">
          DAHOMEY<span style={{ color: 'var(--gold)' }}>-TECH</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium hover:text-[#C9A84C] transition-colors font-sans"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/cart" className="relative p-2 hover:text-[#C9A84C] transition-colors">
            <ShoppingBag className="w-5 h-5" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full text-black text-xs font-bold flex items-center justify-center" style={{ backgroundColor: 'var(--gold)' }}>
                {itemCount > 9 ? '9+' : itemCount}
              </span>
            )}
          </Link>
          {user ? (
            <Link
              href="/account"
              className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full text-black transition-colors font-sans"
              style={{ backgroundColor: 'var(--gold)' }}
            >
              <User className="w-4 h-4" />
              Mon Compte
            </Link>
          ) : (
            <Link
              href="/auth"
              className="text-sm font-medium px-4 py-2 rounded-full border transition-colors font-sans hover:bg-white/10"
              style={{ borderColor: 'var(--gold)', color: 'var(--gold)' }}
            >
              Connexion
            </Link>
          )}
        </div>

        <div className="md:hidden flex items-center gap-3">
          <Link href="/cart" className="relative p-2">
            <ShoppingBag className="w-5 h-5" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full text-black text-xs font-bold flex items-center justify-center" style={{ backgroundColor: 'var(--gold)' }}>
                {itemCount}
              </span>
            )}
          </Link>
          <button className="text-white" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-black/95 border-t border-white/10 px-4 py-4 flex flex-col gap-4">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium hover:text-[#C9A84C] transition-colors py-1"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          {user ? (
            <Link
              href="/account"
              className="text-sm font-medium px-4 py-2 rounded-full text-black text-center"
              style={{ backgroundColor: 'var(--gold)' }}
              onClick={() => setMobileOpen(false)}
            >
              Mon Compte
            </Link>
          ) : (
            <Link
              href="/auth"
              className="text-sm font-medium px-4 py-2 rounded-full text-center border"
              style={{ borderColor: 'var(--gold)', color: 'var(--gold)' }}
              onClick={() => setMobileOpen(false)}
            >
              Connexion
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
