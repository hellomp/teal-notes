<script setup>
import { config } from '../libs/config'
import Menu from 'primevue/menu'
import 'element-plus/es/components/tree/style/css'
import { ElTree } from 'element-plus'
import { useNotesStore } from '@/stores/notes'

const store = useNotesStore()

const nodeTreeClick = (data) => {
  if (data.type == 'file') {
    if (!checkIfAlreadyOpened(store.tabs, data.id)) {
      store.getNoteFromServer(data.id)
      store.setActiveTab()
    }
  }
}

const checkIfAlreadyOpened = (array, propertyValue) => {
  return array.some((item) => item.id === propertyValue)
}
</script>
<template>
  <Menu class="w-full border-none pb-0" :model="config.menuItems" />
  <el-tree :data="store.notesTree" :props="config.defaultTreeProps" @node-click="nodeTreeClick">
    <template #default="{ node, data }">
      <span class="mr-2">
        <i class="fa-solid fa-folder" v-if="data.type == 'folder'" />
        <i class="fa-solid fa-file" v-else />
      </span>
      <span>
        <span>{{ node.label }}</span>
      </span>
    </template>
  </el-tree>
</template>

<style>
.el-tree {
  --el-fill-color-blank: var(--surface-a);
  --el-text-color-regular: rgba(255, 255, 255, 0.87);
  --el-tree-node-hover-bg-color: rgba(255, 255, 255, 0.04);
  --el-tree-node-content-height: 2rem;
  .fa-solid {
    color: rgba(255, 255, 255, 0.6);
  }
  .el-tree-node__content:hover .fa-solid {
    color: rgba(255, 255, 255, 0.87);
  }
}
</style>
