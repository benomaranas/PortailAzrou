import connectDB from "./config/mongodb.js";
import departmentModel from "./models/departmentModel.js";
import newsModel from "./models/newsModel.js";
import projectModel from "./models/projectModel.js";
import requestModel from "./models/requestModel.js";
import 'dotenv/config';

// Initial data for departments
const departments = [
    {
        name: "Civil Registry",
        description: "Birth certificates, marriage certificates, death certificates, and civil status documents",
        icon: "https://img.icons8.com/fluency/48/000000/registry.png",
        phone: "+212 5 35 55 21 10",
        email: "civil.registry@azrou.ma",
        services: [
            {
                name: "Birth Certificate",
                description: "Official birth certificate issuance",
                fee: 50,
                processingTime: "2-3 days",
                documents: ["Birth Declaration", "Parents ID"]
            },
            {
                name: "Marriage Certificate", 
                description: "Marriage certificate issuance",
                fee: 75,
                processingTime: "1-2 days",
                documents: ["Marriage Act", "Spouse IDs"]
            },
            {
                name: "Death Certificate",
                description: "Official death certificate",
                fee: 50,
                processingTime: "1 day",
                documents: ["Death Declaration", "Family ID"]
            },
            {
                name: "Family Record Book",
                description: "Family registration book",
                fee: 100,
                processingTime: "3-5 days", 
                documents: ["Family Documents", "IDs"]
            },
            {
                name: "Residence Certificate",
                description: "Certificate of residence",
                fee: 30,
                processingTime: "1 day",
                documents: ["Residence Proof", "ID"]
            }
        ],
        contactInfo: {
            phone: "+212 5 35 55 21 10",
            email: "civil.registry@azrou.ma",
            office: "Ground Floor, Main Building",
            hours: "8:00 AM - 4:00 PM (Mon-Fri)"
        },
        available: true
    },
    {
        name: "Social Affairs",
        description: "Social aid, disability support, family assistance, and community welfare programs",
        icon: "https://img.icons8.com/fluency/48/000000/group.png",
        phone: "+212 5 35 55 21 15",
        email: "social.affairs@azrou.ma",
        services: [
            {
                name: "Social Aid Applications",
                description: "Financial assistance applications",
                fee: 0,
                processingTime: "7-10 days",
                documents: ["Income Certificate", "Family Situation"]
            },
            {
                name: "Disability Support",
                description: "Support services for disabled citizens",
                fee: 0,
                processingTime: "5-7 days",
                documents: ["Medical Certificate", "ID"]
            },
            {
                name: "Family Assistance",
                description: "Family support programs",
                fee: 0,
                processingTime: "3-5 days",
                documents: ["Family Documents"]
            },
            {
                name: "Elder Care Programs", 
                description: "Senior citizen assistance",
                fee: 0,
                processingTime: "2-3 days",
                documents: ["Age Certificate", "ID"]
            },
            {
                name: "Youth Programs",
                description: "Youth development initiatives",
                fee: 0,
                processingTime: "1-2 days",
                documents: ["Youth Certificate"]
            }
        ],
        contactInfo: {
            phone: "+212 5 35 55 21 15",
            email: "social.affairs@azrou.ma", 
            office: "Second Floor, Social Services Wing",
            hours: "8:00 AM - 4:00 PM (Mon-Fri)"
        },
        available: true
    },
    {
        name: "Technical Services",
        description: "Road maintenance, water supply, electricity, construction permits, and public works",
        icon: "https://img.icons8.com/fluency/48/000000/engineering.png",
        phone: "+212 5 35 55 21 20",
        email: "technical@azrou.ma",
        services: [
            {
                name: "Construction Permits",
                description: "Building and construction permits",
                fee: 500,
                processingTime: "10-15 days",
                documents: ["Building Plans", "Land Title", "Engineer Report"]
            },
            {
                name: "Road Maintenance",
                description: "Road repair and maintenance requests",
                fee: 0,
                processingTime: "5-10 days",
                documents: ["Location Details", "Photos"]
            },
            {
                name: "Water Supply Issues",
                description: "Water connection and repair services",
                fee: 200,
                processingTime: "3-5 days",
                documents: ["Property Document", "ID"]
            },
            {
                name: "Street Lighting",
                description: "Public lighting installation and repair",
                fee: 0,
                processingTime: "2-3 days",
                documents: ["Location Request"]
            },
            {
                name: "Public Works",
                description: "General public infrastructure services",
                fee: 0,
                processingTime: "7-14 days",
                documents: ["Request Details"]
            }
        ],
        contactInfo: {
            phone: "+212 5 35 55 21 20",
            email: "technical@azrou.ma",
            office: "Technical Services Building",
            hours: "8:00 AM - 4:00 PM (Mon-Fri)"
        },
        available: true
    },
    {
        name: "Urban Planning",
        description: "Building permits, zoning, urban development, land use planning, and architectural approvals",
        icon: "https://img.icons8.com/fluency/48/000000/city.png",
        phone: "+212 5 35 55 21 25",
        email: "urbanplanning@azrou.ma",
        services: [
            {
                name: "Building Permits",
                description: "Residential and commercial building permits",
                fee: 1000,
                processingTime: "15-30 days",
                documents: ["Architectural Plans", "Land Survey", "Engineer Approval"]
            },
            {
                name: "Zoning Information",
                description: "Land use and zoning certificates",
                fee: 100,
                processingTime: "3-5 days",
                documents: ["Land Title", "Location Map"]
            },
            {
                name: "Land Use Planning",
                description: "Urban development planning services",
                fee: 300,
                processingTime: "10-20 days",
                documents: ["Development Proposal", "Site Plans"]
            },
            {
                name: "Architectural Approvals",
                description: "Building design and architectural approvals", 
                fee: 500,
                processingTime: "7-15 days",
                documents: ["Architectural Drawings", "Technical Specifications"]
            },
            {
                name: "Development Projects",
                description: "Large scale development project approvals",
                fee: 2000,
                processingTime: "30-60 days",
                documents: ["Project Proposal", "Environmental Impact", "Financial Plan"]
            }
        ],
        contactInfo: {
            phone: "+212 5 35 55 21 25",
            email: "urbanplanning@azrou.ma",
            office: "Planning Department, Third Floor",
            hours: "8:00 AM - 4:00 PM (Mon-Fri)"
        },
        available: true
    },
    {
        name: "Finance & Taxation",
        description: "Municipal taxes, payment processing, financial services, and budget information",
        icon: "https://img.icons8.com/fluency/48/000000/money-bag.png",
        phone: "+212 5 35 55 21 30",
        email: "finance@azrou.ma",
        services: [
            {
                name: "Municipal Tax Payment",
                description: "Local tax payment processing",
                fee: 0,
                processingTime: "Immediate",
                documents: ["Tax Notice", "ID"]
            },
            {
                name: "Property Tax",
                description: "Property tax assessment and payment",
                fee: 0,
                processingTime: "1-2 days",
                documents: ["Property Title", "ID"]
            },
            {
                name: "Business Licenses",
                description: "Commercial business licensing",
                fee: 800,
                processingTime: "5-10 days",
                documents: ["Business Plan", "Commercial Register", "Tax Certificate"]
            },
            {
                name: "Financial Certificates",
                description: "Various financial documentation",
                fee: 50,
                processingTime: "1-2 days",
                documents: ["Request Form", "ID"]
            },
            {
                name: "Budget Information",
                description: "Municipal budget and financial transparency",
                fee: 0,
                processingTime: "Immediate",
                documents: ["Request Form"]
            }
        ],
        contactInfo: {
            phone: "+212 5 35 55 21 30",
            email: "finance@azrou.ma",
            office: "Finance Department, First Floor",
            hours: "8:00 AM - 4:00 PM (Mon-Fri)"
        },
        available: true
    },
    {
        name: "Tourism & Culture",
        description: "Tourist information, cultural events, heritage sites, and local attractions",
        icon: "https://img.icons8.com/fluency/48/000000/tourism.png",
        phone: "+212 5 35 55 21 35",
        email: "tourism@azrou.ma",
        services: [
            {
                name: "Tourist Information",
                description: "Tourism guides and information services",
                fee: 0,
                processingTime: "Immediate",
                documents: []
            },
            {
                name: "Cultural Events",
                description: "Cultural event organization and permits",
                fee: 200,
                processingTime: "5-7 days",
                documents: ["Event Proposal", "Venue Details"]
            },
            {
                name: "Heritage Sites",
                description: "Historical sites information and tours",
                fee: 100,
                processingTime: "1 day",
                documents: ["Tourism Request"]
            },
            {
                name: "Local Attractions",
                description: "Information about local attractions",
                fee: 0,
                processingTime: "Immediate",
                documents: []
            },
            {
                name: "Event Permits",
                description: "Permits for public and private events",
                fee: 300,
                processingTime: "7-10 days",
                documents: ["Event Details", "Security Plan", "Insurance"]
            }
        ],
        contactInfo: {
            phone: "+212 5 35 55 21 35",
            email: "tourism@azrou.ma",
            office: "Tourism Office, Cultural Center",
            hours: "8:00 AM - 6:00 PM (Mon-Sun)"
        },
        available: true
    }
];

