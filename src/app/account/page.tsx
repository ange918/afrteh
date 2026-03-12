'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { LogOut, User, MapPin, Scissors } from 'lucide-react';

export default function AccountPage() {
  const { user, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) router.replace('/auth');
  }, [user, router]);

  if (!user) return null;

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-black py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="luxury-card p-8 mb-6">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-black text-2xl font-bold font-display" style={{ backgroundColor: 'var(--gold)' }}>
                {user.name.charAt(0).toUpperCase()}
              </div>
              <div>
                <h1 className="font-display text-3xl font-bold text-white">{user.name}</h1>
                <p className="text-zinc-400 font-sans text-sm">{user.email}</p>
                <span className="inline-block mt-1 px-2.5 py-0.5 rounded-full text-xs font-semibold font-sans text-black" style={{ backgroundColor: 'var(--gold)' }}>
                  {user.role === 'styliste' ? 'Styliste / Créateur' : 'Client'}
                </span>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 space-y-4">
            <div className="flex items-center gap-3 text-zinc-300 font-sans text-sm">
              <User className="w-4 h-4 text-zinc-500" />
              <span>{user.name}</span>
            </div>
            {user.city && (
              <div className="flex items-center gap-3 text-zinc-300 font-sans text-sm">
                <MapPin className="w-4 h-4 text-zinc-500" />
                <span>{user.city}</span>
              </div>
            )}
            {user.specialty && (
              <div className="flex items-center gap-3 text-zinc-300 font-sans text-sm">
                <Scissors className="w-4 h-4 text-zinc-500" />
                <span>{user.specialty}</span>
              </div>
            )}
            {user.bio && (
              <p className="text-zinc-400 font-sans text-sm leading-relaxed border-t border-white/10 pt-4">{user.bio}</p>
            )}
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-sm text-zinc-400 hover:text-red-400 transition-colors font-sans"
        >
          <LogOut className="w-4 h-4" />
          Se déconnecter
        </button>
      </div>
    </div>
  );
}
