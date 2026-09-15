export interface PriceItem {
  id: string;
  category: 'whiskey' | 'champagne' | 'service';
  name: string;
  nameEn: string;
  price: number;
  originalPrice?: number;
  description: string;
  includes: string[];
  popular?: boolean;
}

export interface HostProfile {
  id: string;
  nickname: string;
  styleCategory: 'idol' | 'dandy' | 'gentle' | 'model' | 'wit' | 'athletic';
  styleLabel: string;
  height: string;
  age: string;
  mbti: string;
  specialty: string;
  charmPoints: string[];
  image: string;
  popularityRank: number;
  quote: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  date: string;
  rating: number;
  category: 'solo' | 'birthday' | 'first' | 'friends';
  categoryLabel: string;
  content: string;
  recommendedStyle: string;
  verified: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'price' | 'system' | 'solo' | 'pickup' | 'privacy';
}

export interface BookingFormData {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  preferredStyle: string;
  pickupNeeded: boolean;
  pickupLocation: string;
  memo: string;
}
