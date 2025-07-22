// Municipality Images - using reliable placeholder service
const appointment_img = 'https://picsum.photos/400/300?random=1'
const header_img = 'https://picsum.photos/600/400?random=2'
const group_profiles = 'https://picsum.photos/200/50?random=3'
const profile_pic = 'https://picsum.photos/100/100?random=4'
const contact_image = 'https://picsum.photos/400/300?random=5'
const about_image = 'https://picsum.photos/400/300?random=6'

// Import the original logo from local assets
import azrou_logo from './azrou_logo.png'

// Import video for header background
import header_video from './Vidéo sans titre ‐ Réalisée avec Clipchamp.mp4'

// Simple reliable icons using data URIs
const dropdown_icon = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSI+PHBhdGggZD0iTTYgOUwxMiAxNUwxOCA5IiBzdHJva2U9IiNjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PC9zdmc+'
const menu_icon = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSI+PHBhdGggZD0iTTMgMTJIMjEiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Ik0zIDZIMjEiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Ik0zIDE4SDIxIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48L3N2Zz4='
const cross_icon = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSI+PHBhdGggZD0iTTE4IDZMNiAxOCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTTYgNkwxOCAxOCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PC9zdmc+'
const chats_icon = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4='
const verified_icon = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiIGZpbGw9IiMxMEI5ODEiLz48cGF0aCBkPSJNOSAxMkwxMSAxNEwxNSAxMCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48L3N2Zz4='
const arrow_icon = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSI+PHBhdGggZD0iTTUgMTJIMTkiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9IkwxMiA1TDE5IDEyTDEyIDE5IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48L3N2Zz4='
const info_icon = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjIiLz48bGluZSB4MT0iMTIiIHkxPSIxNiIgeDI9IjEyIiB5Mj0iMTIiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjIiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjgiIHI9IjEiIGZpbGw9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg=='
const upload_icon = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSI+PHBhdGggZD0iTTEyIDlWMjEiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Ik0xNiAxM0wxMiA5TDggMTMiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvc3ZnPg=='
const stripe_logo = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjMwIiB2aWV3Qm94PSIwIDAgMTAwIDMwIiBmaWxsPSJub25lIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjMwIiBmaWxsPSIjNjM1QkZGIi8+PHRleHQgeD0iNTAiIHk9IjIwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSJ3aGl0ZSI+U1RSSVBFPC90ZXh0Pjwvc3ZnPg=='
const razorpay_logo = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjMwIiB2aWV3Qm94PSIwIDAgMTAwIDMwIiBmaWxsPSJub25lIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjMwIiBmaWxsPSIjMzM5NUZGIi8+PHRleHQgeD0iNTAiIHk9IjIwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTAiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSJ3aGl0ZSI+UkFaT1JQQVk8L3RleHQ+PC9zdmc+'

// Municipality staff images - using reliable placeholder service
const staff1 = 'https://picsum.photos/300/300?random=10'
const staff2 = 'https://picsum.photos/300/300?random=11'
const staff3 = 'https://picsum.photos/300/300?random=12'
const staff4 = 'https://picsum.photos/300/300?random=13'
const staff5 = 'https://picsum.photos/300/300?random=14'
const staff6 = 'https://picsum.photos/300/300?random=15'
const staff7 = 'https://picsum.photos/300/300?random=16'
const staff8 = 'https://picsum.photos/300/300?random=17'
const staff9 = 'https://picsum.photos/300/300?random=18'
const staff10 = 'https://picsum.photos/300/300?random=19'
const staff11 = 'https://picsum.photos/300/300?random=20'
const staff12 = 'https://picsum.photos/300/300?random=21'
const staff13 = 'https://picsum.photos/300/300?random=22'
const staff14 = 'https://picsum.photos/300/300?random=23'
const staff15 = 'https://picsum.photos/300/300?random=24'