// Initial news data
const news = [
    {
        title: "New Cultural Center Opens in Azrou",
        summary: "The municipality inaugurates a modern cultural center to promote local arts and heritage.",
        content: "Azrou Municipality proudly announces the opening of its new Cultural Center, a modern facility designed to showcase the rich heritage and vibrant arts scene of our community. The center features exhibition halls, performance spaces, and educational facilities that will serve both residents and visitors.",
        category: "Culture",
        publishDate: new Date(),
        status: "published",
        author: "Azrou Communications"
    },
    {
        title: "Road Infrastructure Improvements Underway",
        summary: "Major road renovation project begins to improve connectivity and safety.",
        content: "The municipality has commenced a comprehensive road infrastructure improvement project that will enhance connectivity between different neighborhoods and improve overall road safety. The project includes new road surfaces, improved lighting, and better signage throughout the city.",
        category: "Infrastructure", 
        publishDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
        status: "published",
        author: "Public Works Department"
    },
    {
        title: "Green Initiative: Tree Planting Campaign",
        summary: "Community-wide tree planting initiative launches to enhance urban greenery.",
        content: "Azrou Municipality launches an ambitious tree planting campaign aimed at increasing urban greenery and improving air quality. Citizens are invited to participate in this community initiative that will plant 1,000 new trees across the city.",
        category: "Environment",
        publishDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
        status: "published",
        author: "Environmental Services"
    },
    {
        title: "Digital Services Platform Enhancement",
        summary: "New features added to improve citizen digital experience and service accessibility.",
        content: "The municipality continues to enhance its digital services platform with new features designed to improve citizen experience. The latest updates include faster request processing, better tracking capabilities, and expanded online services.",
        category: "Technology",
        publishDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
        status: "published",
        author: "IT Department"
    }
];

