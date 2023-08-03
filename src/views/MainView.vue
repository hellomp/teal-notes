<script setup>
import Splitter from 'primevue/splitter'
import SplitterPanel from 'primevue/splitterpanel'

import AppHeader from '../components/AppHeader.vue'
import AppSideBar from '../components/AppSideBar.vue'
import AppMain from '../components/AppMain.vue'
</script>

<template>
  <div>
    <AppHeader />
    <Splitter class="main-view">
      <SplitterPanel :size="15">
        <AppSideBar />
      </SplitterPanel>
      <SplitterPanel :size="85">
        <AppMain />
      </SplitterPanel>
    </Splitter>
  </div>
</template>

<style scoped>
.main-view {
  height: calc(100vh - 72px);
}
</style>
