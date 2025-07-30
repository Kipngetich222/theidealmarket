import axios from "axios";

const API_BASE_URL = "https://api.idealmarket.shop";

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add request interceptor for auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const authAPI = {
  login: (credentials) => api.post("/auth/login", credentials),
  signup: (userData) => api.post("/auth/signup", userData),
  logout: () => api.post("/auth/logout"),
  refreshToken: () => api.post("/auth/refresh"),
};

export const userAPI = {
  getProfile: () => api.get("/users/me"),
  updateProfile: (data) => api.patch("/users/me", data),
  getBalance: () => api.get("/users/balance"),
  depositFunds: (amount, method) =>
    api.post("/users/deposit", { amount, method }),
  requestWithdrawal: (amount) => api.post("/users/withdraw", { amount }),
};

export const marketAPI = {
  getBankLogs: () => api.get("/market/banklogs"),
  getCashAppAccounts: () => api.get("/market/cashapp"),
  getPayPalAccounts: () => api.get("/market/paypal"),
  getDumps: () => api.get("/market/dumps"),
  getPaxfulAccounts: () => api.get("/market/paxful"),
  purchaseItem: (itemId) => api.post("/market/purchase", { itemId }),
};

export const adminAPI = {
  getUsers: () => api.get("/admin/users"),
  getUser: (userId) => api.get(`/admin/users/${userId}`),
  updateUser: (userId, data) => api.patch(`/admin/users/${userId}`, data),
  banUser: (userId) => api.post(`/admin/users/${userId}/ban`),
  getTransactions: () => api.get("/admin/transactions"),
  getStats: () => api.get("/admin/stats"),
  updateSettings: (settings) => api.post("/admin/settings", settings),
};

export default api;
