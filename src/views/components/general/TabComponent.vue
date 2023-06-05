<template>
  <div>
    <section class="hidden-md-and-up">
      <VCard
        class="mb-6 pa-3"
        style="position: relative; z-index: 50;"
      >
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
        <Teleport to="body">
          <VNavigationDrawer
            v-model="drawer"
            class="drawer-container"
          >
            <VCardTitle class="pa-1 ma-4">
              <strong>{{ drawerTitle }}</strong>
            </VCardTitle>
            <template
              v-for="tab in tabs"
              :key="tab.icon"
            >
              <VListItem :to="tab.to">
                <VListItemIcon>
                  <VIcon
                    :size="20"
                    class="mb-2"
                  >
                    {{ tab.icon }}
                  </VIcon>
                </VListItemIcon>
                <VListItemContent>
                  <button
                    class="drawer-button"
                    @click="navigateTo(tab.to)"
                  >
                    <section class="d-flex align-center pa-2">
                      <span
                        class="me-1"
                        style="font-size: 18px;"
                      >{{ tab.title }}</span>
                    </section>
                  </button>
                </VListItemContent>
              </VListItem>
            </template>
          </VNavigationDrawer>
        </Teleport>
      </VCard>
    </section>
    <section class="hidden-sm-and-down">
      <VCard
        class="mb-6 pa-2"
        style="position: relative; z-index: 999;"
      >
        <VTabs
          v-model="localUserTab"
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
    <div class="productsrouter">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  userTab: {
    type: Object,
    required: true,
  },
  drawerTitle: {
    type: String,
    default: 'Default Title',
    required: true,
  },
  tabs: {
    type: Array,
    required: true,
  },
})

const drawer = ref(false)
const router = useRouter()
const localUserTab = ref(null)

onMounted(() => {
  localUserTab.value = props.userTab
})

function navigateTo(to) {
  router.push(to)
}
</script>

<style scoped>
.drawer-container {
  position: relative;
  z-index: 1200;
}

.align-center {
  display: flex;
  align-items: center;
}

.drawer-button {
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
}

.drawer-button:focus {
  outline: none;
}

.drawer-button:hover {
  background-color: #f5f5f5;
}
</style>
