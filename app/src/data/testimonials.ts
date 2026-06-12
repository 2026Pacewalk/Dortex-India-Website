export interface Testimonial {
  name: string;
  initials: string;
  color: string;
  company: string;
  role: string;
  quote: string;
  rating: number;
  date: string;
  badge?: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Abhijeet Palande',
    initials: 'AP',
    color: '#0FA4B5',
    company: 'Verified Customer',
    role: 'Customer',
    quote: 'Nice Service.',
    rating: 5,
    date: '4 months ago',
    badge: 'Top Reviewer',
  },
  {
    name: 'Parmeshwar Sawant',
    initials: 'PS',
    color: '#F59A23',
    company: 'Verified Customer',
    role: 'Customer',
    quote: 'I recently purchased Dortex hardware from Rajesh Sir, and I am extremely impressed with the premium quality of the hinges and handles. The finish on the products is excellent, adding a sophisticated and modern look to my doors. I was particularly pleased with the Dortex locks, which feel incredibly sturdy and provide great peace of mind regarding security. Rajesh Sir is a highly knowledgeable dealer who guided me through the entire selection process with great professionalism. His commitment to customer satisfaction and fair pricing makes him a standout in the hardware industry. I highly recommend his services to anyone looking for reliable and stylish Dortex accessories.',
    rating: 5,
    date: '4 months ago',
  },
  {
    name: 'Urban Pendu',
    initials: 'UP',
    color: '#0A8A99',
    company: 'Cleanroom Door Manufacturer',
    role: 'Business Partner',
    quote: 'Dortex India is our go-to for high-quality cleanroom door hardware. Their automatic drop-down bottom seals and specialized hinges are engineered to perfection, ensuring the airtight integrity required for pharmaceutical and laboratory environments. We\'ve used their hardware on several projects, and the build quality consistently meets international standards. If you are a cleanroom door manufacturer or a facility manager looking for reliable, durable, and aesthetically clean hardware, Dortex is the best in the business.',
    rating: 5,
    date: '4 months ago',
    badge: 'Verified Buyer',
  },
  {
    name: 'Gill Saab',
    initials: 'GS',
    color: '#E08A15',
    company: 'Lab Infrastructure',
    role: 'Customer',
    quote: 'Top-quality cleanroom hardware! We used Dortex India\'s PVC coving and corner pieces for our latest lab setup. The installation was straightforward, and the material quality is superior to many other suppliers in the market. Great durability and a very professional team to work with. Highly recommended for cleanroom infrastructure.',
    rating: 5,
    date: '4 months ago',
  },
  {
    name: 'Cleantech Solutions',
    initials: 'CS',
    color: '#14B8A6',
    company: 'Clean Technology Services',
    role: 'Business Partner',
    quote: 'Dortex India is a reliable and professional company known for good-quality products, timely delivery, and responsive customer support. Their commitment to quality and smooth coordination makes them a dependable partner for business needs.',
    rating: 5,
    date: '5 months ago',
  },
  {
    name: 'PSK Cleanroom System Pvt Ltd',
    initials: 'PS',
    color: '#8B5CF6',
    company: 'Cleanroom Systems',
    role: 'Business Partner',
    quote: 'We\'re thoroughly impressed with Dortex India\'s product quality and attention to detail. Their designs are practical, durable, and reflect true craftsmanship—great value for money!',
    rating: 5,
    date: 'a year ago',
    badge: 'Long-term Partner',
  },
];

export const GOOGLE_RATING = {
  value: 5.0,
  count: 13,
  category: 'Architectural Hardware',
};
