import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId, token } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: token || undefined,
})

export interface MenuItemData {
  _id: string
  name: string
  slug: { current: string }
  price: number
  description: string
  ingredients?: string[]
  pairing?: string
  image?: any
  imageUrl?: string
  category?: string
  isCrowdFavorite?: boolean
  badge?: string
  isPopular?: boolean
  isChefsChoice?: boolean
}

export const INITIAL_FALLBACK_DISHES: MenuItemData[] = [
  {
    _id: 'fallback-1',
    name: 'Wagyu Beef Ribeye & Black Truffle',
    slug: { current: 'wagyu-ribeye' },
    price: 4800,
    description: 'Aged A5 Wagyu ribeye served with black winter truffle reduction, smoked marrow jus, and caramelized shallot purée.',
    ingredients: ['A5 Wagyu Beef', 'Black Winter Truffle', 'Bone Marrow Jus', 'Shallot Purée'],
    pairing: 'Château Margaux Premier Grand Cru 2015',
    category: 'mains',
    badge: "Chef's Choice",
    isChefsChoice: true,
    isPopular: true,
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1000&auto=format&fit=crop',
  },
  {
    _id: 'fallback-2',
    name: 'Mediterranean Blue Lobster Tail',
    slug: { current: 'lobster-tail' },
    price: 5200,
    description: 'Butter-poached Mediterranean blue lobster, saffron infusion, finger lime, and samphire grass.',
    ingredients: ['Blue Lobster', 'Saffron Butter', 'Finger Lime', 'Samphire'],
    pairing: 'Dom Pérignon Vintage Champagne',
    category: 'signature',
    badge: 'Popular',
    isPopular: true,
    imageUrl: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1000&auto=format&fit=crop',
  },
  {
    _id: 'fallback-3',
    name: 'Pan-Seared Duck Breast Rossini',
    slug: { current: 'duck-rossini' },
    price: 3600,
    description: 'Crispy skin duck breast, seared foie gras, blackberry glaze, and roasted baby turnips.',
    ingredients: ['Duck Breast', 'Foie Gras', 'Blackberry Reduction', 'Baby Turnips'],
    pairing: 'Pinot Noir Domaine de la Romanée-Conti',
    category: 'mains',
    badge: 'House Special',
    imageUrl: 'https://images.unsplash.com/photo-1514944288352-fffac99f0bdf?q=80&w=1000&auto=format&fit=crop',
  },
  {
    _id: 'fallback-4',
    name: 'Seared Wild Sea Bass Carpaccio',
    slug: { current: 'sea-bass-carpaccio' },
    price: 2400,
    description: 'Thinly sliced wild sea bass, Yuzu vinaigrette, pink peppercorns, micro herbs, and gold leaf.',
    ingredients: ['Wild Sea Bass', 'Yuzu Vinaigrette', 'Pink Peppercorn', 'Gold Leaf'],
    pairing: 'Sancerre Blanc Les Baronnes',
    category: 'starters',
    badge: 'New',
    imageUrl: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=1000&auto=format&fit=crop',
  },
  {
    _id: 'fallback-5',
    name: 'Valrhona Dark Chocolate Sphere',
    slug: { current: 'valrhona-chocolate' },
    price: 1800,
    description: '70% Valrhona dark chocolate shell, warm salted caramel pour, hazelnut praline core, and gold flake.',
    ingredients: ['70% Valrhona Dark Chocolate', 'Salted Caramel', 'Praline', 'Edible Gold'],
    pairing: 'Taylor Fladgate 20 Year Tawny Port',
    category: 'desserts',
    badge: 'Popular',
    isPopular: true,
    imageUrl: 'https://images.unsplash.com/photo-1579372786545-d24232daf58c?q=80&w=1000&auto=format&fit=crop',
  },
  {
    _id: 'fallback-6',
    name: 'Black Truffle Risotto',
    slug: { current: 'truffle-risotto' },
    price: 2900,
    description: 'Carnaroli rice slow-cooked with aged Parmigiano Reggiano, white wine, and fresh black truffle shavings.',
    ingredients: ['Carnaroli Rice', '24-Month Parmigiano', 'Black Truffle', 'White Wine'],
    pairing: 'Barolo DOCG Massolino',
    category: 'starters',
    badge: "Chef's Choice",
    isChefsChoice: true,
    imageUrl: 'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?q=80&w=1000&auto=format&fit=crop',
  },
]

export async function fetchCrowdFavorites(): Promise<MenuItemData[]> {
  try {
    const query = `*[_type == "menuItem"] | order(_createdAt desc) {
      _id,
      name,
      slug,
      price,
      description,
      ingredients,
      pairing,
      category,
      isCrowdFavorite,
      badge,
      isPopular,
      isChefsChoice,
      "imageUrl": image.asset->url
    }`
    const data = await client.fetch(query, {}, { cache: 'no-store' })
    if (data && data.length > 0) {
      return data
    }
    return INITIAL_FALLBACK_DISHES
  } catch (err) {
    console.error('Error fetching menu items from Sanity:', err)
    return INITIAL_FALLBACK_DISHES
  }
}
