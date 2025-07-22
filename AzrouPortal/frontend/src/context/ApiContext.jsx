import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const ApiContext = createContext();

export const ApiContextProvider = ({ children }) => {
    const [backendUrl] = useState(import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000');
    
    // State for all municipality data
    const [departments, setDepartments] = useState([]);
    const [news, setNews] = useState([]);
    const [projects, setProjects] = useState([]);
    const [cityStats, setCityStats] = useState({});
    const [loading, setLoading] = useState(false);

    // Fetch all departments
    const fetchDepartments = async () => {
        try {
            setLoading(true);
            const { data } = await axios.get(`${backendUrl}/api/municipality/departments`);
            if (data.success) {
                setDepartments(data.departments);
            }
        } catch (error) {
            console.error('Error fetching departments:', error);
        } finally {
            setLoading(false);
        }
    };

    // Fetch department by ID
    const fetchDepartmentById = async (id) => {
        try {
            const { data } = await axios.get(`${backendUrl}/api/municipality/departments/${id}`);
            if (data.success) {
                return data.department;
            }
            return null;
        } catch (error) {
            console.error('Error fetching department:', error);
            return null;
        }
    };

    // Fetch latest news
    const fetchNews = async (limit = 4, category = null) => {
        try {
            setLoading(true);
            let url = `${backendUrl}/api/municipality/news?limit=${limit}`;
            if (category) url += `&category=${category}`;
            
            const { data } = await axios.get(url);
            if (data.success) {
                setNews(data.news);
                return data.news;
            }
            return [];
        } catch (error) {
            console.error('Error fetching news:', error);
            return [];
        } finally {
            setLoading(false);
        }
    };

    // Fetch projects
    const fetchProjects = async (limit = 4, status = null) => {
        try {
            setLoading(true);
            let url = `${backendUrl}/api/municipality/projects?limit=${limit}`;
            if (status) url += `&status=${status}`;
            
            const { data } = await axios.get(url);
            if (data.success) {
                setProjects(data.projects);
                return data.projects;
            }
            return [];
        } catch (error) {
            console.error('Error fetching projects:', error);
            return [];
        } finally {
            setLoading(false);
        }
    };

    // Fetch city statistics
    const fetchCityStats = async () => {
        try {
            const { data } = await axios.get(`${backendUrl}/api/municipality/stats`);
            if (data.success) {
                setCityStats(data.stats);
                return data.stats;
            }
            return {};
        } catch (error) {
            console.error('Error fetching city stats:', error);
            return {};
        }
    };

    // Submit citizen request
    const submitRequest = async (requestData) => {
        try {
            const { data } = await axios.post(`${backendUrl}/api/municipality/submit-request`, requestData);
            if (data.success) {
                return { success: true, requestId: data.requestId, message: data.message };
            }
            return { success: false, message: data.message };
        } catch (error) {
            console.error('Error submitting request:', error);
            return { success: false, message: 'Failed to submit request. Please try again.' };
        }
    };

    // Track request by ID
    const trackRequest = async (requestId) => {
        try {
            const { data } = await axios.get(`${backendUrl}/api/municipality/track/${requestId}`);
            if (data.success) {
                return { success: true, request: data.request };
            }
            return { success: false, message: data.message };
        } catch (error) {
            console.error('Error tracking request:', error);
            return { success: false, message: 'Failed to track request. Please check the request ID.' };
        }
    };

    // Initialize data on component mount
    useEffect(() => {
        const initializeData = async () => {
            await Promise.all([
                fetchDepartments(),
                fetchNews(),
                fetchProjects(),
                fetchCityStats()
            ]);
        };
        initializeData();
    }, []);

    const value = {
        backendUrl,
        departments,
        news,
        projects,
        cityStats,
        loading,
        fetchDepartments,
        fetchDepartmentById,
        fetchNews,
        fetchProjects,
        fetchCityStats,
        submitRequest,
        trackRequest
    };

    return (
        <ApiContext.Provider value={value}>
            {children}
        </ApiContext.Provider>
    );
};

export const useApi = () => {
    const context = useContext(ApiContext);
    if (!context) {
        throw new Error('useApi must be used within an ApiContextProvider');
    }
    return context;
};

export default ApiContext;
