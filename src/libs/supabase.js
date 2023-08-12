import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseAnonKey)

const getFolders = async () => {
  try {
    const { data: folders, error } = await supabase.from('folders').select('id,name,parent')
    if (error) throw error
    return folders
  } catch (error) {
    console.error(error)
  }
}

const getNotes = async () => {
  try {
    const { data: folders, error } = await supabase.from('files').select('id,name,parent')
    if (error) throw error
    return folders
  } catch (error) {
    console.error(error)
  }
}

const getNote = async (id) => {
  try {
    const { data: note, error } = await supabase
      .from('files')
      .select('id,name,content')
      .eq('id', id)
    if (error) throw error
    return note[0]
  } catch (error) {
    console.error(error)
  }
}

export { getFolders, getNotes, getNote }
