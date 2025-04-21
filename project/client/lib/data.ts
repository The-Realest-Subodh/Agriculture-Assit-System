// Weather Alerts Data
export const weatherData = {
  current: {
    location: "Central Valley Farm Region",
    temperature: 24,
    condition: "Partly Cloudy",
    humidity: 45,
    windSpeed: 12,
    windDirection: "NE",
    rainChance: 20,
    updatedAt: "2025-05-01T08:30:00Z"
  },
  forecast: [
    {
      day: "Today",
      high: 26,
      low: 16,
      condition: "Partly Cloudy",
      rainChance: 20,
      advisory: null
    },
    {
      day: "Tomorrow",
      high: 28,
      low: 17,
      condition: "Sunny",
      rainChance: 0,
      advisory: null
    },
    {
      day: "Wednesday",
      high: 25,
      low: 15,
      condition: "Rain",
      rainChance: 80,
      advisory: "Heavy rainfall expected. Consider protecting sensitive crops."
    },
    {
      day: "Thursday",
      high: 23,
      low: 14,
      condition: "Cloudy",
      rainChance: 30,
      advisory: null
    },
    {
      day: "Friday",
      high: 27,
      low: 16,
      condition: "Sunny",
      rainChance: 0,
      advisory: null
    }
  ],
  alerts: [
    {
      id: 1,
      type: "warning",
      title: "Heavy Rain Alert",
      description: "Heavy rainfall expected on Wednesday. Consider delaying any planting activities and ensure proper drainage in fields.",
      date: "2025-05-01T08:30:00Z"
    },
    {
      id: 2,
      type: "info",
      title: "Ideal Spraying Conditions",
      description: "Tuesday offers optimal conditions for crop spraying with low wind and no precipitation forecasted.",
      date: "2025-05-01T08:30:00Z"
    },
    {
      id: 3,
      type: "alert",
      title: "Frost Warning",
      description: "Potential light frost on Saturday morning in low-lying areas. Consider protective measures for sensitive crops.",
      date: "2025-05-01T08:30:00Z"
    }
  ]
};

// Equipment Data
export const equipmentData = [
  {
    id: 1,
    name: "John Deere 8R Tractor",
    type: "Tractor",
    description: "Powerful tractor suitable for large-scale farming operations.",
    image: "https://images.pexels.com/photos/162625/farm-tractor-workstation-agriculture-162625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    availability: true,
    pricePerDay: 350,
    location: "Central Valley Equipment Hub",
    features: ["GPS Navigation", "Climate Control", "Auto-Steer", "380 HP Engine"]
  },
  {
    id: 2,
    name: "Case IH Combine Harvester",
    type: "Harvester",
    description: "High-capacity harvester with advanced crop sensing technology.",
    image: "https://images.pexels.com/photos/6601864/pexels-photo-6601864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    availability: true,
    pricePerDay: 450,
    location: "Eastern Farm Cooperative",
    features: ["Yield Monitoring", "Automatic Header Height", "24-foot Cutting Width", "Grain Quality Sensors"]
  },
  {
    id: 3,
    name: "Precision Seed Drill",
    type: "Planting Equipment",
    description: "12-row seed drill with precise depth control and monitoring.",
    image: "https://images.pexels.com/photos/8536480/pexels-photo-8536480.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    availability: false,
    pricePerDay: 200,
    location: "Central Valley Equipment Hub",
    features: ["Variable Rate Seeding", "Row Shutoff", "Seed Population Monitoring", "iPad Control System"]
  },
  {
    id: 4,
    name: "Boom Sprayer",
    type: "Spraying Equipment",
    description: "80-foot boom sprayer with precision nozzle control and automatic section control.",
    image: "https://images.pexels.com/photos/8579145/pexels-photo-8579145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    availability: true,
    pricePerDay: 180,
    location: "Western Ag Center",
    features: ["Pulse Width Modulation", "500-Gallon Tank", "Auto Section Control", "Drift Reduction Technology"]
  },
  {
    id: 5,
    name: "Irrigation System",
    type: "Irrigation",
    description: "Portable pivot irrigation system with advanced water management controls.",
    image: "https://images.pexels.com/photos/2108885/pexels-photo-2108885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    availability: true,
    pricePerDay: 120,
    location: "Southern Farming District",
    features: ["Remote Control", "Weather Integration", "Water Conservation System", "Variable Rate Application"]
  },
  {
    id: 6,
    name: "Livestock Transport Trailer",
    type: "Livestock Equipment",
    description: "Double-deck livestock transport trailer with climate control and monitoring.",
    image: "https://images.pexels.com/photos/9381538/pexels-photo-9381538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    availability: true,
    pricePerDay: 150,
    location: "Northern Ranch Supply",
    features: ["Temperature Control", "Animal Monitoring", "Easy-Clean Interior", "Hydraulic Lift"]
  }
];

