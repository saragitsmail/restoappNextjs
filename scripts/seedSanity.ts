import { createClient } from '@sanity/client'

const client = createClient({
  projectId: '9mr6co1a',
  dataset: 'production',
  token: process.argv[2],
  useCdn: false,
  apiVersion: '2023-01-01'
})

const menuItems = [
  {
    _type: 'menuItem',
    name: 'Void Burger',
    slug: { current: 'void-burger' },
    price: 12,
    description: 'Burger futuriste avec sauce secrète',
    ingredients: ['Beef', 'Cheese', 'Secret Sauce'],
    category: 'mains',
    isCrowdFavorite: true
  },
  {
    _type: 'menuItem',
    name: 'Cyber Pizza',
    slug: { current: 'cyber-pizza' },
    price: 14,
    description: 'Pizza premium pepperoni',
    ingredients: ['Tomato', 'Mozzarella', 'Pepperoni'],
    category: 'signature',
    isCrowdFavorite: true
  },
  {
    _type: 'menuItem',
    name: 'Neon Dessert',
    slug: { current: 'neon-dessert' },
    price: 8,
    description: 'Dessert artistique',
    ingredients: ['Chocolate', 'Cream'],
    category: 'desserts',
    isCrowdFavorite: false
  }
]

async function seed() {
  console.log("🚀 Seeding data...\n")

  for (const item of menuItems) {
    try {
      const result = await client.create(item)
      console.log(`✅ Created: ${result.name}`)
    } catch (err: any) {
      console.log(`❌ Error: ${item.name}`, err.message)
    }
  }

  console.log("\n🎉 Done!")
}

seed()