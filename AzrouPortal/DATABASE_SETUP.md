# Azrou Municipality Website - Database Configuration Guide

## Overview
This guide explains how to configure and set up the dynamic database integration for the Azrou Municipality website. The website now fetches all data dynamically from MongoDB instead of using static content.

## ✅ Completed Setup

### Backend Infrastructure
- **MongoDB Models Created**: Department, News, Project, Request models with comprehensive schemas
- **API Controllers**: Municipality controller with all CRUD operations
- **API Routes**: Complete REST API endpoints for all municipality data
- **Database Seeding**: Initial data populated with 6 departments, 4 news articles, and 4 projects
- **Environment Configuration**: Sample .env files created with all necessary variables

### Frontend Integration  
- **API Context**: Centralized API management with React Context
- **Dynamic Components**: All homepage components now fetch data from database
- **Error Handling**: Loading states and error handling implemented
- **Environment Setup**: Frontend configured to connect to backend API

### Dynamic Components Status
- ✅ **CityStats**: Fetches real-time statistics from database
- ✅ **NewsAnnouncements**: Displays latest news from database
- ✅ **FeaturedProjects**: Shows current projects with progress tracking
- ✅ **Services**: Lists all departments and services dynamically
- ✅ **Static Components**: CitizenTestimonials, EmergencyServices, TourismHighlights remain static as intended

## 🚀 Quick Start Instructions

### Prerequisites
- Node.js 16+ installed
- MongoDB running locally or cloud URI
- Git (for version control)

### 1. Install Dependencies
```bash
# Backend dependencies
cd backend
npm install

# Frontend dependencies  
cd ../frontend
npm install

# Admin panel dependencies
cd ../admin
npm install
```

### 2. Configure Environment Variables

#### Backend (.env)
Create `backend/.env` file:
```env
PORT=4000
MONGODB_URI=mongodb://localhost:27017/azrou-municipality
JWT_SECRET=your-jwt-secret-key
CLOUDINARY_NAME=your-cloudinary-name
CLOUDINARY_API_KEY=your-cloudinary-api-key
CLOUDINARY_API_SECRET=your-cloudinary-api-secret
```

#### Frontend (.env)
Create `frontend/.env` file:
```env
VITE_BACKEND_URL=http://localhost:4000
```

### 3. Database Setup
```bash
# Start MongoDB (if local)
mongod

# Seed the database with initial data
cd backend
node seedDatabase.js
```

### 4. Start All Services
```bash
# Terminal 1: Backend server
cd backend
npm start

# Terminal 2: Frontend development server
cd frontend
npm run dev

# Terminal 3: Admin panel (optional)
cd admin
npm run dev
```

### 5. Access the Application
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:4000
- **Admin Panel**: http://localhost:5174

## 📊 Database Schema

### Departments Collection
```javascript
{
  name: String,
  description: String,
  services: [String],
  icon: String,
  contactInfo: {
    phone: String,
    email: String,
    address: String
  },
  availability: {
    days: [String],
    hours: String
  }
}
```

### News Collection
```javascript
{
  title: String,
  content: String,
  category: String,
  image: String,
  publishedAt: Date,
  isPublished: Boolean,
  views: Number
}
```

### Projects Collection
```javascript
{
  title: String,
  description: String,
  category: String,
  status: String,
  progress: Number,
  budget: Number,
  startDate: Date,
  endDate: Date,
  image: String
}
```

### Requests Collection
```javascript
{
  type: String,
  description: String,
  citizenName: String,
  citizenEmail: String,
  citizenPhone: String,
  status: String,
  priority: String,
  attachments: [String],
  submittedAt: Date,
  updatedAt: Date
}
```

## 🔧 API Endpoints

### Municipality Data
- `GET /api/municipality/departments` - Get all departments
- `GET /api/municipality/news` - Get all news articles
- `GET /api/municipality/projects` - Get all projects
- `GET /api/municipality/city-stats` - Get city statistics
- `POST /api/municipality/requests` - Submit citizen request

