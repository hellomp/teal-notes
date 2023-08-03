<script setup>
import { ref } from 'vue'
import Menu from 'primevue/menu'
import Tree from 'primevue/tree'
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
    label: 'Introduction',
    icon: 'folder',
    children: [
      {
        key: '0-0',
        label: 'What is Vue.js?',
        icon: 'file',
        data: 'https://vuejs.org/guide/introduction.html#what-is-vue',
        type: 'url'
      },
      {
        key: '0-1',
        label: 'Quick Start',
        icon: 'file',
        data: 'https://vuejs.org/guide/quick-start.html#quick-start',
        type: 'url'
      },
      {
        key: '0-2',
        label: 'Creating a Vue Application',
        icon: 'file',
        data: 'https://vuejs.org/guide/essentials/application.html#creating-a-vue-application',
        type: 'url'
      },
      {
        key: '0-3',
        label: 'Conditionals Rendering',
        icon: 'file',
        data: 'https://vuejs.org/guide/essentials/conditional.html#conditional-rendering',
        type: 'url'
      }
    ]
  },
  {
    key: '1',
    label: 'Components In-Depth',
    icon: 'folder',
    children: [
      {
        key: '1-0',
        label: 'Component Registration',
        data: 'https://vuejs.org/guide/components/registration.html#component-registration',
        type: 'url'
      },
      {
        key: '1-1',
        label: 'Props',
        data: 'https://vuejs.org/guide/components/props.html#props',
        type: 'url'
      },
      {
        key: '1-2',
        label: 'Components Events',
        data: 'https://vuejs.org/guide/components/events.html#component-events',
        type: 'url'
      },
      {
        key: '1-3',
        label: 'Slots',
        data: 'https://vuejs.org/guide/components/slots.html#slots',
        type: 'url'
      }
    ]
  }
])
</script>
<template>
  <Menu class="w-full border-none pb-0" :model="items"> </Menu>
  <Tree :value="nodes" class="w-full border-none p-0">
    <template #default="slotProps">
      <span class="p-treenode-icon">
        <i :class="'fa-solid fa-' + slotProps.node.icon"></i>
      </span>
      <span>{{ slotProps.node.label }}</span>
    </template>
  </Tree>
</template>
