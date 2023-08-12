<script setup>
import MainView from './views/MainView.vue'
import { onMounted } from 'vue'
import { useNotesStore } from '@/stores/notes'

const store = useNotesStore()

onMounted(() => {
  store.getNotesFromServer()
})
</script>
<template>
  <MainView />
</template>

<style scoped></style>
