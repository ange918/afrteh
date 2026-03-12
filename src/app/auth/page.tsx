'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

type Role = 'client' | 'styliste';

const SPECIALTIES = [
  'Wax & Pagne',
  'Haute Couture',
  'Streetwear',
  'Broderie & Bazin',
];

export default function AuthPage() {
  const router = useRouter();
  const { login, register } = useAuth();
  const [view, setView] = useState<'login' | 'register'>('login');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Login state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // Register state
  const [regName, setRegName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regConfirm, setRegConfirm] = useState('');
  const [regRole, setRegRole] = useState<Role>('client');
  const [regCity, setRegCity] = useState('');
  const [regSpecialty, setRegSpecialty] = useState(SPECIALTIES[0]);
  const [regBio, setRegBio] = useState('');

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(loginEmail, loginPassword);
      router.push('/account');
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Erreur de connexion.');
    } finally {
      setLoading(false);
    }
  };

  const handleDemoLogin = async (email: string, password: string) => {
    setError('');
    setLoading(true);
    try {
      await login(email, password);
      router.push('/account');
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Erreur de connexion.');
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    if (regPassword !== regConfirm) {
      setError('Les mots de passe ne correspondent pas.');
      return;
    }
    setLoading(true);
    try {
      const extra = regRole === 'styliste'
        ? { city: regCity, specialty: regSpecialty, bio: regBio }
        : {};
      await register(regName, regEmail, regPassword, regRole, extra);
      router.push('/account');
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Erreur lors de la création du compte.');
    } finally {
      setLoading(false);
    }
  };

  const inputClass = "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-[#C9A84C] transition-colors text-sm font-sans";
  const labelClass = "block text-xs font-semibold text-zinc-400 mb-1.5 font-sans uppercase tracking-wider";

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <h1 className="font-display text-4xl font-bold text-white mb-2">
            {view === 'login' ? 'Connexion' : 'Créer un compte'}
          </h1>
          <p className="text-zinc-400 font-sans text-sm">
            {view === 'login'
              ? 'Accédez à votre espace DAHOMEY-TECH'
              : 'Rejoignez la communauté de la mode africaine augmentée'}
          </p>
        </div>

        <div className="luxury-card p-8">
          {error && (
            <div className="mb-6 px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-sans">
              {error}
            </div>
          )}

          {/* LOGIN VIEW */}
          {view === 'login' && (
            <>
              <form onSubmit={handleLogin} className="space-y-5">
                <div>
                  <label className={labelClass}>Email</label>
                  <input
                    type="email"
                    required
                    placeholder="votre@email.com"
                    value={loginEmail}
                    onChange={e => setLoginEmail(e.target.value)}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Mot de passe</label>
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    value={loginPassword}
                    onChange={e => setLoginPassword(e.target.value)}
                    className={inputClass}
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-gold w-full py-3 text-sm font-semibold font-sans disabled:opacity-50"
                >
                  {loading ? 'Connexion…' : 'Se connecter'}
                </button>
              </form>

              <div className="mt-6">
                <p className="text-center text-xs text-zinc-500 font-sans mb-3">— Comptes de démonstration —</p>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => handleDemoLogin('styliste@demo.com', 'demo123')}
                    disabled={loading}
                    className="px-3 py-2.5 rounded-lg border border-[#C9A84C]/40 text-[#C9A84C] text-xs font-semibold font-sans hover:bg-[#C9A84C]/10 transition-colors disabled:opacity-50"
                  >
                    ✂️ Styliste Démo
                  </button>
                  <button
                    onClick={() => handleDemoLogin('client@demo.com', 'demo123')}
                    disabled={loading}
                    className="px-3 py-2.5 rounded-lg border border-white/20 text-zinc-300 text-xs font-semibold font-sans hover:bg-white/10 transition-colors disabled:opacity-50"
                  >
                    🛍 Client Démo
                  </button>
                </div>
              </div>

              <p className="mt-6 text-center text-sm text-zinc-500 font-sans">
                Pas encore de compte ?{' '}
                <button
                  onClick={() => { setView('register'); setError(''); }}
                  className="font-semibold hover:underline"
                  style={{ color: 'var(--gold)' }}
                >
                  S'inscrire
                </button>
              </p>
            </>
          )}

          {/* REGISTER VIEW */}
          {view === 'register' && (
            <>
              <form onSubmit={handleRegister} className="space-y-5">
                <div>
                  <label className={labelClass}>Nom complet</label>
                  <input
                    type="text"
                    required
                    placeholder="Votre nom"
                    value={regName}
                    onChange={e => setRegName(e.target.value)}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Email</label>
                  <input
                    type="email"
                    required
                    placeholder="votre@email.com"
                    value={regEmail}
                    onChange={e => setRegEmail(e.target.value)}
                    className={inputClass}
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className={labelClass}>Mot de passe</label>
                    <input
                      type="password"
                      required
                      placeholder="••••••••"
                      value={regPassword}
                      onChange={e => setRegPassword(e.target.value)}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Confirmer</label>
                    <input
                      type="password"
                      required
                      placeholder="••••••••"
                      value={regConfirm}
                      onChange={e => setRegConfirm(e.target.value)}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Je suis…</label>
                  <div className="grid grid-cols-2 gap-3">
                    {([
                      { role: 'client' as Role, icon: '🛍', title: 'Client', sub: 'Je cherche des créations uniques' },
                      { role: 'styliste' as Role, icon: '✂️', title: 'Styliste / Créateur', sub: 'Je veux vendre mes créations' },
                    ] as const).map(opt => (
                      <button
                        key={opt.role}
                        type="button"
                        onClick={() => setRegRole(opt.role)}
                        className={`p-4 rounded-lg border text-left transition-all ${
                          regRole === opt.role
                            ? 'border-[#C9A84C] bg-[#C9A84C]/10'
                            : 'border-white/10 hover:border-white/30'
                        }`}
                      >
                        <div className="text-2xl mb-1">{opt.icon}</div>
                        <div className="text-sm font-semibold text-white font-sans">{opt.title}</div>
                        <div className="text-xs text-zinc-400 font-sans mt-0.5">{opt.sub}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {regRole === 'styliste' && (
                  <>
                    <div>
                      <label className={labelClass}>Ville</label>
                      <input
                        type="text"
                        placeholder="Ex: Cotonou"
                        value={regCity}
                        onChange={e => setRegCity(e.target.value)}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Spécialité</label>
                      <select
                        value={regSpecialty}
                        onChange={e => setRegSpecialty(e.target.value)}
                        className={inputClass + ' cursor-pointer'}
                      >
                        {SPECIALTIES.map(s => (
                          <option key={s} value={s} className="bg-zinc-900">{s}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>Bio courte</label>
                      <textarea
                        rows={3}
                        placeholder="Parlez-nous de votre style et de votre parcours…"
                        value={regBio}
                        onChange={e => setRegBio(e.target.value)}
                        className={inputClass + ' resize-none'}
                      />
                    </div>
                  </>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-gold w-full py-3 text-sm font-semibold font-sans disabled:opacity-50"
                >
                  {loading ? 'Création…' : 'Créer mon compte'}
                </button>
              </form>

              <p className="mt-6 text-center text-sm text-zinc-500 font-sans">
                Déjà un compte ?{' '}
                <button
                  onClick={() => { setView('login'); setError(''); }}
                  className="font-semibold hover:underline"
                  style={{ color: 'var(--gold)' }}
                >
                  Se connecter
                </button>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
