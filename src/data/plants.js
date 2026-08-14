// Plant catalog for Paradise Nursery.
// Images are imported so Vite bundles them with the correct base path
// (important because vite.config.js sets base: "/shoppingreact").
import snakePlant from '../assets/plants/snake-plant.svg'
import spiderPlant from '../assets/plants/spider-plant.svg'
import peaceLily from '../assets/plants/peace-lily.svg'
import moneyPlant from '../assets/plants/money-plant.svg'
import lavender from '../assets/plants/lavender.svg'
import jasmine from '../assets/plants/jasmine.svg'
import rosemary from '../assets/plants/rosemary.svg'
import aloeVera from '../assets/plants/aloe-vera.svg'
import basil from '../assets/plants/basil.svg'
import zzPlant from '../assets/plants/zz-plant.svg'
import pothos from '../assets/plants/pothos.svg'

// Each plant: { name, image, cost (number, USD), description }
export const plantCategories = [
  {
    category: 'Air Purifying Plants',
    blurb: 'Quiet workers that filter the air while you get on with your day.',
    plants: [
      {
        name: 'Snake Plant',
        image: snakePlant,
        cost: 18,
        description: 'Near indestructible. Filters toxins and shrugs off low light.',
      },
      {
        name: 'Spider Plant',
        image: spiderPlant,
        cost: 14,
        description: 'Fast growing and forgiving, with arching striped leaves.',
      },
      {
        name: 'Peace Lily',
        image: peaceLily,
        cost: 22,
        description: 'Glossy leaves and white blooms that tell you when to water.',
      },
      {
        name: 'Money Plant',
        image: moneyPlant,
        cost: 16,
        description: 'Trailing heart shaped leaves that thrive almost anywhere.',
      },
    ],
  },
  {
    category: 'Aromatic Fragrant Plants',
    blurb: 'Scent you can grow, from a sunny sill to a kitchen shelf.',
    plants: [
      {
        name: 'Lavender',
        image: lavender,
        cost: 20,
        description: 'Purple spikes with a calming scent that bees love too.',
      },
      {
        name: 'Jasmine',
        image: jasmine,
        cost: 19,
        description: 'Small white flowers with a sweet evening fragrance.',
      },
      {
        name: 'Rosemary',
        image: rosemary,
        cost: 12,
        description: 'Woody, aromatic, and happy to be picked for the pot.',
      },
    ],
  },
  {
    category: 'Medicinal Plants',
    blurb: 'A small home remedy kit growing on the windowsill.',
    plants: [
      {
        name: 'Aloe Vera',
        image: aloeVera,
        cost: 15,
        description: 'Soothing gel for burns and a succulent that rarely complains.',
      },
      {
        name: 'Basil',
        image: basil,
        cost: 10,
        description: 'Fresh leaves for the kitchen and a gentle digestive aid.',
      },
    ],
  },
  {
    category: 'Low Maintenance Plants',
    blurb: 'Green that forgives a missed watering or two.',
    plants: [
      {
        name: 'ZZ Plant',
        image: zzPlant,
        cost: 24,
        description: 'Glossy upright stems that tolerate neglect and shade.',
      },
      {
        name: 'Pothos',
        image: pothos,
        cost: 13,
        description: 'A trailing classic that grows in water or soil with ease.',
      },
    ],
  },
]

// Flat list, handy for lookups.
export const allPlants = plantCategories.flatMap((c) => c.plants)
