<template>
  <div>
    <TabComponent
      :drawer-title="drawerTitle"
      :tabs="tabs"
    >
      <template #default>
        <div class="productsrouter">
          <RouterView />
        </div>
      </template>
    </TabComponent>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import TabComponent from '../../../components/general/TabComponent.vue'


const drawerTitle = 'Master Product'

const tabs = [
  {
    icon: 'tabler-building-factory-2',
    title: 'Industry',
    to: { name: 'master_industry' },
  },
  {
    icon: 'tabler-badge-tm',
    title: 'Brand',
    to: { name: 'master_brand' },
  },
  {
    icon: 'tabler-flask',
    title: 'Product',
    to: { name: 'master_product' },
  },
  {
    icon: 'tabler-package',
    title: 'UoM',
    to: { name: 'master_uom' },
  },
]
</script>

<style scoped>
.productsrouter {
  margin-block-start: 20px;
}
</style>
