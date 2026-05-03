import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || import.meta.env.NEXT_PUBLIC_SUPABASE_URL || 'https://hpfqjymftnmbpdwkqvnm.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || import.meta.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || 'sb_publishable_dp17BDr5MrWJxHhTmruErw_zLeNqNSY';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('[StadiaSync] Missing Supabase environment variables. Features requiring Supabase will be disabled.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
