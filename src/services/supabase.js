import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://grpsnbrazpuaevgxownn.supabase.co'
const SUPABASE_API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdycHNuYnJhenB1YWV2Z3hvd25uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAxMjIzNTQsImV4cCI6MjA0NTY5ODM1NH0.2D866T2ioyiI9Qh0Zt-8z-q6hIuHJ8zutsr9FVcWsbc'

const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY)

export default supabase