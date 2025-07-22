import express from 'express';
import {
    getDepartments,
    getDepartmentById,
    getNews,
    getProjects,
    trackRequest,
    submitRequest,
    getCityStats
} from '../controllers/municipalityController.js';

const municipalityRouter = express.Router();

// Department routes
municipalityRouter.get('/departments', getDepartments);
municipalityRouter.get('/departments/:id', getDepartmentById);

// News routes
municipalityRouter.get('/news', getNews);

// Projects routes
municipalityRouter.get('/projects', getProjects);

// Request routes
municipalityRouter.get('/track/:requestId', trackRequest);
municipalityRouter.post('/submit-request', submitRequest);

// Stats routes
municipalityRouter.get('/stats', getCityStats);

export default municipalityRouter;
