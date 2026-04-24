export const mockProducts = [
  // ─── MOTORS ───
  {
    id: 'car-1',
    category: 'motors',
    image: 'https://images.unsplash.com/photo-1503377211516-79ef88fb03b3?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1503377211516-79ef88fb03b3?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=400&q=80',
    ],
    title: 'Porsche Panamera 4S',
    price: 'AED 89,000',
    details: '2014 · 155,000 km',
    location: 'Dubai',
    featured: true,
    timePosted: '2 hours ago',
    views: 120,
    seller: { name: 'Al Futtaim Automall', verified: true },
    overview: {
      'Regional Specs': 'GCC',
      'Year': '2014',
      'Kilometers': '155,000',
      'Doors': '4 Doors',
      'Body Type': 'Sedan',
      'Transmission': 'Automatic',
      'Engine Capacity': '3.0L',
      'Fuel Type': 'Petrol',
      'Horsepower': '400+ HP',
      'No. of Cylinders': '6',
    },
    description: 'Beautiful Porsche Panamera 4S in excellent condition. Dealer maintained with full service history. Comes with premium leather seats, sunroof, navigation, and upgraded alloy wheels.',
    features: {
      'Driver Assistance & Safety': ['Anti-Lock Brakes/ABS', 'Front Airbags', 'Power Steering', 'Parking Sensors'],
      'Entertainment & Technology': ['Bluetooth System', 'Premium Sound System', 'Navigation System'],
      'Comfort & Convenience': ['Leather Seats', 'Sunroof', 'Power Windows', 'Keyless Entry'],
    }
  },
  {
    id: 'car-2',
    category: 'motors',
    image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=800&q=80',
    ],
    title: 'Audi S3/RS3 RS',
    price: 'AED 153,953',
    details: '2025 · 20,965 km',
    location: 'Dubai',
    featured: false,
    timePosted: '5 hours ago',
    views: 89,
    seller: { name: 'VESLA MOTORS', verified: true },
    overview: {
      'Regional Specs': 'GCC',
      'Year': '2025',
      'Kilometers': '20,965',
      'Doors': '4 Doors',
      'Body Type': 'Sedan',
      'Transmission': 'Automatic',
      'Engine Capacity': '2.5L',
      'Fuel Type': 'Petrol',
      'Horsepower': '400 HP',
    },
    description: 'DEALER WARRANTY • FREE SERVICE UNTIL 09/2026 • LEATHER SEATS • BIG SCREEN / IN HOUSE FINANCE\n\nImmaculate condition RS3. Fast and luxurious.',
    features: {
      'Driver Assistance & Safety': ['Anti-Lock Brakes/ABS', 'Blind Spot Warning', 'Parking Sensors', 'Rear View Camera'],
      'Entertainment & Technology': ['Apple CarPlay', 'Bluetooth System'],
    }
  },
  {
    id: 'car-3',
    category: 'motors',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
    ],
    title: 'Hyundai Elantra GLX Elite',
    price: 'AED 52,000',
    details: '2025 · 0 km',
    location: 'Dubai',
    featured: true,
    seller: { name: 'Private Seller', verified: false },
    overview: { 'Year': '2025', 'Kilometers': '0', 'Transmission': 'Automatic' }
  },
  {
    id: 'car-4',
    category: 'motors',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
    ],
    title: 'Land Rover Defender 110',
    price: 'AED 299,000',
    details: '2023 · 57,000 km',
    location: 'Dubai',
    featured: false,
    seller: { name: 'Elite Cars', verified: true },
    overview: { 'Year': '2023', 'Kilometers': '57,000', 'Body Type': 'SUV' }
  },
  {
    id: 'car-5',
    category: 'motors',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80',
    ],
    title: 'BMW M5 Competition',
    price: 'AED 199,000',
    details: '2019 · 86,000 km',
    location: 'Dubai',
    featured: false,
    seller: { name: 'Private Seller', verified: false },
    overview: { 'Year': '2019', 'Kilometers': '86,000', 'Body Type': 'Sedan', 'Horsepower': '600+ HP' }
  },

  // ─── RESIDENTIAL RENT ───
  {
    id: 'rent-1',
    category: 'property-rent',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    ],
    title: '3 Bed 4 Bath Apartment',
    price: 'AED 200,000',
    details: '3 Beds · 4 Baths',
    location: 'The Pulse, Dubai South',
    featured: true,
    timePosted: '1 day ago',
    views: 450,
    seller: { name: 'Driven Properties', verified: true },
    overview: {
      'Type': 'Apartment',
      'Bedrooms': '3',
      'Bathrooms': '4',
      'Size': '1,800 sqft',
      'Furnishing': 'Unfurnished',
      'Cheques': '4',
    },
    description: 'Spacious 3 bedroom apartment available for rent in The Pulse. Features a large balcony, modern kitchen, and built-in wardrobes. Close to community pool and gym.',
    features: {
      'Amenities': ['Balcony', 'Shared Gym', 'Shared Pool', 'Covered Parking', 'Security']
    }
  },
  {
    id: 'rent-2',
    category: 'property-rent',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80',
    images: ['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80'],
    title: '4 Bed 5 Bath Villa',
    price: 'AED 180,000',
    details: '4 Beds · 5 Baths',
    location: 'The Pulse, Dubai South',
    featured: false,
    seller: { name: 'Betterhomes', verified: true },
    overview: { 'Type': 'Villa', 'Bedrooms': '4', 'Bathrooms': '5' }
  },
  {
    id: 'rent-3',
    category: 'property-rent',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    images: ['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80'],
    title: '3 Bed 3 Bath Townhouse',
    price: 'AED 95,000',
    details: '3 Beds · 3 Baths',
    location: 'Victoria DAMAC Hills',
    featured: true,
    seller: { name: 'Allsopp & Allsopp', verified: true },
    overview: { 'Type': 'Townhouse', 'Bedrooms': '3', 'Bathrooms': '3' }
  },
  {
    id: 'rent-4',
    category: 'property-rent',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    images: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'],
    title: '3 Bed 2 Bath Apartment',
    price: 'AED 175,000',
    details: '3 Beds · 2 Baths',
    location: 'Santorini DAMAC Lagoons',
    featured: false,
    seller: { name: 'Haus & Haus', verified: true },
    overview: { 'Type': 'Apartment', 'Bedrooms': '3', 'Bathrooms': '2' }
  },
  {
    id: 'rent-5',
    category: 'property-rent',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
    images: ['https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80'],
    title: '3 Bed 4 Bath Apartment',
    price: 'AED 120,000',
    details: '3 Beds · 4 Baths',
    location: 'Sobha Creek Vista Tower',
    featured: false,
    seller: { name: 'Provident Estate', verified: true },
    overview: { 'Type': 'Apartment', 'Bedrooms': '3', 'Bathrooms': '4' }
  },

  // ─── RESIDENTIAL SALE ───
  {
    id: 'sale-1',
    category: 'property-sale',
    image: 'https://images.unsplash.com/photo-1613490906263-ceb13ff781fd?auto=format&fit=crop&w=800&q=80',
    images: ['https://images.unsplash.com/photo-1613490906263-ceb13ff781fd?auto=format&fit=crop&w=800&q=80'],
    title: '6 Bed 8 Bath Villa',
    price: 'AED 3,900,000',
    details: '6 Beds · 8 Baths',
    location: 'Al Hetto',
    featured: true,
    seller: { name: 'Emaar Properties', verified: true },
    overview: { 'Type': 'Villa', 'Bedrooms': '6', 'Bathrooms': '8' }
  },
  {
    id: 'sale-2',
    category: 'property-sale',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80',
    images: ['https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80'],
    title: '3 Bed 2 Bath Townhouse',
    price: 'AED 2,900,000',
    details: '3 Beds · 2 Baths',
    location: 'Mira Oasis',
    featured: false,
    seller: { name: 'Fam Properties', verified: true },
    overview: { 'Type': 'Townhouse', 'Bedrooms': '3', 'Bathrooms': '2' }
  },

  // ─── ELECTRONICS / COMPUTERS ───
  {
    id: 'comp-1',
    category: 'classifieds',
    image: 'https://images.unsplash.com/photo-1588620242551-0cdef5bdfb6a?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1588620242551-0cdef5bdfb6a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=800&q=80',
    ],
    title: 'Dell Workstation i9 12th Gen',
    price: 'AED 3,600',
    details: 'Used - Excellent Condition',
    location: 'Dubai',
    featured: true,
    timePosted: '3 hours ago',
    views: 85,
    seller: { name: 'PC Garage', verified: true },
    overview: {
      'Condition': 'Used',
      'Brand': 'Dell',
      'Processor': 'Intel Core i9',
      'RAM': '32GB',
      'Storage': '1TB SSD',
      'Graphics': 'NVIDIA RTX 3080',
    },
    description: 'High-performance Dell workstation perfect for video editing and heavy rendering. Used for only 6 months. Comes with original box and cables.',
  },
  {
    id: 'comp-2',
    category: 'classifieds',
    image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=800&q=80',
    images: ['https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=800&q=80'],
    title: 'HP Z4 G4 Workstation',
    price: 'AED 2,800',
    details: 'Used - Good condition',
    location: 'Dubai',
    featured: false,
    seller: { name: 'Private Seller', verified: false },
    overview: { 'Condition': 'Used', 'Brand': 'HP', 'Processor': 'Intel Xeon' }
  },

  // ─── MOBILES ───
  {
    id: 'mob-1',
    category: 'mobiles',
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80',
    ],
    title: 'Samsung Z Fold 5 512GB',
    price: 'AED 5,200',
    details: 'Like New - 512GB',
    location: 'Dubai',
    featured: true,
    seller: { name: 'Tech Store', verified: true },
    overview: {
      'Brand': 'Samsung',
      'Model': 'Galaxy Z Fold 5',
      'Storage Capacity': '512 GB',
      'Condition': 'Like New',
      'Color': 'Phantom Black',
    },
    description: 'Immaculate condition Samsung Galaxy Z Fold 5. Used for a week, didn\'t like the folding factor. Comes with all accessories and a case.',
  },
  {
    id: 'mob-2',
    category: 'mobiles',
    image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=800&q=80',
    images: ['https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=800&q=80'],
    title: 'iPhone 15 Pro 256GB',
    price: 'AED 4,100',
    details: 'Brand New - Unopened',
    location: 'Dubai',
    featured: true,
    seller: { name: 'Mobile Zone', verified: true },
    overview: { 'Brand': 'Apple', 'Model': 'iPhone 15 Pro', 'Storage Capacity': '256 GB', 'Condition': 'Brand New' }
  },

  // ─── FURNITURE ───
  {
    id: 'furn-1',
    category: 'furniture',
    image: 'https://images.unsplash.com/photo-1593696140826-c58b021acf8b?auto=format&fit=crop&w=800&q=80',
    images: ['https://images.unsplash.com/photo-1593696140826-c58b021acf8b?auto=format&fit=crop&w=800&q=80'],
    title: 'Brand New TV entertainment unit',
    price: 'AED 5,500',
    details: 'New - Home Entertainment',
    location: 'Arabian Ranches',
    featured: true,
    seller: { name: 'Home Center Decor', verified: true },
    overview: { 'Type': 'TV Stand', 'Condition': 'Brand New', 'Material': 'Solid Wood' }
  },
  {
    id: 'furn-2',
    category: 'furniture',
    image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=800&q=80',
    images: ['https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=800&q=80'],
    title: 'Used Mattress',
    price: 'AED 250',
    details: 'Used - In good condition',
    location: 'Al Warqaa',
    featured: false,
    seller: { name: 'Private Seller', verified: false },
    overview: { 'Type': 'Mattress', 'Condition': 'Used' }
  },
  // ─── JOBS ───
  {
    id: 'job-1',
    category: 'jobs',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
    images: ['https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80'],
    title: 'Sales Staffs for Shopping Mall',
    price: 'AED 2,000 - 3,999',
    details: 'Full Time',
    location: 'Dubai',
    featured: true,
    timePosted: '1 day ago',
    views: 45,
    seller: { name: 'Confidential', verified: true },
    overview: { 'Job Type': 'Full Time', 'Salary': 'AED 2,000 - 3,999', 'Experience': '1-2 Years' }
  },
  {
    id: 'job-2',
    category: 'jobs',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    images: ['https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80'],
    title: 'Mart Cashier',
    price: 'AED 2,000 - 3,999',
    details: 'Full Time',
    location: 'Dubai',
    featured: false,
    seller: { name: 'Confidential', verified: true },
    overview: { 'Job Type': 'Full Time', 'Salary': 'AED 2,000 - 3,999' }
  },
  {
    id: 'job-3',
    category: 'jobs',
    image: 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&w=800&q=80',
    images: ['https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&w=800&q=80'],
    title: 'Waiter',
    price: 'AED 2,000 - 3,999',
    details: 'Full Time',
    location: 'Dubai',
    featured: false,
    seller: { name: 'Majooc ice cream shop', verified: true },
    overview: { 'Job Type': 'Full Time', 'Salary': 'AED 2,000 - 3,999' }
  },
  {
    id: 'job-4',
    category: 'jobs',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80',
    images: ['https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80'],
    title: 'FRONT DESK RECEPTIONIST',
    price: 'AED 4,000 - 5,999',
    details: 'Full Time',
    location: 'Dubai',
    featured: true,
    seller: { name: 'Confidential', verified: true },
    overview: { 'Job Type': 'Full Time', 'Salary': 'AED 4,000 - 5,999' }
  },

  // ─── COMMUNITY ───
  {
    id: 'com-1',
    category: 'community',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    images: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'],
    title: 'PICKUP FURNITURE DELIVERY...',
    price: 'AED 150',
    details: 'Movers & Removals',
    location: 'Dubai Marina',
    featured: true,
    timePosted: '4 hours ago',
    seller: { name: 'Express Movers', verified: true },
    overview: { 'Service Type': 'Moving', 'Availability': '24/7' }
  },
  {
    id: 'com-2',
    category: 'community',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
    images: ['https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80'],
    title: 'Professional AC Repair and Mai...',
    price: 'AED 99',
    details: 'Home Maintenance',
    location: 'International City',
    featured: false,
    timePosted: '8 hours ago',
    seller: { name: 'Cool Care', verified: true },
    overview: { 'Service Type': 'AC Repair' }
  },
  {
    id: 'com-3',
    category: 'community',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80',
    images: ['https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80'],
    title: 'Affordable and professional mo...',
    price: 'AED 200',
    details: 'Movers & Removals',
    location: 'Downtown Dubai',
    featured: false,
    timePosted: '5 hours ago',
    seller: { name: 'Safe Movers', verified: true },
    overview: { 'Service Type': 'Moving' }
  },

  // ─── MORE FURNITURE (for listing page) ───
  {
    id: 'furn-3',
    category: 'furniture',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80',
    images: ['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80'],
    title: 'Queen Size Bed Set (160x200)',
    price: 'AED 999',
    details: 'Used - Excellent Condition',
    location: 'Al Qusais',
    featured: true,
    timePosted: '5 hours ago',
    seller: { name: 'Private Seller', verified: false },
    overview: { 'Type': 'Bed', 'Condition': 'Used' }
  },
  {
    id: 'furn-4',
    category: 'furniture',
    image: 'https://images.unsplash.com/photo-1583847268964-b28ce8f30e9c?auto=format&fit=crop&w=800&q=80',
    images: ['https://images.unsplash.com/photo-1583847268964-b28ce8f30e9c?auto=format&fit=crop&w=800&q=80'],
    title: 'Dining Table with 6 Chairs',
    price: 'AED 1,200',
    details: 'Used - Good condition',
    location: 'Dubai Marina',
    featured: false,
    timePosted: '1 day ago',
    seller: { name: 'Private Seller', verified: false },
    overview: { 'Type': 'Dining Set', 'Condition': 'Used' }
  },
  {
    id: 'furn-5',
    category: 'furniture',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
    images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80'],
    title: 'L-Shape Fabric Sofa',
    price: 'AED 1,800',
    details: 'Like New',
    location: 'Jumeirah Village Circle',
    featured: true,
    timePosted: '2 days ago',
    seller: { name: 'Modern Homes', verified: true },
    overview: { 'Type': 'Sofa', 'Condition': 'Like New' }
  },

  // ─── MORE MOBILES (for listing page) ───
  {
    id: 'mob-3',
    category: 'mobiles',
    image: 'https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=format&fit=crop&w=800&q=80',
    images: ['https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=format&fit=crop&w=800&q=80'],
    title: 'iPhone 13 Pro Max 256GB',
    price: 'AED 2,800',
    details: 'Used - Mint condition',
    location: 'Business Bay',
    featured: true,
    timePosted: '4 hours ago',
    seller: { name: 'Private Seller', verified: false },
    overview: { 'Brand': 'Apple', 'Model': 'iPhone 13 Pro Max', 'Storage Capacity': '256 GB', 'Condition': 'Used' }
  },
  {
    id: 'mob-4',
    category: 'mobiles',
    image: 'https://images.unsplash.com/photo-1545644155-09e855c3c0fb?auto=format&fit=crop&w=800&q=80',
    images: ['https://images.unsplash.com/photo-1545644155-09e855c3c0fb?auto=format&fit=crop&w=800&q=80'],
    title: 'Samsung Galaxy S23 Ultra',
    price: 'AED 3,100',
    details: 'Like New',
    location: 'Al Barsha',
    featured: false,
    timePosted: '6 hours ago',
    seller: { name: 'Mobile Shop', verified: true },
    overview: { 'Brand': 'Samsung', 'Model': 'Galaxy S23 Ultra', 'Condition': 'Like New' }
  },
  {
    id: 'mob-5',
    category: 'mobiles',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80',
    images: ['https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80'],
    title: 'Apple iPad Pro 12.9" M2',
    price: 'AED 3,500',
    details: 'Brand New Sealed',
    location: 'Deira',
    featured: true,
    timePosted: '10 hours ago',
    seller: { name: 'Tech Store', verified: true },
    overview: { 'Brand': 'Apple', 'Model': 'iPad Pro', 'Condition': 'Brand New' }
  },
  
  // ─── ROOMS FOR RENT ───
  {
    id: 'room-1',
    category: 'rooms',
    image: 'https://images.unsplash.com/photo-1522771731570-011f4d26efdf?auto=format&fit=crop&w=800&q=80',
    images: ['https://images.unsplash.com/photo-1522771731570-011f4d26efdf?auto=format&fit=crop&w=800&q=80'],
    title: 'Bed space for Male and Female',
    price: 'AED 800',
    details: 'Al Fattan Tower',
    location: 'Sheikh Zayed Road',
    featured: false,
    seller: { name: 'Private Seller', verified: false },
    overview: { 'Type': 'Bed Space', 'Furnished': 'Yes' }
  },
  {
    id: 'room-2',
    category: 'rooms',
    image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=80',
    images: ['https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=80'],
    title: 'Partition room close to metro',
    price: 'AED 1,100',
    details: 'Al Barsha 1',
    location: 'Al Barsha, Dubai',
    featured: true,
    seller: { name: 'Private Seller', verified: false },
    overview: { 'Type': 'Partition', 'Furnished': 'Yes' }
  },

  // ─── SPORTS EQUIPMENT ───
  {
    id: 'sport-1',
    category: 'sports',
    image: 'https://images.unsplash.com/photo-1582216091090-ee8d97530c33?auto=format&fit=crop&w=800&q=80',
    images: ['https://images.unsplash.com/photo-1582216091090-ee8d97530c33?auto=format&fit=crop&w=800&q=80'],
    title: 'BBQ Grill & Campfire setup',
    price: 'AED 75',
    details: 'Used - Good condition',
    location: 'International City',
    featured: false,
    seller: { name: 'Private Seller', verified: false },
    overview: { 'Type': 'Camping', 'Condition': 'Used' }
  },
  {
    id: 'sport-2',
    category: 'sports',
    image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=800&q=80',
    images: ['https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=800&q=80'],
    title: '15kg Dumbbell pair with stand',
    price: 'AED 150',
    details: 'Like New',
    location: 'Al Qusais',
    featured: false,
    seller: { name: 'Private Seller', verified: false },
    overview: { 'Type': 'Weights', 'Condition': 'Like New' }
  }
]

export const getProductById = (id) => {
  return mockProducts.find(p => p.id === id) || null
}

export const getProductsByCategory = (categoryPrefix) => {
  return mockProducts.filter(p => p.id.startsWith(categoryPrefix))
}
