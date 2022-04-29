import { createClient } from '@supabase/supabase-js';

const API_URL = String(import.meta.env.VITE_SUPABASE_URL);
const API_KEY = String(import.meta.env.VITE_SUPABASE_ANON_KEY);

export const client = createClient(API_URL, API_KEY);
