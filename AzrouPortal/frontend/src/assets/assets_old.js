// Municipality Images from APIs - No download required
const appointment_img = 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop'
const header_img = 'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=600&h=400&fit=crop'
const group_profiles = 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=200&h=50&fit=crop'
const profile_pic = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
const contact_image = 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop'
const about_image = 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop'

// Keep existing icons (they're generic)
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'

// Municipality staff images (replacing doctor images)
const staff1 = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face'
const staff2 = 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=300&fit=crop&crop=face'
const staff3 = 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face'
const staff4 = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face'
const staff5 = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face'
const staff6 = 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=300&h=300&fit=crop&crop=face'
const staff7 = 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=300&h=300&fit=crop&crop=face'
const staff8 = 'https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=300&h=300&fit=crop&crop=face'
const staff9 = 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face'
const staff10 = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face'
const staff11 = 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=300&h=300&fit=crop&crop=face'
const staff12 = 'https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?w=300&h=300&fit=crop&crop=face'
const staff13 = 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=300&h=300&fit=crop&crop=face'
const staff14 = 'https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?w=300&h=300&fit=crop&crop=face'
const staff15 = 'https://images.unsplash.com/photo-1542596768-5d1d21f1cf98?w=300&h=300&fit=crop&crop=face'

// Municipality department icons
const CivilRegistry = 'https://img.icons8.com/color/96/000000/document.png'
const UrbanPlanning = 'https://img.icons8.com/color/96/000000/city-buildings.png'
const EconomicDevelopment = 'https://img.icons8.com/color/96/000000/business.png'
const Finance = 'https://img.icons8.com/color/96/000000/money-bag.png'
const PublicWorks = 'https://img.icons8.com/color/96/000000/maintenance.png'
const Health = 'https://img.icons8.com/color/96/000000/health-checkup.png'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const departmentData = [
    {
        department: 'Civil Registry',
        image: CivilRegistry
    },
    {
        department: 'Urban Planning',
        image: UrbanPlanning
    },
    {
        department: 'Economic Development',
        image: EconomicDevelopment
    },
    {
        department: 'Finance',
        image: Finance
    },
    {
        department: 'Public Works',
        image: PublicWorks
    },
    {
        department: 'Health',
        image: Health
    },
]

export const municipalStaff = [
    {
        _id: 'staff1',
        name: 'Ahmed Benali',
        image: staff1,
        department: 'Civil Registry',
        position: 'Registry Officer',
        experience: '8 Years',
        about: 'Ahmed specializes in civil documentation services, helping citizens with birth certificates, marriage registrations, and other vital records with efficiency and care.',
        services: ['Birth Certificates', 'Marriage Certificates', 'Death Certificates'],
        available: true,
        office: {
            line1: 'Ground Floor, Room 101',
            line2: 'Azrou Municipality Building'
        }
    },
    {
        _id: 'staff2',
        name: 'Fatima Alaoui',
        image: staff2,
        department: 'Urban Planning',
        position: 'Planning Coordinator',
        experience: '6 Years',
        about: 'Fatima handles building permits, zoning approvals, and urban development projects, ensuring sustainable growth for Azrou.',
        services: ['Building Permits', 'Zoning Certificates', 'Land Use Planning'],
        available: true,
        office: {
            line1: '2nd Floor, Room 201',
            line2: 'Azrou Municipality Building'
        }
    },
    {
        _id: 'staff3',
        name: 'Youssef Tazi',
        image: staff3,
        department: 'Economic Development',
        position: 'Business Development Officer',
        experience: '5 Years',
        about: 'Youssef assists entrepreneurs and businesses with licensing, permits, and economic development initiatives in Azrou.',
        services: ['Business Licenses', 'Trade Permits', 'Investment Support'],
        available: true,
        office: {
            line1: '1st Floor, Room 105',
            line2: 'Azrou Municipality Building'
        }
    },
    {
        _id: 'staff4',
        name: 'Khadija Amrani',
        image: staff4,
        department: 'Finance',
        position: 'Tax Administrator',
        experience: '10 Years',
        about: 'Khadija manages property taxes, assessments, and financial services for Azrou residents and businesses.',
        services: ['Property Tax', 'Tax Assessments', 'Payment Processing'],
        available: true,
        office: {
            line1: '1st Floor, Room 110',
            line2: 'Azrou Municipality Building'
        }
    },
    {
        _id: 'staff5',
        name: 'Mohamed Elhassan',
        image: staff5,
        department: 'Public Works',
        position: 'Infrastructure Manager',
        experience: '12 Years',
        about: 'Mohamed oversees water utilities, road maintenance, and public infrastructure projects throughout Azrou.',
        services: ['Water Connections', 'Utility Services', 'Infrastructure Maintenance'],
        available: true,
        office: {
            line1: '2nd Floor, Room 205',
            line2: 'Azrou Municipality Building'
        }
    },
    {
        _id: 'staff6',
        name: 'Aicha Benjelloun',
        image: staff6,
        department: 'Health',
        position: 'Public Health Officer',
        experience: '7 Years',
        about: 'Aicha manages public health services, health inspections, and community health programs in Azrou.',
        services: ['Health Inspections', 'Sanitation Permits', 'Public Health Programs'],
        available: true,
        office: {
            line1: '2nd Floor, Room 210',
            line2: 'Azrou Municipality Building'
        }
    }
]

// Keep compatibility with existing code that uses 'doctors'
export const doctors = municipalStaff
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Ryan Martinez',
        image: doc14,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Amelia Hill',
        image: doc15,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
]