import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getFolders, getNotes } from '../libs/supabase'
import { buildTree, combineArrays } from '../libs/helpers'

export const useNotesStore = defineStore('notes', () => {
  const folders = ref([])
  const notes = ref([])
  const notesTree = computed(() => buildTree(combineArrays(folders.value, notes.value)))

  async function getDatafromServer() {
    folders.value = await getFolders()
    notes.value = await getNotes()
  }

  return { folders, notes, notesTree, getDatafromServer }
})