// Municipality department icons using reliable data URIs
const CivilRegistry = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSI+PGNpcmNsZSBjeD0iMzIiIGN5PSIzMiIgcj0iMzAiIGZpbGw9IiMzNDg1RkYiLz48cGF0aCBkPSJNMjAgMjBINDRWNDRIMjBWMjBaIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMjQgMjhIMzIiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0yNCAzMkgzNiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggZD0iTTI0IDM2SDQwIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4='
const UrbanPlanning = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSI+PGNpcmNsZSBjeD0iMzIiIGN5PSIzMiIgcj0iMzAiIGZpbGw9IiMxMEI5ODEiLz48cmVjdCB4PSIyMCIgeT0iMjQiIHdpZHRoPSI4IiBoZWlnaHQ9IjE2IiBmaWxsPSJ3aGl0ZSIvPjxyZWN0IHg9IjMwIiB5PSIyMCIgd2lkdGg9IjgiIGhlaWdodD0iMjAiIGZpbGw9IndoaXRlIi8+PHJlY3QgeD0iNDAiIHk9IjI4IiB3aWR0aD0iOCIgaGVpZ2h0PSIxMiIgZmlsbD0id2hpdGUiLz48L3N2Zz4='
const EconomicDevelopment = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSI+PGNpcmNsZSBjeD0iMzIiIGN5PSIzMiIgcj0iMzAiIGZpbGw9IiM3QzNBRUQiLz48cGF0aCBkPSJNMjAgMjhINDRWMzZIMjBWMjhaIiBmaWxsPSJ3aGl0ZSIvPjxwYXRoIGQ9Ik0yNCAxNkg0MFYyOEgyNFYxNloiIGZpbGw9IndoaXRlIi8+PGNpcmNsZSBjeD0iMzIiIGN5PSI0NCIgcj0iNCIgZmlsbD0id2hpdGUiLz48L3N2Zz4='
const Finance = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSI+PGNpcmNsZSBjeD0iMzIiIGN5PSIzMiIgcj0iMzAiIGZpbGw9IiNGNTk2MDAiLz48Y2lyY2xlIGN4PSIzMiIgY3k9IjMyIiByPSIxNiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIi8+PHRleHQgeD0iMzIiIHk9IjM4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSJ3aGl0ZSI+JDwvdGV4dD48L3N2Zz4='
const PublicWorks = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSI+PGNpcmNsZSBjeD0iMzIiIGN5PSIzMiIgcj0iMzAiIGZpbGw9IiNFRjQ0NDQiLz48cGF0aCBkPSJNMjggMTZMMzYgMjRIMzJWNDBIMjhWMjRIMjRMMjggMTZaIiBmaWxsPSJ3aGl0ZSIvPjxyZWN0IHg9IjE2IiB5PSI0NCIgd2lkdGg9IjMyIiBoZWlnaHQ9IjQiIGZpbGw9IndoaXRlIi8+PC9zdmc+'
const Health = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSI+PGNpcmNsZSBjeD0iMzIiIGN5PSIzMiIgcj0iMzAiIGZpbGw9IiNEQzI2MjYiLz48cGF0aCBkPSJNMzIgMjBWNDQiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTTIwIDMySDQ0IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvc3ZnPg=='
const SocialServices = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSI+PGNpcmNsZSBjeD0iMzIiIGN5PSIzMiIgcj0iMzAiIGZpbGw9IiNGNTk2MDAiLz48Y2lyY2xlIGN4PSIyNCIgY3k9IjI2IiByPSI2IiBmaWxsPSJ3aGl0ZSIvPjxjaXJjbGUgY3g9IjQwIiBjeT0iMjYiIHI9IjYiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTE2IDQ0QzE2IDM2IDIwIDMyIDI0IDMySDI4QzMyIDMyIDM2IDM2IDM2IDQ0IiBmaWxsPSJ3aGl0ZSIvPjxwYXRoIGQ9Ik0yOCA0NEMyOCAzNiAzMiAzMiAzNiAzMkg0MEM0NCAzMiA0OCAzNiA0OCA0NCIgZmlsbD0id2hpdGUiLz48L3N2Zz4='
const Environmental = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSI+PGNpcmNsZSBjeD0iMzIiIGN5PSIzMiIgcj0iMzAiIGZpbGw9IiMxMEI5ODEiLz48cGF0aCBkPSJNMzIgMTZDMjQgMTYgMjAgMjAgMjAgMjhDMjAgMzYgMjQgNDAgMzIgNDBDNDAgNDAgNDQgMzYgNDQgMjhDNDQgMjAgNDAgMTYgMzIgMTYiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTMyIDQ4QzMyIDQ4IDI4IDQ0IDI4IDQwQzI4IDM2IDMyIDMyIDMyIDMyUzM2IDM2IDM2IDQwQzM2IDQ0IDMyIDQ4IDMyIDQ4WiIgZmlsbD0id2hpdGUiLz48L3N2Zz4='

export const assets = {
    appointment_img,
    header_img,
    header_video,
    group_profiles,
    logo: azrou_logo,
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
    razorpay_logo,
    // Department icons
    CivilRegistry,
    UrbanPlanning,
    EconomicDevelopment,
    Finance,
    PublicWorks,
    Health,
    SocialServices,
    Environmental,
    // Staff images
    staff1,
    staff2,
    staff3,
    staff4,
    staff5,
    staff6,
    staff7,
    staff8,
    staff9,
    staff10,
    staff11,
    staff12,
    staff13,
    staff14,
    staff15
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

// Keep compatibility with existing code that uses 'specialityData'
export const specialityData = departmentData
