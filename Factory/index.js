const Education = require("../Models/Education");
const Health = require("../Models/Health");

async function main(hData, eData) {
  try {
    await Education.createMany(eData);
    console.log("Education collection seeded success!");
    await Health.createMany(hData);
    console.log("Health collection seeded success!");
  } catch (error) {
    console.error(error);
  }
}

const educationData = [
  {
    author: "Aisha Patel",
    title: "Digital Classrooms Transform Rural Education",
    shortDescription:
      "500 villages to receive tech-enabled learning hubs by 2026.",
    imageUrl: "http://example.com/digital-classrooms.jpg",
    date: "01/04/2025",
    content:
      "Interactive smart boards and tablets being deployed to bridge the urban-rural education gap. Initiative includes teacher training programs and offline digital libraries for areas with limited internet access.",
  },
  {
    author: "Carlos Mendez",
    title: "STEM Labs Revolutionize Science Education",
    shortDescription: "3D printers and robotics kits arrive in public schools.",
    imageUrl: "http://example.com/stem-labs.jpg",
    date: "02/04/2025",
    content:
      "100 secondary schools equipped with advanced maker spaces. Program partners with NASA and local universities for real-world project collaborations.",
  },
  {
    author: "Fatima",
    title: "Teacher Training Goes Virtual",
    shortDescription: "AI-powered coaching platforms for educators nationwide.",
    imageUrl: "http://example.com/teacher-training.jpg",
    date: "03/04/2025",
    content:
      "New VR simulations help teachers master classroom management and inclusive pedagogy. Certification program offers micro-credentials in emerging educational technologies.",
  },
  {
    author: "Aisha Patel",
    title: "Mobile Libraries Reach Nomadic Communities",
    shortDescription: "Camel-carried book units service desert regions.",
    imageUrl: "http://example.com/mobile-library.jpg",
    date: "04/04/2025",
    content:
      "20 new mobile units deliver multilingual educational materials to remote populations. Each 'library caravan' includes solar-powered e-readers and storytelling sessions.",
  },
  {
    author: "Carlos Mendez",
    title: "Bilingual Education Model Expands Nationwide",
    shortDescription: "Dual-language curriculum in 200 additional schools.",
    imageUrl: "http://example.com/bilingual-edu.jpg",
    date: "05/04/2025",
    content:
      "Program preserves indigenous languages while teaching global languages. Results show 45% improvement in cross-cultural communication skills among participants.",
  },
  {
    author: "Fatima",
    title: "Accessible Campus Design Wins International Award",
    shortDescription:
      "Universal design principles redefine school infrastructure.",
    imageUrl: "http://example.com/accessible-school.jpg",
    date: "06/04/2025",
    content:
      "New tactile pathways, sensory-friendly classrooms, and assistive tech integration make education truly inclusive. Blueprints being shared globally as model for accessibility.",
  },
  {
    author: "Aisha Patel",
    title: "Climate Change Curriculum Now Mandatory",
    shortDescription: "Students to lead community sustainability projects.",
    imageUrl: "http://example.com/climate-edu.jpg",
    date: "07/04/2025",
    content:
      "Updated textbooks and hands-on eco-labs prepare youth for environmental challenges. Schools competing in national green innovation challenges with seed funding prizes.",
  },
  {
    author: "Carlos Mendez",
    title: "Historic Archive Digitization Preserves Cultural Heritage",
    shortDescription: "Ancient manuscripts saved through 3D scanning tech.",
    imageUrl: "http://example.com/digitize-history.jpg",
    date: "08/04/2025",
    content:
      "University teams collaborate with elders to document oral histories. Virtual museum launches with interactive timelines and AR historical reenactments.",
  },
  {
    author: "Fatima",
    title: "Vocational Training Centers Empower Youth",
    shortDescription: "Free certification programs in emerging industries.",
    imageUrl: "http://example.com/vocational-training.jpg",
    date: "09/04/2025",
    content:
      "Partnership with tech companies provides courses in renewable energy installation, AI ethics, and sustainable agriculture. 80% job placement rate within 6 months of graduation.",
  },
  {
    author: "Aisha Patel",
    title: "Gamified Learning App Boosts Math Proficiency",
    shortDescription: "National math scores rise 32% with new platform.",
    imageUrl: "http://example.com/math-gamification.jpg",
    date: "10/04/2025",
    content:
      "Adaptive algorithm personalizes challenges for students. Features include live international competitions and real-time progress dashboards for teachers/parents.",
  },
];
const healthData = [
  {
    author: "Benjamin Chanda",
    title: "Rural Healthcare Crisis Demands Immediate Action",
    shortDescription:
      "Doctors advocate for modern clinics in underserved rural regions.",
    imageUrl: "http://example.com/rural-clinics.jpg",
    date: "01/03/2025",
    content:
      "Healthcare professionals emphasize the urgent need for upgraded facilities in remote areas. Poor road networks and outdated equipment hinder emergency responses. A nationwide campaign has been launched to build 50 new clinics by 2030.",
  },
  {
    author: "Benjamin Chanda",
    title: "Urban Hospitals Overwhelmed: Expansion Plans Revealed",
    shortDescription:
      "Major cities to receive upgraded emergency wings and ICU units.",
    imageUrl: "http://example.com/hospital-expansion.jpg",
    date: "02/03/2025",
    content:
      "Metropolitan hospitals face unprecedented patient influx. New blueprints include 40% increases in bed capacity and advanced diagnostic centers. Health Minister pledges $200 million funding for Phase 1 developments.",
  },
  {
    author: "Benjamin Chanda",
    title: "Telemedicine Infrastructure Gains Momentum",
    shortDescription:
      "Digital healthcare networks to connect 500 villages by 2026.",
    imageUrl: "http://example.com/telemedicine-tech.jpg",
    date: "03/03/2025",
    content:
      "Government partners with tech firms to install satellite-enabled consultation hubs. Program aims to reduce urban-rural healthcare disparities through virtual specialist access.",
  },
  {
    author: "Benjamin Chanda",
    title: "Solar Power Solutions for Remote Clinics",
    shortDescription:
      "Renewable energy initiative targets 24/7 healthcare access.",
    imageUrl: "http://example.com/solar-clinics.jpg",
    date: "04/03/2025",
    content:
      "300 health centers to receive photovoltaic systems and battery backups. Project eliminates reliance on unstable grid power, ensuring uninterrupted vaccine refrigeration and emergency services.",
  },
  {
    author: "Benjamin Chanda",
    title: "Mental Health Facilities Expansion Announced",
    shortDescription:
      "New psychiatric wings coming to regional hospitals nationwide.",
    imageUrl: "http://example.com/mental-health.jpg",
    date: "05/03/2025",
    content:
      "$150 million allocated for specialized treatment centers and staff training programs. Initiative addresses 300% increase in reported mental health cases since 2020.",
  },
  {
    author: "Benjamin Chanda",
    title: "Pediatric Care Centers to Double Capacity",
    shortDescription:
      "Nationwide upgrade for children's healthcare infrastructure.",
    imageUrl: "http://example.com/pediatric-care.jpg",
    date: "06/03/2025",
    content:
      "New neonatal ICUs and pediatric oncology units under construction. Child-friendly designs incorporate play areas and family accommodation spaces.",
  },
  {
    author: "Benjamin Chanda",
    title: "Disaster-Response Medical Units Deployed",
    shortDescription:
      "Mobile emergency facilities positioned in flood-prone zones.",
    imageUrl: "http://example.com/disaster-response.jpg",
    date: "07/03/2025",
    content:
      "20 amphibious mobile clinics equipped with surgical capabilities. Part of national climate adaptation strategy for healthcare resilience.",
  },
  {
    author: "Benjamin Chanda",
    title: "Medical Supply Chain Modernization Begins",
    shortDescription: "Smart warehouses with drone delivery systems announced.",
    imageUrl: "http://example.com/supply-chain.jpg",
    date: "08/03/2025",
    content:
      "Automated distribution centers will reduce medication delivery times from days to hours. Real-time tracking systems implemented nationwide.",
  },
  {
    author: "Benjamin Chanda",
    title: "Advanced Diagnostic Centers for Early Detection",
    shortDescription:
      "Regional cancer screening hubs with latest imaging tech.",
    imageUrl: "http://example.com/diagnostic-center.jpg",
    date: "09/03/2025",
    content:
      "15 new facilities to offer PET-CT scans and genomic testing. Aimed at reducing late-stage disease diagnoses by 60% within 5 years.",
  },
  {
    author: "Benjamin Chanda",
    title: "Medical Training Simulators Revolutionize Education",
    shortDescription: "Virtual reality labs coming to all teaching hospitals.",
    imageUrl: "http://example.com/medical-simulators.jpg",
    date: "10/03/2025",
    content:
      "$80 million investment in holographic patient simulators and AI tutors. Technology enables risk-free practice for complex procedures.",
  },
];

main(healthData, educationData);
