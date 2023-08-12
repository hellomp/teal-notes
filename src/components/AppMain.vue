<script setup>
import TabView from 'primevue/tabview'
import TabPanel from 'primevue/tabpanel'
import Button from 'primevue/button'

import { useNotesStore } from '@/stores/notes'
import { storeToRefs } from 'pinia'

const store = useNotesStore()
const reactiveStore = storeToRefs(useNotesStore())
</script>

<template>
  <TabView :scrollable="true" v-model:activeIndex="reactiveStore.activeTab.value">
    <TabPanel v-for="tab in store.tabs" :key="tab.id" :header="tab.name">
      <template #header="slotProps">
        <span>{{ slotProps.title }}</span>
        <Button
          icon="fa-solid fa-xmark"
          class="p-0 ml-2 w-1rem h-1rem"
          size="small"
          severity="secondary"
          text
          rounded
          aria-label="Close tab"
        />
      </template>
      <p>{{ tab.content }}</p>
    </TabPanel>
  </TabView>
</template>
