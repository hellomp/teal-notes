import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getFolders, getNotes, getNote } from '../libs/supabase'
import { buildTree, combineArrays } from '../libs/helpers'

export const useNotesStore = defineStore('notes', () => {
  const folders = ref([])
  const notes = ref([])
  const tabs = ref([])
  const activeTab = ref(0)

  const notesTree = computed(() => buildTree(combineArrays(folders.value, notes.value)))

  async function getNotesFromServer() {
    folders.value = await getFolders()
    notes.value = await getNotes()
  }

  async function getNoteFromServer(id) {
    tabs.value.push(await getNote(id))
  }

  function setActiveTab() {
    activeTab.value = tabs.value.length
  }

  return {
    activeTab,
    folders,
    notes,
    tabs,
    notesTree,
    setActiveTab,
    getNotesFromServer,
    getNoteFromServer
  }
})