### Request Management
- `GET /api/municipality/requests` - Get all requests (admin)
- `PUT /api/municipality/requests/:id` - Update request status

## 🎨 Features Overview

### Homepage Sections
1. **Hero Banner**: Welcome message with city image
2. **City Statistics**: Dynamic counters from database
3. **Municipal Services**: Department listing with booking
4. **News & Announcements**: Latest news articles
5. **Featured Projects**: Current development projects
6. **Citizen Testimonials**: Static testimonials
7. **Emergency Services**: Static emergency contacts
8. **Tourism Highlights**: Static tourism information

### Navigation Features
- **Services Dropdown**: Quick access to all departments
- **Appointment Booking**: Integrated booking system
- **Problem Reporting**: Citizen request submission
- **Request Tracking**: Status tracking for submissions

## 🛠️ Troubleshooting

### Common Issues
1. **Port 4000 Already in Use**: Kill existing processes or change port
2. **MongoDB Connection Error**: Verify MongoDB is running and URI is correct
3. **CORS Issues**: Ensure backend CORS is configured for frontend URL
4. **Environment Variables**: Double-check all .env files are properly configured

### Debug Commands
```bash
# Check if MongoDB is running
mongosh

# Check if port 4000 is available
netstat -ano | findstr :4000

# Test API endpoints
curl http://localhost:4000/api/municipality/departments
```

## 📝 Next Steps
1. Customize municipality data in the database
2. Add user authentication for citizen portal
3. Implement payment processing for municipal services
4. Add email notifications for request updates
5. Deploy to production environment

## 🤝 Support
For technical support or questions about the municipality website setup, please refer to the README.md files in each directory or contact the development team.

## Prerequisites
- MongoDB database (local or cloud instance like MongoDB Atlas)
- Node.js and npm installed
- Environment variables configured

## Backend Configuration

### 1. Environment Variables Setup
Create a `.env` file in the `backend` directory with the following variables:

```env
# MongoDB Configuration
MONGODB_URI=mongodb://localhost:27017/azrou-municipality
# OR for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/azrou-municipality

# JWT Secret
JWT_SECRET=your-super-secret-jwt-key-here

# Cloudinary Configuration (for image uploads)
CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
CLOUDINARY_API_KEY=your-cloudinary-api-key
CLOUDINARY_API_SECRET=your-cloudinary-api-secret

# Port Configuration
PORT=4000
```

### 2. Database Models
The following models have been created to store dynamic content:

#### Departments Model (`models/departmentModel.js`)
- Municipal departments with services, contact information, and office hours
- Used for dynamic service listings and department information

#### News Model (`models/newsModel.js`)
- News articles and announcements
- Categories: Technology, Infrastructure, Planning, Environment, Culture
- Publishing workflow with draft/published status

#### Projects Model (`models/projectModel.js`)
- Development projects with progress tracking
- Budget information and completion timelines
- Categories: Technology, Environment, Culture, Infrastructure, Sports, Heritage

#### Requests Model (`models/requestModel.js`)
- Citizen requests and problem reports
- Status tracking and update history
- Document attachments support

## Database Setup Process

### 1. Install Dependencies
```bash
cd backend
npm install
```

### 2. Seed Initial Data
Run the seeding script to populate the database with initial data:

```bash
npm run seed
```

This will create:
- 6 municipal departments with complete information
- 4 sample news articles
- 4 featured development projects
- Database indexes for optimal performance

### 3. Start the Backend Server
```bash
npm run server
```

The server will start on http://localhost:4000 with the following API endpoints:

## API Endpoints

### Municipality Endpoints (`/api/municipality`)

#### Departments
- `GET /departments` - Get all available departments
- `GET /departments/:id` - Get specific department details

#### News & Announcements
- `GET /news?limit=4&category=Technology` - Get latest news (with optional filters)

#### Projects
- `GET /projects?limit=4&status=In Progress` - Get development projects (with optional filters)

#### Statistics
- `GET /stats` - Get city statistics and metrics

