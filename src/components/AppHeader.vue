<script setup>
import Toolbar from 'primevue/toolbar'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import Avatar from 'primevue/avatar'
</script>
<template>
  <Toolbar class="p-1 mb-2">
    <template #start>
      <Button icon="fa-solid fa-bars" severity="secondary" text rounded aria-label="Filter" />
    </template>
    <template #center>
      <span class="p-input-icon-left w-full max-w-lg">
        <i class="fa-solid fa-magnifying-glass" />
        <InputText
          class="w-full max-w-lg"
          v-model="value1"
          type="text"
          size="small"
          placeholder="Search"
        />
      </span>
    </template>
    <template #end>
      <Avatar
        icon="fa-solid fa-user"
        style="background-color: #008080; color: #ffffff"
        shape="circle"
      />
    </template>
  </Toolbar>
</template>
