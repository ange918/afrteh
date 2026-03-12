export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  creator: string;
  style: 'Streetwear' | 'Traditionnel' | 'Luxe';
  material: string;
  description: string;
  tags: string[];
  isNew: boolean;
  rating: number;
  reviewCount: number;
}

export interface Creator {
  id: string;
  name: string;
  city: string;
  specialty: 'Wax & Pagne' | 'Haute Couture' | 'Streetwear Africain';
  bio: string;
  avatar: string;
  rating: number;
  totalSales: number;
  followers: number;
  totalCreations: number;
}

export const creators: Creator[] = [
  {
    id: 'c1',
    name: 'Kofi Mensah',
    city: 'Cotonou',
    specialty: 'Streetwear Africain',
    bio: 'Pionnier du streetwear africain, Kofi fusionne les motifs wax traditionnels avec les codes de la mode urbaine internationale.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    rating: 4.9,
    totalSales: 1240,
    followers: 8900,
    totalCreations: 47
  },
  {
    id: 'c2',
    name: 'Afiwa Dossou',
    city: 'Porto-Novo',
    specialty: 'Haute Couture',
    bio: 'Formée à Paris, Afiwa est revenue au Bénin pour sublimer la haute couture africaine avec des matériaux locaux d\'exception.',
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&fit=crop&crop=face',
    rating: 5.0,
    totalSales: 320,
    followers: 12400,
    totalCreations: 28
  },
  {
    id: 'c3',
    name: 'Toffa Agossou',
    city: 'Abomey',
    specialty: 'Wax & Pagne',
    bio: 'Gardien des techniques ancestrales du tissage béninois, Toffa perpétue l\'art du bazin brodé à la main depuis 20 ans.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    rating: 4.8,
    totalSales: 2100,
    followers: 6200,
    totalCreations: 93
  },
  {
    id: 'c4',
    name: 'Séraphine Kpade',
    city: 'Parakou',
    specialty: 'Haute Couture',
    bio: 'Séraphine crée des robes de cérémonie qui mêlent la fluidité de la soie et la richesse des imprimés bogolan du Mali.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face',
    rating: 4.7,
    totalSales: 480,
    followers: 9800,
    totalCreations: 34
  },
  {
    id: 'c5',
    name: 'Dénis Houndji',
    city: 'Cotonou',
    specialty: 'Streetwear Africain',
    bio: 'Ancien graphiste, Dénis imprime son univers visuel inspiré de l\'art vodoun sur des pièces streetwear uniques.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
    rating: 4.6,
    totalSales: 870,
    followers: 14300,
    totalCreations: 62
  },
  {
    id: 'c6',
    name: 'Nadège Akpovi',
    city: 'Ouidah',
    specialty: 'Wax & Pagne',
    bio: 'Spécialiste du kente et du pagne traditionnel, Nadège collabore avec des tisserands ghanéens pour des créations transfrontalières.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    rating: 4.9,
    totalSales: 1560,
    followers: 7700,
    totalCreations: 78
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Bomba Jacket',
    price: 189,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500',
    creator: 'Kofi Mensah',
    style: 'Streetwear',
    material: 'Coton wax imprimé',
    description: 'Veste bomber revisitée avec des motifs wax traditionnels. Coupe moderne et confortable.',
    tags: ['bomber', 'wax', 'urban'],
    isNew: true,
    rating: 4.8,
    reviewCount: 42
  },
  {
    id: '2',
    name: 'Agbada Royal',
    price: 450,
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500',
    creator: 'Toffa Agossou',
    style: 'Traditionnel',
    material: 'Bazin riche brodé',
    description: 'Agbada traditionnel avec broderies dorées faites à la main. Pièce d\'exception pour les grandes occasions.',
    tags: ['agbada', 'bazin', 'mariage', 'cérémonie'],
    isNew: true,
    rating: 5.0,
    reviewCount: 18
  },
  {
    id: '3',
    name: 'Robe Amazone',
    price: 320,
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500',
    creator: 'Afiwa Dossou',
    style: 'Luxe',
    material: 'Soie et wax',
    description: 'Robe longue inspirée des guerrières Amazones du Dahomey. Silhouette élégante et fluide.',
    tags: ['robe', 'soie', 'luxe', 'gala'],
    isNew: true,
    rating: 4.9,
    reviewCount: 29
  },
  {
    id: '4',
    name: 'Hoodie Vodoun',
    price: 95,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500',
    creator: 'Dénis Houndji',
    style: 'Streetwear',
    material: 'Coton bio',
    description: 'Hoodie oversize avec graphismes inspirés de l\'art vodoun. Confort et style urbain.',
    tags: ['hoodie', 'vodoun', 'urban', 'oversize'],
    isNew: false,
    rating: 4.6,
    reviewCount: 67
  },
  {
    id: '5',
    name: 'Ensemble Kente',
    price: 275,
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=500',
    creator: 'Nadège Akpovi',
    style: 'Traditionnel',
    material: 'Kente tissé main',
    description: 'Ensemble deux pièces en tissu Kente authentique. Chaque pièce est unique.',
    tags: ['kente', 'tissé main', 'cérémonie'],
    isNew: false,
    rating: 4.8,
    reviewCount: 34
  },
  {
    id: '6',
    name: 'Costume Porto-Novo',
    price: 580,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500',
    creator: 'Afiwa Dossou',
    style: 'Luxe',
    material: 'Laine vierge et wax',
    description: 'Costume sur mesure combinant coupe italienne et touches africaines. L\'élégance redéfinie.',
    tags: ['costume', 'luxe', 'business', 'sur mesure'],
    isNew: false,
    rating: 4.9,
    reviewCount: 12
  },
  {
    id: '7',
    name: 'T-Shirt Zangbeto',
    price: 45,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500',
    creator: 'Dénis Houndji',
    style: 'Streetwear',
    material: 'Jersey coton',
    description: 'T-shirt avec illustration moderne du Zangbeto, gardien de la nuit. Impression haute qualité.',
    tags: ['tshirt', 'zangbeto', 'graphic', 'urban'],
    isNew: false,
    rating: 4.5,
    reviewCount: 91
  },
  {
    id: '8',
    name: 'Boubou Prestige',
    price: 390,
    image: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=500',
    creator: 'Toffa Agossou',
    style: 'Traditionnel',
    material: 'Bazin getzner',
    description: 'Boubou grand format en bazin de première qualité. Broderies traditionnelles exclusives.',
    tags: ['boubou', 'bazin', 'prestige', 'cérémonie'],
    isNew: false,
    rating: 4.7,
    reviewCount: 23
  },
  {
    id: '9',
    name: 'Sac Adinkra',
    price: 165,
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500',
    creator: 'Nadège Akpovi',
    style: 'Luxe',
    material: 'Cuir et wax',
    description: 'Sac à main en cuir véritable avec empiècements wax. Design exclusif.',
    tags: ['sac', 'cuir', 'wax', 'accessoire'],
    isNew: false,
    rating: 4.8,
    reviewCount: 38
  }
];

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

