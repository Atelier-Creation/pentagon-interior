const content = {
  brand: {
    name: "Pentagon Design Factory",
    logoText: "Pentagon",
    tagline: "Excellence in Every Layer",
    specialization: "Luxurious & Premium Interior Design",
    location: "272/A,VOC Nagar,Ramanadhapuram Coimbatore-045",
    lead: "Er. Ilambharathi B.E.",
  },
  hero: {
    // title: "Luxurious Interior Design",
    subtitle: "Luxurious Interior",
    description: "Defined by simplicity, clean lines, and functionality. We specialize in creating high-end environments using neutral colors, natural light, and premium materials like glass, steel, and wood. Our furniture is sleek, purposeful, and focused on ultimate comfort.",
    cta: "Book Now",
    secondaryCta: "Free Consultation",
  },
  about: {
    title: "About Us",
    description: "We are a passionate interior design studio dedicated to crafting beautiful, functional, and timeless spaces. With a deep understanding of luxury aesthetics, space planning, and lifestyle needs, we transform interiors into premium experiences that inspire comfort, creativity, and connection. Our work spans across high-end residential and commercial projects, blending innovative concepts with refined craftsmanship.",
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    stats: {
      projectsCompleted: "1500+",
      yearsExperience: "13+",
      designStyles: "20+",
    },
    highlights: [
      { id: 1, title: "Super Quality", description: "Delivering technical excellence in every luxurious detail." },
      { id: 2, title: "Professional", description: "Expert craftsmanship and personalized high-end designs." },
      { id: 3, title: "Fast Work", description: "Efficient 6-month project delivery for even the largest estates." },
      { id: 4, title: "Free Consultation", description: "Elite design advice tailored for your premium lifestyle." },
    ],
    team: [
      {
        name: "Er. Ilambharathi B.E.",
        role: "Principal Designer & Founder",
        email: "pentagondesignfactory@gmail.com",
        img: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1",
      },
      {
        name: "Michael Smith",
        role: "Construction Manager",
        email: "michael@pentagon.com",
        img: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1",
      },
      {
        name: "Sophia Williams",
        role: "Architect Engineer",
        email: "sophia@pentagon.com",
        img: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6",
      },
      {
        name: "Daniel Johnson",
        role: "Site Supervisor",
        email: "daniel@pentagon.com",
        img: "https://images.unsplash.com/photo-1521791136064-7986c2920216",
      },
      {
        name: "Emma Johnson",
        role: "Interior Stylist",
        email: "emma@pentagon.com",
        img: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1",
      },
    ]
  },
  whyChooseUs: {
    title: "Why Choose Us",
    description: "Our team brings years of experience across luxury residential, commercial, and premium interiors. We deliver a blend of creativity and technical excellence that turns any space into a masterpiece. Whether it's a 20,000 sft estate or a dynamic office, we tailor each design to reflect your elite personality and vision.",
    values: [
      "Excellence in Every Layer",
      "Sleek, Unornamented Luxury",
      "Functional Sophistication",
      "Refined Craftsmanship"
    ]
  },
  projects: {
    title: "Our Elite Portfolio",
    heroImage: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1920&q=80",
    categories: ["Show All", "Commercial", "Hospitality", "Residential", "Space Planning"],
    featured: [
      {
        id: 1,
        title: "Modern Urban Apartment",
        client: "Mr. Akkash",
        area: "20,000 sft",
        location: "Coimbatore",
        duration: "6 Months",
        type: "Construction & Interior Designing",
        category: "Residential",
        status: "Completed",
        image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
        description: "A massive 20,000 sft project blending architectural construction with premium interior aesthetics."
      },
      {
        id: 2,
        title: "Corporate Headquarters",
        client: "Mr. Manimaran K",
        area: "10,000 sft",
        location: "Tirupur",
        duration: "6 Months",
        type: "Luxurious Interior Design",
        category: "Commercial",
        status: "Completed",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
        description: "A sprawling 10,000 sft luxury interior project in the heart of Tirupur."
      },
      {
        id: 3,
        title: "Boutique Residence",
        client: "Private Client",
        area: "5,000 sft",
        location: "Coimbatore",
        duration: "6 Months",
        type: "Construction & Interior Designing",
        category: "Residential",
        status: "Completed",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
        description: "Boutique construction and interior design project focused on elegance and functionality."
      },
      {
        id: 4,
        title: "Luxury Boutique Hotel",
        category: "Hospitality",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
        location: "Coimbatore",
        type: "Interior Design",
        description: "High-end hospitality project focused on guest experience and luxury finishes."
      },
      {
        id: 5,
        title: "Minimalist Loft",
        category: "Residential",
        image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80",
        location: "Tirupur",
        type: "Interior Styling",
        description: "Clean lines and functional design for a modern urban lifestyle."
      },
      {
        id: 6,
        title: "Tech Startup Office",
        category: "Commercial",
        image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80",
        location: "Coimbatore",
        type: "Space Planning",
        description: "Dynamic and productive workspace designed for a growing tech team."
      }
    ]
  },
  services: {
    title: "Our Services",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    main: [
      { id: "designing", title: "Designing", description: "Elite planning, material selection, and luxury color schemes." },
      { id: "constructing", title: "Constructing", description: "Precision-driven construction of premium architectural spaces." },
      { id: "maintaining", title: "Maintaining", description: "Ensuring your luxury investments remain in pristine condition." }
    ],
    detailed: [
      { title: "PRE-DESIGN", image: "https://images.unsplash.com/photo-1554995207-c18c203602cb", description: "We discuss your needs, style, and vision to create a clear, personalized design concept." },
      { title: "EXECUTION", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c", description: "Precision in every detail ensuring smooth and timely delivery of your dream space." },
      { title: "PLANNING", image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7", description: "Detailed architectural planning and space optimization for maximum luxury." },
    ],
    rooms: [
      {
        id: "kitchen",
        title: "Gourmet Kitchens",
        description: "An efficient, stylish space for cooking, dining, and gathering."
      },
      {
        id: "office",
        title: "Executive Offices",
        description: "A functional workspace designed for ultimate productivity and status."
      },
      {
        id: "living",
        title: "Premium Living Areas",
        description: "A social, multifunctional area for relaxing and entertaining in style."
      },
      {
        id: "lobby",
        title: "Grand Lobbies",
        description: "A welcoming, stylish entrance that sets a luxurious tone for your space."
      }
    ]
  },
  contact: {
    email: "pentagondesignfactory@gmail.com",
    phone: "91768-28870",
    whatsapp: "9176828870",
    alternate: "7845572870",
    address: "272/A,VOC Nagar,Ramanadhapuram Coimbatore-045",
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    offices: [
      {
        city: "Coimbatore",
        address: "272/A,VOC Nagar,Ramanadhapuram Coimbatore-045",
        phone: "9176828870",
        email: "pentagondesignfactory@gmail.com",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
      },
      {
        city: "Tirupur",
        address: "Main Road, Tirupur, Tamil Nadu",
        phone: "7845572870",
        email: "pentagondesignfactory@gmail.com",
        image: "https://images.unsplash.com/photo-1541888941259-7a974dfb9a51?q=80&w=2070&auto=format&fit=crop"
      }
    ],
    socials: {
      instagram: "#",
      facebook: "#",
      linkedin: "#"
    }
  },
  cta: {
    title: "Ready to transform your home or office into a masterpiece?",
    description: "Our Interior Design Agency brings your vision to life with modern, stylish, and functional designs tailored just for you.",
    buttonText: "Free Consultation Today"
  }
};

export default content;
