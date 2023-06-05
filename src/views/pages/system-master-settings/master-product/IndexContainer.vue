<template>
  <div>
    <section class="hidden-md-and-up">
      <VCard class="mb-6 pa-3">
        <IconBtn
          id="vertical-nav-toggle-btn"
          class=""
          @click="drawer = !drawer"
        >
          <VIcon
            size="26"
            icon="tabler-menu-2"
          />
        </IconBtn>
        <VNavigationDrawer
          v-model="drawer"
          app
          class="drawer-container"
        >
          <template
            v-for="tab in tabs"
            :key="tab.icon"
          >
            <VListItem :to="tab.to">
              <VListItemIcon>
                <VIcon :size="18">
                  {{ tab.icon }}
                </VIcon>
              </VListItemIcon>
              <VListItemContent>
                <VListItemTitle>{{ tab.title }}</VListItemTitle>
              </VListItemContent>
            </VListItem>
          </template>
        </VNavigationDrawer>
      </VCard>
    </section>
    <section class="hidden-sm-and-down">
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
    </section>
    <RouterView class="productsrouter" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const userTab = ref(null)
const drawer = ref(false)

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
.drawer-container {
  z-index: 9999;
}
</style>
