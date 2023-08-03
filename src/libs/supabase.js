import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseAnonKey)

const { data: foldersPromise, foldersError } = await supabase.from('folders').select('*')
const { data: filesPromise, filesError } = await supabase.from('files').select('*')

const folders = await foldersPromise
const files = await filesPromise

export { folders, files }