// Initial projects data
const projects = [
    {
        title: "Azrou Heritage District Renovation",
        description: "Comprehensive renovation of the historic heritage district to preserve cultural landmarks and improve tourist infrastructure.",
        category: "Heritage",
        status: "In Progress",
        priority: "High",
        budget: "2.5M MAD",
        progress: 65,
        startDate: new Date(Date.now() - 6 * 30 * 24 * 60 * 60 * 1000),
        expectedCompletion: new Date(Date.now() + 4 * 30 * 24 * 60 * 60 * 1000),
        department: "Tourism & Culture",
        manager: "Hassan El Amrani",
        updates: [{
            date: new Date(),
            update: "Phase 2 construction completed",
            progress: 65
        }]
    },
    {
        title: "Smart Traffic Management System",
        description: "Implementation of intelligent traffic lights and monitoring systems to reduce congestion and improve road safety.",
        category: "Technology",
        status: "In Progress",
        priority: "High",
        budget: "1.8M MAD",
        progress: 40,
        startDate: new Date(Date.now() - 3 * 30 * 24 * 60 * 60 * 1000),
        expectedCompletion: new Date(Date.now() + 6 * 30 * 24 * 60 * 60 * 1000),
        department: "Technical Services",
        manager: "Khalid Bennani",
        updates: [{
            date: new Date(),
            update: "Traffic light installation in progress",
            progress: 40
        }]
    },
    {
        title: "Community Sports Complex",
        description: "Construction of a modern sports complex with football fields, basketball courts, and community recreation facilities.",
        category: "Sports",
        status: "Near Completion",
        priority: "Medium",
        budget: "3.2M MAD",
        progress: 85,
        startDate: new Date(Date.now() - 12 * 30 * 24 * 60 * 60 * 1000),
        expectedCompletion: new Date(Date.now() + 2 * 30 * 24 * 60 * 60 * 1000),
        department: "Urban Planning",
        manager: "Fatima Zahra",
        updates: [{
            date: new Date(),
            update: "Final construction phase underway",
            progress: 85
        }]
    },
    {
        title: "Environmental Park Development",
        description: "Creation of a large environmental park with walking trails, native plant gardens, and educational facilities.",
        category: "Environment",
        status: "Planning",
        priority: "Medium",
        budget: "1.5M MAD",
        progress: 15,
        startDate: new Date(Date.now() + 1 * 30 * 24 * 60 * 60 * 1000),
        expectedCompletion: new Date(Date.now() + 18 * 30 * 24 * 60 * 60 * 1000),
        department: "Technical Services",
        manager: "Ahmed Benali",
        updates: [{
            date: new Date(),
            update: "Site planning and design phase",
            progress: 15
        }]
    }
];

// Function to seed the database
const seedDatabase = async () => {
    try {
        console.log("Connecting to database...");
        await connectDB();
        
        console.log("Clearing existing data...");
        await departmentModel.deleteMany({});
        await newsModel.deleteMany({});
        await projectModel.deleteMany({});
        
        console.log("Seeding departments...");
        await departmentModel.insertMany(departments);
        
        console.log("Seeding news...");
        await newsModel.insertMany(news);
        
        console.log("Seeding projects...");
        await projectModel.insertMany(projects);
        
        console.log("Database seeding completed successfully!");
        process.exit(0);
    } catch (error) {
        console.error("Error seeding database:", error);
        process.exit(1);
    }
};

seedDatabase();