// Veterinarians Data
export const veterinariansData = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Large Animal Medicine",
    image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    experience: "15 years",
    availability: ["Monday", "Tuesday", "Wednesday", "Friday"],
    bio: "Dr. Johnson specializes in dairy and beef cattle health management, with particular expertise in reproductive health and preventative medicine."
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Poultry Medicine",
    image: "https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    experience: "10 years",
    availability: ["Monday", "Thursday", "Friday"],
    bio: "Dr. Chen is an expert in poultry health, disease prevention, and flock management for both small and commercial operations."
  },
  {
    id: 3,
    name: "Dr. Elena Rodriguez",
    specialty: "Equine Medicine",
    image: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    experience: "12 years",
    availability: ["Tuesday", "Wednesday", "Thursday", "Saturday"],
    bio: "Dr. Rodriguez provides comprehensive care for horses, specializing in lameness, dental work, and preventative health care."
  },
  {
    id: 4,
    name: "Dr. David Williams",
    specialty: "Small Ruminants",
    image: "https://images.pexels.com/photos/5407215/pexels-photo-5407215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    experience: "8 years",
    availability: ["Monday", "Wednesday", "Friday", "Saturday"],
    bio: "Dr. Williams specializes in sheep and goat medicine, with expertise in parasite management and nutritional consulting."
  }
];

// Crop Advisory Data
export const cropAdvisoryData = {
  seasons: [
    {
      name: "Spring",
      advisories: [
        {
          id: 1,
          crop: "Corn",
          title: "Spring Planting Guide",
          content: "Plant when soil temperatures reach 50°F for optimal germination. Consider starter fertilizer with nitrogen and phosphorus.",
          date: "2025-03-15"
        },
        {
          id: 2,
          crop: "Soybeans",
          title: "Seedbed Preparation",
          content: "Ensure proper soil drainage and consider inoculating seeds with rhizobia if planting in new fields.",
          date: "2025-03-22"
        },
        {
          id: 3,
          crop: "Wheat",
          title: "Spring Nitrogen Application",
          content: "Apply nitrogen fertilizer at green-up stage. Monitor for early season pests and diseases.",
          date: "2025-03-10"
        }
      ]
    },
    {
      name: "Summer",
      advisories: [
        {
          id: 4,
          crop: "Corn",
          title: "Mid-Season Management",
          content: "Monitor for corn borer and earworm. Consider fungicide application if disease pressure is high.",
          date: "2025-06-20"
        },
        {
          id: 5,
          crop: "Soybeans",
          title: "Pest Management",
          content: "Scout for aphids and bean leaf beetles. Consider treatment if populations exceed economic thresholds.",
          date: "2025-07-05"
        },
        {
          id: 6,
          crop: "Vegetables",
          title: "Irrigation Management",
          content: "Maintain consistent soil moisture, especially during flowering and fruiting stages. Consider drip irrigation to conserve water.",
          date: "2025-06-15"
        }
      ]
    },
    {
      name: "Fall",
      advisories: [
        {
          id: 7,
          crop: "Winter Wheat",
          title: "Planting Recommendations",
          content: "Plant after fly-free date but with enough time to establish before winter. Consider seed treatments for disease protection.",
          date: "2025-09-25"
        },
        {
          id: 8,
          crop: "Cover Crops",
          title: "Cover Crop Selection",
          content: "Consider cereal rye for weed suppression or clover for nitrogen fixation. Plant early for maximum biomass production.",
          date: "2025-09-10"
        },
        {
          id: 9,
          crop: "General",
          title: "Soil Testing",
          content: "Fall is an ideal time for soil testing. Use results to plan lime and fertilizer applications for the coming season.",
          date: "2025-10-05"
        }
      ]
    },
    {
      name: "Winter",
      advisories: [
        {
          id: 10,
          crop: "General",
          title: "Equipment Maintenance",
          content: "Use the off-season to service and repair equipment. Check planters, calibrate seed meters, and replace worn parts.",
          date: "2025-01-15"
        },
        {
          id: 11,
          crop: "Orchards",
          title: "Pruning Guidelines",
          content: "Prune fruit trees during dormancy. Remove dead, diseased, or crossing branches to improve airflow and light penetration.",
          date: "2025-02-10"
        },
        {
          id: 12,
          crop: "Planning",
          title: "Crop Rotation Planning",
          content: "Finalize crop rotation plans. Consider rotating to break pest cycles and improve soil health.",
          date: "2025-01-05"
        }
      ]
    }
  ],
  bestPractices: [
    {
      id: 1,
      title: "Soil Health Management",
      content: "Implement practices such as cover cropping, reduced tillage, and diverse rotations to improve soil biology, structure, and organic matter."
    },
    {
      id: 2,
      title: "Integrated Pest Management",
      content: "Use a combination of cultural, biological, and chemical controls to manage pests while minimizing environmental impact and preventing resistance."
    },
    {
      id: 3,
      title: "Precision Agriculture",
      content: "Utilize GPS, sensors, and variable rate technology to apply inputs only where needed, reducing costs and environmental impact."
    },
    {
      id: 4,
      title: "Water Conservation",
      content: "Implement efficient irrigation systems, soil moisture monitoring, and drought-tolerant varieties to reduce water usage."
    }
  ]
};

