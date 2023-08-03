import { computed } from 'vue'
import { defineStore } from 'pinia'
import { folders, files } from '../libs/supabase'
import { buildTree, combineArrays } from '../libs/helpers'

export const useNotesStore = defineStore('notes', () => {
  const notesTree = computed(() => {
    return buildTree(combineArrays(folders, files))
  })

  return { notesTree }
})
