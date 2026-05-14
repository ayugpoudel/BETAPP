/**
 * API Client for BETAPP Frontend
 * Handles all communication with the FastAPI backend
 * 
 * TODO:
 * - Add authentication token handling
 * - Add error handling and retry logic
 * - Add request/response interceptors
 * - Add API response caching
 */

import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// TODO: Add auth interceptor for JWT tokens
// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem('auth_token');
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

export const apiClient = {
  // Health & Status
  async getHealth() {
    return api.get('/health');
  },

  // Sports & Events
  // TODO: Implement these endpoints
  async getSports() {
    return api.get('/api/v1/sports');
  },

  async getEvents(filters = {}) {
    return api.get('/api/v1/events', { params: filters });
  },

  async getEventDetails(eventId) {
    return api.get(`/api/v1/events/${eventId}`);
  },

  // Predictions
  // TODO: Implement prediction endpoints
  async getPrediction(eventId) {
    return api.post(`/api/v1/predict`, { event_id: eventId });
  },

  async getPredictionHistory(limit = 10) {
    return api.get('/api/v1/predictions', { params: { limit } });
  },

  // Betting
  // TODO: Implement betting endpoints
  async placeBet(betData) {
    return api.post('/api/v1/bet', betData);
  },

  async getUserBets() {
    return api.get('/api/v1/bets');
  },

  async getBetDetails(betId) {
    return api.get(`/api/v1/bets/${betId}`);
  },

  async cancelBet(betId) {
    return api.post(`/api/v1/bets/${betId}/cancel`);
  },

  // User Portfolio
  // TODO: Implement user endpoints
  async getUserBalance() {
    return api.get('/api/v1/user/balance');
  },

  async getUserStats() {
    return api.get('/api/v1/user/stats');
  },
};

export default api;