// Notices Data
export const noticesData = [
  {
    id: 1,
    title: "New Subsidy Program for Sustainable Farming Practices",
    category: "Financial",
    date: "2025-05-01",
    content: "The Department of Agriculture has announced a new subsidy program to support farmers implementing sustainable practices such as cover cropping, reduced tillage, and precision nutrient management. Applications open June 1, 2025.",
    link: "#"
  },
  {
    id: 2,
    title: "Upcoming Workshop: Integrated Pest Management",
    category: "Education",
    date: "2025-05-10",
    content: "A free workshop on integrated pest management strategies will be held at the County Extension Office on May 25, 2025. Topics include biological control methods, pest identification, and reducing chemical inputs.",
    link: "#"
  },
  {
    id: 3,
    title: "Drought Conditions Update and Water Restrictions",
    category: "Weather",
    date: "2025-05-15",
    content: "Due to ongoing drought conditions, water restrictions will be implemented starting June 1, 2025. Farmers are encouraged to review their irrigation plans and consider drought-resistant crop varieties for late-season planting.",
    link: "#"
  },
  {
    id: 4,
    title: "New Regulations for Pesticide Application Near Water Sources",
    category: "Regulatory",
    date: "2025-05-20",
    content: "The Environmental Protection Agency has issued new guidelines for pesticide application near water sources. The regulations will take effect on July 1, 2025. Informational sessions will be held at regional agricultural offices.",
    link: "#"
  },
  {
    id: 5,
    title: "Livestock Health Alert: Monitoring for Bluetongue Virus",
    category: "Animal Health",
    date: "2025-05-22",
    content: "Livestock producers should be on alert for signs of Bluetongue virus, which has been detected in neighboring counties. Symptoms include fever, excessive salivation, and swelling of the face and tongue. Contact your veterinarian if symptoms are observed.",
    link: "#"
  },
  {
    id: 6,
    title: "Agricultural Census Registration Deadline Approaching",
    category: "Administrative",
    date: "2025-05-28",
    content: "The deadline for registering for the 2025 Agricultural Census is June 30, 2025. All farming operations, regardless of size, are encouraged to participate to ensure accurate representation of the agricultural sector.",
    link: "#"
  }
];

// Tax Information Data
export const taxInformationData = {
  deductions: [
    {
      id: 1,
      title: "Farm Equipment and Machinery",
      description: "Deductions for purchase of tractors, harvesters, and other farm equipment through depreciation or Section 179 expensing."
    },
    {
      id: 2,
      title: "Farm Buildings and Structures",
      description: "Depreciation deductions for barns, storage facilities, fences, and other farm structures."
    },
    {
      id: 3,
      title: "Seeds and Plants",
      description: "Immediate deductions for seeds, plants, and trees with productive life of less than one year."
    },
    {
      id: 4,
      title: "Fertilizers and Chemicals",
      description: "Deductions for fertilizers, lime, herbicides, pesticides, and other agricultural chemicals."
    },
    {
      id: 5,
      title: "Livestock Expenses",
      description: "Deductions for purchased livestock intended for resale, breeding stock, and feed."
    },
    {
      id: 6,
      title: "Conservation Expenses",
      description: "Deductions for qualifying soil and water conservation projects on farmland."
    }
  ],
  credits: [
    {
      id: 1,
      title: "Agricultural Workers Credit",
      description: "Tax credit for farms that employ agricultural workers throughout the year."
    },
    {
      id: 2,
      title: "Renewable Energy Credits",
      description: "Credits for implementing solar, wind, or biofuel energy systems on farming operations."
    },
    {
      id: 3,
      title: "Conservation Credit",
      description: "Credit for implementing approved conservation practices or placing land in conservation programs."
    }
  ],
  resources: [
    {
      id: 1,
      title: "Farmer's Tax Guide",
      description: "Comprehensive guide to agricultural tax regulations and filing requirements.",
      link: "#"
    },
    {
      id: 2,
      title: "Tax Preparation Assistance",
      description: "Free tax preparation services for qualifying farmers through the Rural Tax Assistance Program.",
      link: "#"
    },
    {
      id: 3,
      title: "Schedule F Guide",
      description: "Detailed instructions for completing Schedule F (Profit or Loss From Farming) for federal tax returns.",
      link: "#"
    }
  ]
};