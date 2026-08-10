export const shop = {
  name: 'High Power',
  tagline: 'Automobile',
  owner: 'Azmat Shaikh',
  whatsapp: '918806608800',
  whatsappDisplay: '+91 88066 08800',
  mobile: '918806608800',
  phone: '919325207074',
  phoneDisplay: '+91 93252 07074',
  phoneDisplay1: '+91 88066 08800',
  address: 'Sunday Market, Jafar Gate, Chhatrapati Sambhajinagar (Aurangabad), Maharashtra – 433001',
  gst: 'To be added',
  email: 'To be added'
};

// Force Motors current lineup — spare-parts categories the shop stocks per vehicle
export const forceVehicles = [
   {
    code: '01.1',
    name: 'Force Traveller',
    variant: 'N Series · 3050 / 3350 / 3700 / 4020 WB & Wider',
    desc: 'India\u2019s leading LCV van/bus range. Full range of engine, brake and body spares.',
    tags: ['Engine Parts', 'Brake & Disk', 'Door Handles', 'Wiring']
  },
  {
    code: '01.2',
    name: 'Force e-Traveller',
    variant: 'Electric',
    desc: 'Force Motors\u2019 EV platform. Compatible body, glass and cabin spares.',
    tags: ['Body Panels', 'Windows & Glass', 'Cabin Parts']
  },
   {
    code: '01.3',
    name: 'Force Trax',
    variant: 'Cruiser / Toofan / Ambulance / Police Van / Cargo',
    desc: 'The multi-utility workhorse. Timing chain, oil filters, bulbs and body parts.',
    tags: ['Timing Chain', 'Oil Filters', 'Bulbs', 'Number Plates']
  },
 
  {
    code: '01.4',
    name: 'Force Cruiser',
    variant: 'DX',
    desc: 'Modern monocoque passenger van. Interior trim, glass and electricals.',
    tags: ['Windows & Glass', 'Interior Trim', 'Electricals']
  },
  {
    code: '01.5',
    name: 'Force Monobus',
    variant: 'Passenger & School Transport',
    desc: 'School and passenger bus platform. Gearbox, clutch and chassis spares.',
    tags: ['Gearbox', 'Clutch Kit', 'Chassis Parts']
  },
 
  {
    code: '01.6',
    name: 'Force Special Application Vehicles',
    variant: 'Cash Van / Quick Responder / Crew Transport',
    desc: 'Purpose-built fleet vehicles. Custom fabrication and fitment spares.',
    tags: ['Custom Fitment', 'Body Panels', 'Wiring']
  },
  // {
  //   code: '01.7',
  //   name: 'Force Gurkha',
  //   variant: 'Xplorer / Xtreme · 3-Door & 5-Door',
  //   desc: 'Rugged off-road SUV. Body panels, suspension, axle and 4x4 drivetrain parts.',
  //   tags: ['Suspension', 'Body Panels', 'Lighting', 'Axle Parts']
  // },
  
];

export const brandGroups = [
  {
    heading: 'Vehicle Spare Parts',
    note: 'For TVS two & three-wheelers',
    brands: [{ name: 'TVS', desc: 'Genuine & compatible spare parts for TVS vehicles.' }]
  },
  {
    heading: 'Headlights & Mirrors',
    note: 'Trusted lighting & vision component brands',
    brands: [
      { name: 'Lumax', desc: 'Headlights, tail lamps and indicator assemblies.' },
      { name: 'Menda', desc: 'Mirrors, lenses and lighting accessories.' }
    ]
  },
  {
    heading: 'Oils & Lubricants',
    note: 'Engine, gear & multi-grade oils',
    brands: [
      { name: 'Castrol', desc: 'Engine oils and lubricants for every duty cycle.' },
      { name: 'Veedol', desc: 'Mineral & synthetic oils for commercial vehicles.' },
      { name: 'Shell', desc: 'Advanced engine oils and greases.' }
    ]
  }
];

export const services = [
  { name: 'Oil Change', icon: 'droplets', desc: 'Engine oil & filter replacement with genuine-grade lubricants.' },
  { name: 'Gearbox Change', icon: 'cog', desc: 'Gearbox overhaul, replacement and clutch service.' },
  { name: 'Timing Chain Change', icon: 'gauge', desc: 'Timing chain, tensioner and kit replacement.' },
  { name: 'Windows & Glass', icon: 'square', desc: 'Windshield, window glass and regulator fitment.' },
  { name: 'Door Handles', icon: 'door-open', desc: 'Interior & exterior door handle and lock repair.' },
  { name: 'Number Plates', icon: 'tag', desc: 'Statutory number plates, made and fitted on the spot.' },
  { name: 'Disk & Brakes', icon: 'disc', desc: 'Brake disk, pad and drum replacement.' },
  { name: 'Wiring & Bulbs', icon: 'zap', desc: 'Full wiring harness repair, fuses and bulb replacement.' }
];