export function getRelatedProducts(currentId: string, style: string): Product[] {
  return products
    .filter(p => p.id !== currentId && p.style === style)
    .slice(0, 3);
}

export function searchProducts(
  query: string,
  styleFilter?: string,
  priceRange?: string,
  sortBy?: string
): Product[] {
  let filtered = [...products];

  if (styleFilter && styleFilter !== 'Tous') {
    filtered = filtered.filter(p => p.style === styleFilter);
  }

  if (priceRange) {
    if (priceRange === '< 50€') filtered = filtered.filter(p => p.price < 50);
    else if (priceRange === '50-150€') filtered = filtered.filter(p => p.price >= 50 && p.price <= 150);
    else if (priceRange === '150€+') filtered = filtered.filter(p => p.price > 150);
  }

  if (query) {
    const lowerQuery = query.toLowerCase();
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(lowerQuery) ||
      p.creator.toLowerCase().includes(lowerQuery) ||
      p.material.toLowerCase().includes(lowerQuery) ||
      p.tags.some(t => t.toLowerCase().includes(lowerQuery))
    );
  }

  if (sortBy === 'Prix croissant') filtered.sort((a, b) => a.price - b.price);
  else if (sortBy === 'Prix décroissant') filtered.sort((a, b) => b.price - a.price);
  else if (sortBy === 'Mieux noté') filtered.sort((a, b) => b.rating - a.rating);

  return filtered;
}

export function getCreatorById(id: string): Creator | undefined {
  return creators.find(c => c.id === id);
}

export function getProductsByCreator(creatorName: string): Product[] {
  return products.filter(p => p.creator === creatorName);
}
