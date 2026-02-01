export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  creator: string;
  style: 'Streetwear' | 'Traditionnel' | 'Luxe';
  material: string;
  description: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Bomba Jacket',
    price: 189,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500',
    creator: 'Kofi Design',
    style: 'Streetwear',
    material: 'Coton wax imprimé',
    description: 'Veste bomber revisitée avec des motifs wax traditionnels. Coupe moderne et confortable.'
  },
  {
    id: '2',
    name: 'Agbada Royal',
    price: 450,
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500',
    creator: 'Maison Dahomey',
    style: 'Traditionnel',
    material: 'Bazin riche brodé',
    description: 'Agbada traditionnel avec broderies dorées faites à la main. Pièce d\'exception pour les grandes occasions.'
  },
  {
    id: '3',
    name: 'Robe Amazone',
    price: 320,
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500',
    creator: 'Afi Couture',
    style: 'Luxe',
    material: 'Soie et wax',
    description: 'Robe longue inspirée des guerrières Amazones du Dahomey. Silhouette élégante et fluide.'
  },
  {
    id: '4',
    name: 'Hoodie Vodoun',
    price: 95,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500',
    creator: 'Street Benin',
    style: 'Streetwear',
    material: 'Coton bio',
    description: 'Hoodie oversize avec graphismes inspirés de l\'art vodoun. Confort et style urbain.'
  },
  {
    id: '5',
    name: 'Ensemble Kente',
    price: 275,
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=500',
    creator: 'Akwaba Textiles',
    style: 'Traditionnel',
    material: 'Kente tissé main',
    description: 'Ensemble deux pièces en tissu Kente authentique. Chaque pièce est unique.'
  },
  {
    id: '6',
    name: 'Costume Porto-Novo',
    price: 580,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500',
    creator: 'Elegance Béninoise',
    style: 'Luxe',
    material: 'Laine vierge et wax',
    description: 'Costume sur mesure combinant coupe italienne et touches africaines. L\'élégance redéfinie.'
  },
  {
    id: '7',
    name: 'T-Shirt Zangbeto',
    price: 45,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500',
    creator: 'Urban Cotonou',
    style: 'Streetwear',
    material: 'Jersey coton',
    description: 'T-shirt avec illustration moderne du Zangbeto, gardien de la nuit. Impression haute qualité.'
  },
  {
    id: '8',
    name: 'Boubou Prestige',
    price: 390,
    image: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=500',
    creator: 'Toffa Heritage',
    style: 'Traditionnel',
    material: 'Bazin getzner',
    description: 'Boubou grand format en bazin de première qualité. Broderies traditionnelles exclusives.'
  },
  {
    id: '9',
    name: 'Sac Adinkra',
    price: 165,
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500',
    creator: 'Craft & Style',
    style: 'Luxe',
    material: 'Cuir et wax',
    description: 'Sac à main en cuir véritable avec empiècements wax. Design exclusif.'
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

export function searchProducts(query: string, styleFilter?: string): Product[] {
  let filtered = products;
  
  if (styleFilter && styleFilter !== 'Tous') {
    filtered = filtered.filter(p => p.style === styleFilter);
  }
  
  if (query) {
    const lowerQuery = query.toLowerCase();
    filtered = filtered.filter(p => 
      p.name.toLowerCase().includes(lowerQuery) ||
      p.creator.toLowerCase().includes(lowerQuery) ||
      p.material.toLowerCase().includes(lowerQuery)
    );
  }
  
  return filtered;
}
