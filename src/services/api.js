// LexiFlow Studio - Full-stack API Client connected to PostgreSQL Backend

const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';
const TOKEN_KEY = 'lexiflow_auth_token';

export function getStoredToken() {
  try {
    return localStorage.getItem(TOKEN_KEY);
  } catch {
    return null;
  }
}

export function setStoredToken(token) {
  try {
    if (token) {
      localStorage.setItem(TOKEN_KEY, token);
    } else {
      localStorage.removeItem(TOKEN_KEY);
    }
  } catch {}
}

export function removeStoredToken() {
  try {
    localStorage.removeItem(TOKEN_KEY);
  } catch {}
}

/**
 * Common fetch wrapper with JSON serialization and Authorization header
 */
async function apiRequest(endpoint, options = {}) {
  const token = getStoredToken();
  const headers = {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...(options.headers || {})
  };

  const url = endpoint.startsWith('http') ? endpoint : `${API_BASE_URL}${endpoint}`;

  try {
    const res = await fetch(url, {
      ...options,
      headers
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      const error = new Error(data.message || `Lỗi yêu cầu: ${res.statusText} (${res.status})`);
      error.status = res.status;
      error.data = data;
      throw error;
    }

    return data;
  } catch (err) {
    if (err.name === 'TypeError' && err.message.includes('fetch')) {
      throw new Error('Không thể kết nối tới Backend PostgreSQL API. Hãy kiểm tra kết nối mạng và máy chủ API!');
    }
    throw err;
  }
}

export const authApi = {
  // Initialize registration & send real OTP code
  registerInit: async ({ fullName, email, phone, password, confirmPassword }) => {
    return apiRequest('/auth/register-init', {
      method: 'POST',
      body: JSON.stringify({ fullName, email, phone, password, confirmPassword })
    });
  },

  // Send 6-digit OTP code to email or phone
  sendOtp: async ({ target, type, fullName, password, confirmPassword, purpose = 'register' }) => {
    return apiRequest('/auth/send-otp', {
      method: 'POST',
      body: JSON.stringify({ target, type, fullName, password, confirmPassword, purpose })
    });
  },

  // Verify 6-digit OTP code and authenticate in PostgreSQL
  verifyOtp: async ({ target, otp, fullName, password, newPassword, type, purpose = 'register' }) => {
    const data = await apiRequest('/auth/verify-otp', {
      method: 'POST',
      body: JSON.stringify({ target, otp, fullName, password, newPassword, type, purpose })
    });
    if (data.token) setStoredToken(data.token);
    return data;
  },

  // Register with email & password
  register: async ({ fullName, email, phone, password }) => {
    const data = await apiRequest('/auth/register', {
      method: 'POST',
      body: JSON.stringify({ fullName, email, phone, password })
    });
    if (data.token) setStoredToken(data.token);
    return data;
  },

  // Log in with email OR phone number & password
  login: async ({ identifier, email, password }) => {
    const data = await apiRequest('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ identifier: identifier || email, password })
    });
    if (data.token) setStoredToken(data.token);
    return data;
  },

  // Log in with Real Google OAuth2 (AccessToken or Credential ID Token)
  googleLogin: async ({ accessToken, credential, email, fullName, avatarUrl, googleId }) => {
    const data = await apiRequest('/auth/google', {
      method: 'POST',
      body: JSON.stringify({ accessToken, credential, email, fullName, avatarUrl, googleId })
    });
    if (data.token) setStoredToken(data.token);
    return data;
  },

  // Get current authenticated user
  getMe: async () => {
    return apiRequest('/auth/me');
  },

  // Log out
  logout: () => {
    removeStoredToken();
  }
};

export const userApi = {
  // Fetch complete synced profile, progress & notebooks from PostgreSQL
  getSync: async () => {
    return apiRequest('/user/sync');
  },

  // Update study progress (XP, streak, vocab, grammar)
  updateProgress: async (progressData) => {
    return apiRequest('/user/progress', {
      method: 'PUT',
      body: JSON.stringify(progressData)
    });
  },

  // Create or upsert a note
  createNotebook: async (note) => {
    return apiRequest('/user/notebooks', {
      method: 'POST',
      body: JSON.stringify(note)
    });
  },

  // Update a note
  updateNotebook: async (id, note) => {
    return apiRequest(`/user/notebooks/${id}`, {
      method: 'PUT',
      body: JSON.stringify(note)
    });
  },

  // Delete a note
  deleteNotebook: async (id) => {
    return apiRequest(`/user/notebooks/${id}`, {
      method: 'DELETE'
    });
  },

  // Bulk sync notes
  batchNotebooks: async (notes) => {
    return apiRequest('/user/notebooks/batch', {
      method: 'POST',
      body: JSON.stringify({ notes })
    });
  },

  // Check health & database status
  checkHealth: async () => {
    return apiRequest('/health');
  }
};
