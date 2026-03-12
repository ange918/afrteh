'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'client' | 'styliste';
  avatar?: string;
  city?: string;
  specialty?: string;
  bio?: string;
  createdAt: string;
}

interface StoredUser extends User {
  password: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<User>;
  register: (name: string, email: string, password: string, role: 'client' | 'styliste', extra?: Partial<User>) => Promise<User>;
  logout: () => void;
  updateProfile: (data: Partial<User>) => void;
}

const USERS_KEY = 'dahomey_users';
const SESSION_KEY = 'dahomey_user';

const DEMO_USERS: StoredUser[] = [
  {
    id: 'demo-styliste',
    name: 'Aminata Diallo',
    email: 'styliste@demo.com',
    password: 'demo123',
    role: 'styliste',
    city: 'Cotonou',
    specialty: 'Wax & Pagne',
    bio: 'Créatrice passionnée, je mets en valeur les tissus africains traditionnels.',
    createdAt: '2024-01-01T00:00:00Z',
  },
  {
    id: 'demo-client',
    name: 'Kofi Mensah',
    email: 'client@demo.com',
    password: 'demo123',
    role: 'client',
    createdAt: '2024-01-01T00:00:00Z',
  },
];

function getStoredUsers(): StoredUser[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(USERS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveStoredUsers(users: StoredUser[]) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function initDemoUsers() {
  const existing = getStoredUsers();
  const emails = new Set(existing.map(u => u.email));
  const toAdd = DEMO_USERS.filter(d => !emails.has(d.email));
  if (toAdd.length > 0) {
    saveStoredUsers([...existing, ...toAdd]);
  }
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    initDemoUsers();
    try {
      const raw = localStorage.getItem(SESSION_KEY);
      if (raw) setUser(JSON.parse(raw));
    } catch {
      // ignore
    }
  }, []);

  const login = async (email: string, password: string): Promise<User> => {
    const users = getStoredUsers();
    const found = users.find(u => u.email === email && u.password === password);
    if (!found) throw new Error('Email ou mot de passe incorrect.');
    const { password: _pw, ...userWithoutPw } = found;
    setUser(userWithoutPw);
    localStorage.setItem(SESSION_KEY, JSON.stringify(userWithoutPw));
    return userWithoutPw;
  };

  const register = async (
    name: string,
    email: string,
    password: string,
    role: 'client' | 'styliste',
    extra?: Partial<User>
  ): Promise<User> => {
    const users = getStoredUsers();
    if (users.find(u => u.email === email)) {
      throw new Error('Un compte avec cet email existe déjà.');
    }
    const newUser: StoredUser = {
      id: `user-${Date.now()}`,
      name,
      email,
      password,
      role,
      createdAt: new Date().toISOString(),
      ...extra,
    };
    saveStoredUsers([...users, newUser]);
    const { password: _pw, ...userWithoutPw } = newUser;
    setUser(userWithoutPw);
    localStorage.setItem(SESSION_KEY, JSON.stringify(userWithoutPw));
    return userWithoutPw;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(SESSION_KEY);
  };

  const updateProfile = (data: Partial<User>) => {
    if (!user) return;
    const updated = { ...user, ...data };
    setUser(updated);
    localStorage.setItem(SESSION_KEY, JSON.stringify(updated));
    const users = getStoredUsers();
    const idx = users.findIndex(u => u.id === user.id);
    if (idx !== -1) {
      users[idx] = { ...users[idx], ...data };
      saveStoredUsers(users);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
