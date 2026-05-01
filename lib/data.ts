import { MenuItem, Testimonial } from '@/types'

export const menuItems: MenuItem[] = [
  // Coffee
  {
    id: '1',
    name: 'Espresso',
    description: 'Rich, bold shot of pure coffee essence',
    price: 3.50,
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=500&q=80'
  },
  {
    id: '2',
    name: 'Cappuccino',
    description: 'Espresso with steamed milk and foam art',
    price: 4.50,
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=500&q=80'
  },
  {
    id: '3',
    name: 'Latte',
    description: 'Smooth espresso with creamy steamed milk',
    price: 4.75,
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&q=80'
  },
  {
    id: '4',
    name: 'Americano',
    description: 'Espresso with hot water for a smooth taste',
    price: 3.75,
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1551030173-122aabc4489c?w=500&q=80'
  },
  {
    id: '5',
    name: 'Mocha',
    description: 'Espresso with chocolate and steamed milk',
    price: 5.25,
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=500&q=80'
  },
  {
    id: '6',
    name: 'Cold Brew',
    description: 'Slow-steeped for 20 hours, smooth and bold',
    price: 4.50,
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=500&q=80'
  },
  // Food
  {
    id: '7',
    name: 'Avocado Toast',
    description: 'Sourdough with smashed avocado, poached egg',
    price: 12.50,
    category: 'food',
    image: 'https://images.unsplash.com/photo-1588137372308-15f75323ca8d?w=500&q=80'
  },
  {
    id: '8',
    name: 'Breakfast Sandwich',
    description: 'Egg, cheese, bacon on brioche bun',
    price: 9.50,
    category: 'food',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500&q=80'
  },
  {
    id: '9',
    name: 'Croissant',
    description: 'Buttery, flaky French pastry',
    price: 4.00,
    category: 'food',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500&q=80'
  },
  {
    id: '10',
    name: 'Quiche Lorraine',
    description: 'Bacon, cheese, and egg custard tart',
    price: 10.50,
    category: 'food',
    image: 'https://images.unsplash.com/photo-1595978204637-bd38a023b1d8?w=500&q=80'
  },
  {
    id: '11',
    name: 'Caesar Salad',
    description: 'Crisp romaine, parmesan, croutons',
    price: 11.00,
    category: 'food',
    image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=500&q=80'
  },
  {
    id: '12',
    name: 'Panini',
    description: 'Grilled sandwich with ham and cheese',
    price: 8.50,
    category: 'food',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500&q=80'
  },
  // Desserts
  {
    id: '13',
    name: 'Chocolate Cake',
    description: 'Rich Belgian chocolate layer cake',
    price: 7.50,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&q=80'
  },
  {
    id: '14',
    name: 'Tiramisu',
    description: 'Italian classic with espresso and mascarpone',
    price: 8.00,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500&q=80'
  },
  {
    id: '15',
    name: 'Cheesecake',
    description: 'New York style with berry compote',
    price: 7.00,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&q=80'
  },
  {
    id: '16',
    name: 'Macarons',
    description: 'Assorted French macarons (3 pieces)',
    price: 6.50,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=500&q=80'
  },
  {
    id: '17',
    name: 'Ice Cream',
    description: 'Homemade vanilla bean ice cream',
    price: 5.00,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=500&q=80'
  },
  {
    id: '18',
    name: 'Brownie',
    description: 'Warm fudge brownie with vanilla ice cream',
    price: 6.50,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&q=80'
  }
]

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    text: 'The best coffee I\'ve ever had! The atmosphere is so cozy and the staff is incredibly friendly.',
    rating: 5
  },
  {
    id: '2',
    name: 'Michael Chen',
    text: 'Their avocado toast is to die for. I come here every weekend for breakfast. Highly recommend!',
    rating: 5
  },
  {
    id: '3',
    name: 'Emily Davis',
    text: 'Perfect spot for working remotely. Great WiFi, amazing coffee, and the desserts are divine.',
    rating: 5
  },
  {
    id: '4',
    name: 'James Wilson',
    text: 'The cold brew is exceptional. Smooth, bold, and perfectly balanced. My new favorite cafe.',
    rating: 5
  },
  {
    id: '5',
    name: 'Lisa Anderson',
    text: 'Love the ambiance and the attention to detail. The latte art is beautiful and the taste matches!',
    rating: 5
  }
]

export const whatsappNumber = '1234567890' // Replace with actual WhatsApp number
