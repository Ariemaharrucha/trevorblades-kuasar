import OpenAI from 'openai';

const API_KEY = import.meta.env.VITE_NVDIA_API_KEY;
const BASE_URL = `${window.location.origin}/api`;

const openai = new OpenAI({
  apiKey: API_KEY ,
  baseURL: BASE_URL,
  dangerouslyAllowBrowser: true
})

export default openai