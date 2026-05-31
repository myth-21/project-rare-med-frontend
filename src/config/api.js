const API_BASE_URL = import.meta.env.VITE_API_URL;

if (!API_BASE_URL) {
  console.error('VITE_API_URL is not configured');
  throw new Error('VITE_API_URL is not configured');
}

export default API_BASE_URL;

