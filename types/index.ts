export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  category: 'coffee' | 'food' | 'desserts'
  image: string
}

export interface CartItem extends MenuItem {
  quantity: number
}

export interface OrderDetails {
  name: string
  phone: string
  orderType: 'takeaway' | 'dine-in'
  tableNumber?: string
  specialRequests?: string
  items: CartItem[]
  total: number
}

export interface Testimonial {
  id: string
  name: string
  text: string
  rating: number
}
