export interface Product {
  slug: string;
  name: string;
  description: string;
  image: string;
  specs: { label: string; value: string }[];
  features: string[];
  applications: string[];
}

export const PRODUCTS: Product[] = [
  {
    slug: 'aluminum-coving',
    name: 'Aluminum Coving',
    description: 'Premium-grade aluminum coving profiles designed for cleanroom environments, hospitals, and pharmaceutical facilities. Provides seamless wall-to-floor transitions with excellent hygiene properties.',
    image: '/images/products/aluminum-coving.jpg',
    specs: [
      { label: 'Material', value: 'Aluminum 6063-T5' },
      { label: 'Thickness', value: '1.5mm - 6mm' },
      { label: 'Finish', value: 'Powder Coated / Anodized' },
      { label: 'Color', value: 'Silver / White' },
      { label: 'Length', value: 'Custom Cut' },
      { label: 'MOQ', value: '100 Meters' },
    ],
    features: [
      'Seamless wall-to-floor transition',
      'Corrosion-resistant aluminum alloy',
      'Easy to clean and maintain',
      'GMP compliant for cleanrooms',
      'Custom sizes available',
    ],
    applications: ['Cleanrooms', 'Hospitals', 'Pharmaceutical', 'Laboratories', 'Food Processing'],
  },
  {
    slug: 'door-seal',
    name: 'Door Seal',
    description: 'Automatic drop-down door seals for airtight sealing in cleanroom and controlled environments. Prevents air leakage, dust infiltration, and maintains pressure differentials.',
    image: '/images/products/door-seal.jpg',
    specs: [
      { label: 'Material', value: 'Aluminum + Silicone' },
      { label: 'Width', value: '2"/3"' },
      { label: 'Finish', value: 'Powder Coated' },
      { label: 'Mechanism', value: 'Automatic Drop-Down' },
      { label: 'MOQ', value: '1000mm' },
      { label: 'Thickness', value: '2mm' },
    ],
    features: [
      'Automatic drop-down mechanism',
      'Airtight sealing performance',
      'Compatible with all door types',
      'Durable aluminum construction',
      'Easy surface-mount installation',
    ],
    applications: ['Cleanroom Doors', 'OT Rooms', 'Labs', 'Pharma Facilities', 'Cold Storage'],
  },
  {
    slug: 'stainless-steel-hinge',
    name: 'Stainless Steel Hinges',
    description: 'SS 304/316 ball bearing hinges engineered for cleanroom doors and critical environments. Smooth operation, corrosion-resistant, and designed for high-frequency usage.',
    image: '/images/products/ss-hinge.jpg',
    specs: [
      { label: 'Material', value: 'SS 304 / SS 316' },
      { label: 'Size', value: '3" / 4" / 5"' },
      { label: 'Type', value: '2 Ball Bearing' },
      { label: 'Thickness', value: '3mm' },
      { label: 'Weight', value: '300g per piece' },
      { label: 'MOQ', value: '100 Pieces' },
    ],
    features: [
      'SS 304/316 corrosion-resistant steel',
      'Ball bearing for smooth operation',
      'Silent and effortless door movement',
      'Ideal for high-traffic areas',
      'Long-lasting durable construction',
    ],
    applications: ['Clean Room Doors', 'OT Rooms', 'Labs', 'FMCG', 'Pharma Industry'],
  },
  {
    slug: 'aluminum-corner',
    name: 'Aluminum Corner',
    description: 'Precision-engineered aluminum 3D corner profiles for cleanroom wall junctions. Provides smooth, professional connections between intersecting surfaces with clean aesthetics.',
    image: '/images/products/aluminum-corner.jpg',
    specs: [
      { label: 'Material', value: 'Aluminum 6063' },
      { label: 'Thickness', value: '1.5mm - 4mm' },
      { label: 'Type', value: '2D / 3D Corner' },
      { label: 'Finish', value: 'Powder Coated / Silver' },
      { label: 'Size', value: '9 Inch Standard' },
      { label: 'MOQ', value: '100 Meters' },
    ],
    features: [
      'Precision 3D corner design',
      'Lightweight and corrosion-resistant',
      'Clean professional finish',
      'Suitable for indoor and outdoor use',
      'Quick and easy installation',
    ],
    applications: ['Cleanrooms', 'Construction', 'Wall Junctions', 'Industrial Projects', 'Interior Design'],
  },
  {
    slug: 'door-lock',
    name: 'Door Lock',
    description: 'Premium brass cylinder and stainless steel dead locks for secure cleanroom access control. Durable, corrosion-resistant locking systems designed for critical environments.',
    image: '/images/products/door-lock.jpg',
    specs: [
      { label: 'Material', value: 'Brass / SS 304' },
      { label: 'Type', value: 'Cylinder / Dead Lock' },
      { label: 'Finish', value: 'Brushed Steel' },
      { label: 'Grade', value: 'Industrial' },
      { label: 'MOQ', value: '50 Pieces' },
      { label: 'Application', value: 'Door Fitting' },
    ],
    features: [
      'Premium brass cylinder mechanism',
      'SS 304 corrosion-resistant body',
      'High-security locking system',
      'Smooth key operation',
      'Suitable for critical environments',
    ],
    applications: ['Cleanroom Doors', 'Hospital Rooms', 'Laboratories', 'Pharma Facilities', 'Secure Areas'],
  },
  {
    slug: 'd-type-handle',
    name: 'D-Type Handle',
    description: 'Stainless steel D-type back-to-back handles for glass and cleanroom doors. Sleek, ergonomic design with robust construction for demanding commercial applications.',
    image: '/images/products/d-type-handle.jpg',
    specs: [
      { label: 'Material', value: 'SS 304 / SS 316' },
      { label: 'Type', value: 'D-Type Back-to-Back' },
      { label: 'Finish', value: 'Brushed / Mirror' },
      { label: 'Style', value: 'Lever Handle' },
      { label: 'MOQ', value: '50 Sets' },
      { label: 'Application', value: 'Glass / Panel Doors' },
    ],
    features: [
      'SS 304/316 premium stainless steel',
      'Ergonomic D-type lever design',
      'Back-to-back mounting system',
      'Brushed and mirror finish options',
      'Ideal for glass and cleanroom doors',
    ],
    applications: ['Glass Doors', 'Cleanroom Doors', 'Office Doors', 'Hotel Rooms', 'Commercial Spaces'],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}
