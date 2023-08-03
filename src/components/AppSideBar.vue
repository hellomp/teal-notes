<script setup>
import { ref } from 'vue'
import Menu from 'primevue/menu'
import 'element-plus/es/components/tree/style/css'
import { ElTree } from 'element-plus'
const items = ref([
  {
    label: 'Main',
    items: [
      {
        label: 'All Notes',
        icon: 'fa-solid fa-file'
      },
      {
        label: 'Tasks',
        icon: 'fa-solid fa-square-check'
      },
      {
        label: 'Images',
        icon: 'fa-solid fa-image'
      }
    ]
  },
  {
    label: 'Favorites',
    items: [
      {
        label: 'Work',
        icon: 'fa-solid fa-file'
      },
      {
        label: 'Personal',
        icon: 'fa-solid fa-file'
      }
    ]
  },
  {
    label: 'Folders',
    items: []
  }
])

const nodes = ref([
  {
    key: '0',
    label: 'Work',
    icon: 'folder',
    type: 'folder',
    children: [
      {
        key: '0-0',
        label: 'What is Vue.js?',
        icon: 'file',
        type: 'file'
      },
      {
        key: '0-1',
        label: 'Quick Start',
        icon: 'file',
        type: 'file'
      },
      {
        key: '0-2',
        label: 'Creating a Vue Application',
        icon: 'file',
        type: 'file'
      },
      {
        key: '0-3',
        label: 'Conditionals Rendering',
        icon: 'file',
        type: 'file'
      }
    ]
  },
  {
    key: '1',
    label: 'Personal',
    icon: 'folder',
    type: 'folder',
    children: [
      {
        key: '1-0',
        label: 'Sales',
        type: 'folder',
        children: [
          {
            key: '1-0-0',
            label: 'Props',
            type: 'file'
          },
          {
            key: '1-0-1',
            label: 'Stores',
            type: 'file'
          }
        ]
      },
      {
        key: '1-1',
        label: 'Props',
        type: 'file'
      },
      {
        key: '1-2',
        label: 'Components Events',
        type: 'file'
      },
      {
        key: '1-3',
        label: 'Slots',
        type: 'file'
      }
    ]
  }
])

const defaultProps = {
  children: 'children',
  label: 'label'
}
</script>
<template>
  <Menu class="w-full border-none pb-0" :model="items" />
  <el-tree :data="nodes" :props="defaultProps">
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