#### Citizen Requests
- `POST /submit-request` - Submit new citizen request
- `GET /track/:requestId` - Track request status by ID

## Frontend Configuration

### 1. Environment Variables
Ensure the frontend `.env` file contains:

```env
VITE_BACKEND_URL=http://localhost:4000
```

### 2. API Context Integration
The `ApiContext.jsx` provides centralized API management:

```javascript
import { useApi } from './context/ApiContext';

// In your component:
const { departments, news, projects, cityStats, loading } = useApi();
```

### 3. Dynamic Components
The following components now fetch data dynamically:

- **CityStats**: Real-time city statistics and metrics
- **NewsAnnouncements**: Latest news and announcements
- **FeaturedProjects**: Current development projects
- **Services**: Municipal departments and services

## Data Management

### Adding New Content

#### Adding a New Department
```javascript
// Direct database insertion or admin panel
const newDepartment = {
  name: "Environmental Services",
  description: "Waste management, recycling, and environmental protection",
  icon: "https://img.icons8.com/fluency/48/000000/leaf.png",
  phone: "+212 5 35 55 21 40",
  email: "environment@azrou.ma",
  services: ["Waste Collection", "Recycling Programs", "Environmental Permits"],
  officeHours: {
    weekdays: "8:00 AM - 4:00 PM",
    saturday: "8:00 AM - 12:00 PM", 
    sunday: "Closed"
  },
  available: true
};
```

#### Adding News Articles
```javascript
const newsArticle = {
  title: "New Environmental Initiative",
  summary: "Municipality launches comprehensive recycling program.",
  content: "Full article content here...",
  category: "Environment",
  author: "Environmental Department",
  status: "published"
};
```

#### Adding Projects
```javascript
const project = {
  name: "Solar Energy Initiative",
  description: "Installing solar panels on municipal buildings",
  category: "Environment",
  status: "Planning",
  priority: 4,
  budget: 5000000,
  progress: 10,
  startDate: new Date(),
  expectedCompletion: new Date(Date.now() + 12 * 30 * 24 * 60 * 60 * 1000),
  location: "Municipal Buildings",
  contractor: "Green Energy Solutions"
};
```

## Testing the Integration

### 1. Start Backend Server
```bash
cd backend
npm run server
```

### 2. Start Frontend Development Server
```bash
cd frontend
npm run dev
```

### 3. Verify Dynamic Data Loading
- Visit http://localhost:5173
- Check that all sections load with dynamic data
- Verify API calls in browser developer tools
- Test request submission and tracking features

## Production Deployment

### Database Configuration
- Use MongoDB Atlas for cloud database
- Update connection string in environment variables
- Ensure proper database security and access controls

### Environment Variables
- Set production environment variables
- Use secure JWT secrets
- Configure proper CORS settings

### API Security
- Implement rate limiting
- Add input validation and sanitization
- Set up proper authentication middleware

## Troubleshooting

### Common Issues

1. **Database Connection Failed**
   - Check MongoDB URI in environment variables
   - Ensure MongoDB service is running
   - Verify network connectivity

2. **API Endpoints Not Working**
   - Check backend server is running on correct port
   - Verify API routes are properly registered
   - Check CORS configuration

3. **Frontend Not Loading Data**
   - Verify VITE_BACKEND_URL in frontend .env
   - Check browser console for API errors
   - Ensure ApiContext is properly wrapped around components

### Debug Commands
```bash
# Check database connection
node -e "require('./config/mongodb.js').default()"

# Test API endpoints
curl http://localhost:4000/api/municipality/departments

# View application logs
npm run server # Backend logs
npm run dev # Frontend logs
```

## Maintenance

### Regular Tasks
- Update news articles and announcements
- Track project progress and update status
- Monitor citizen requests and update statuses
- Review and update department information

### Database Backup
- Set up regular MongoDB backups
- Store backups securely
- Test restore procedures

### Performance Monitoring
- Monitor API response times
- Track database query performance
- Set up logging and alerting

## Support
For technical support or questions about the database configuration, contact the development team or refer to the MongoDB and React.js documentation.
