export type PaymentMethodType = 'cash' | 'card';

export const Restaurant {
    name: string,
    phone: string,
    paymentMethod: [],
}

export const Catergory {
    id: string,
    image: string, 
    title: string, 
    description: string, 
}

export const Item {
    id: string,
    image: string,
    title: string, 
    description: string,
    price: number,
    category: string,
  }
 
export const Choice {
    price: number;
    label: string;
}

export type OrderStatus = 'pending' | 'confirmed' | 'ready' | 'canceled';

export const Order {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    paymentMethod: PaymentMethodType, 
    status?: OrderStatus[]; 
}

