<template>
  <div>
    <VCard class="mb-6 pa-2">
      <VTabs
        v-model="userTab"
        class="v-tabs-pill"
      >
        <VTab
          v-for="tab in tabs"
          :key="tab.icon"
          :to="tab.to"
        >
          <VIcon
            :size="18"
            :icon="tab.icon"
            class="me-1"
          />
          <span>{{ tab.title }}</span>
        </VTab>
      </VTabs>
    </VCard>
    <RouterView class="productsrouter" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const userTab = ref(null)

const tabs = [
  {
    icon: 'tabler-user-check',
    title: 'Industry',
    to: { name: 'master_industry' },
  },
  {
    icon: 'tabler-lock',
    title: 'Brand',
    to: { name: 'master_brand' },
  },
  {
    icon: 'tabler-currency-dollar',
    title: 'Product',
    to: { name: 'master_product' },
  },
  {
    icon: 'tabler-bell',
    title: 'UoM',
    to: { name: 'master_uom' },
  },
]
</script>
