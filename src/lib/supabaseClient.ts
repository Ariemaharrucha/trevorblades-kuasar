import { createClient } from '@supabase/supabase-js'
const supabaseUrl = import.meta.env.VITE_PROJECT_URL as string
const supabaseKey = import.meta.env.VITE_SUPABASE_API_KEY as string
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase