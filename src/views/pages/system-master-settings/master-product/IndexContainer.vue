<template>
  <div>
    <TabComponent
      :user-tab="userTab"
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
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import TabComponent from '../../../components/general/TabComponent.vue'

const userTab = ref(null)
const drawerTitle = 'Master Product'

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

<style scoped>
.productsrouter {
  margin-block-start: 20px;
}
</style>
