<template>
  <VCard>
    <section>
      <VCardText class="d-flex flex-wrap py-4 gap-4">
        <div
          class="me-3 hidden-sm-and-down"
          style="inline-size: 80px;"
        >
          <VSelect
            v-model="rowsPerPage"
            dense
            outlined
            :items="[10, 20, 30, 50]"
          />
        </div>

        <VSpacer />

        <div class="app-user-search-filter d-flex align-center flex-wrap gap-4">
          <!-- Search input -->
          <div style="inline-size: 10rem;">
            <VTextField
              v-model="searchQuery"
              placeholder="Search"
              dense
            />
          </div>

          <!-- General button -->
          <VBtn
            v-if="generalButtonAction"
            prepend-icon="tabler-plus"
            @click="generalButtonAction"
          >
            Add User
          </VBtn>
        </div>
      </VCardText>

      <VDataTable
        :headers="headers"
        :items="filteredData"
        :rows-per-page-items="[10, 20, 30, 50]"
        :search="searchQuery"
        class="text-no-wrap"
      >
        <!-- Custom table rows -->
        <template #item="{ item }">
          <tr style="block-size: 3.75rem;">
            <td
              v-for="(header, index) in headers"
              :key="index"
            >
              {{ item[header.toLowerCase()] }}
            </td>
          </tr>
        </template>

        <!-- Empty state -->
        <template #no-results>
          <tfoot>
            <tr>
              <td
                :colspan="headers.length"
                class="text-center"
              >
                No data available
              </td>
            </tr>
          </tfoot>
        </template>
      </VDataTable>

      <VDivider />

      <VCardText class="d-flex align-center flex-wrap justify-space-between gap-4 py-3 px-5">
        <span class="text-sm text-disabled">{{ paginationData }}</span>
        <VPagination
          v-model="currentPage"
          size="small"
          :total-visible="5"
          :length="totalPages"
        />
      </VCardText>
    </section>
  </VCard>
</template>

<script setup>
import { computed, defineProps, ref } from 'vue'

const props = defineProps({
  headers: {
    type: Array,
    required: true,
  },
  data: {
    type: Array,
    required: true,
  },
  generalButtonAction: {
    type: Function,
    default: null,
  },
})

const rowsPerPage = ref(10)
const searchQuery = ref('')
const currentPage = ref(1)

const filteredData = computed(() => {
  // Filter data based on the search query
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()

    return props.data.filter(item =>
      Object.values(item).some(value =>
        value.toString().toLowerCase().includes(query),
      ),
    )
  }

  return props.data
})

const paginationData = computed(() => {
  const start = (currentPage.value - 1) * rowsPerPage.value + 1
  const end = Math.min(start + rowsPerPage.value - 1, filteredData.value.length)

  return `Showing ${start}-${end} of ${filteredData.value.length}`
})
</script>
