<script setup>
import * as industriesServices from "@/services/master-data/industries"
import { requiredValidator } from "@validators"
import { ref, shallowReactive } from "vue"
import { VDataTable } from "vuetify/labs/VDataTable"

const sortBy = ref([{ key: "calories", order: "asc" }])

const tableOptions = ref({
  pageLimit: 10,
  currentPage: 1,
})

const tableHeaders = [
  {
    title: "Name",
    align: "start",
    key: "name",
  },
  { title: "Action", key: "action", sortable: false },
]

const searchInput = shallowRef("")
const industryInput = shallowRef("")
const editIndustryId = shallowRef(null)
const deleteIndustryId = shallowRef(null)
const showDeleteConfirmation = shallowRef(false) //Delete confirmation dialog

watch(showDeleteConfirmation, value => {
  if (!value && deleteIndustryId.value) {
    deleteIndustryId.value = null
  }
})

// form ref
const formRef = shallowRef()

const industriesData = shallowReactive({
  loadingIndustries: false,
  creatingIndustry: false, // loading state => creating and editing
  data: [],
})

const defaultOptions = {
  show: false,
  mode: "",
  info: {
    title: "",
  },
}

// creating and editing industries dialoag
const dialog = reactive({ ...defaultOptions })

/**
 * @param {"Edit" | "Create"} type
 */
function openDialog(type) {
  dialog.show = true
  if (type === "Create") {
    dialog.mode = "CREATE"
    dialog.info = { title: "Create Industry" }
  } else {
    dialog.mode = "EDIT"
    dialog.info = { title: "Edit Industry" }
  }
}

function closeDialog() {
  if (!industriesData.creatingIndustry) {
    Object.assign(dialog, defaultOptions)
    if (editIndustryId.value) editIndustryId.value = null
    if (industryInput.value) industryInput.value = ""
  }
}

async function deleteIndustries() {
  if (!deleteIndustryId.value) return
  try {
    await industriesServices.deleteIndustry(deleteIndustryId.value)
    showDeleteConfirmation.value = false

    const industriesRes = await industriesServices.getIndustries({
      page: tableOptions.value.currentPage,
      limit: tableOptions.value.pageLimit,
    })

    industriesData.data = industriesRes.data
  } catch (err) {
    console.log(err)
  }
}

async function onSave() {
  if (!formRef.value) return
  const result = await formRef.value.validate()

  // form invalid || input value empty || request already in progress
  if (!result.valid || !industryInput.value || industriesData.creatingIndustry)
    return
  industriesData.creatingIndustry = true
  try {
    if (dialog.mode === "CREATE") {
      const res = await industriesServices.createNewIndustries({
        name: industryInput.value,
      })

      industriesData.data = industriesData.data.concat(res.data)
    } else {
      if (!editIndustryId.value) return
      await industriesServices.updateIndustries(editIndustryId.value, {
        name: industryInput.value,
      })

      const industries = await industriesServices.getIndustries({
        page: tableOptions.value.currentPage,
        limit: tableOptions.value.pageLimit,
      })

      industriesData.data = industries.data
      editIndustryId.value = null
    }
    industriesData.creatingIndustry = false
    industryInput.value = ""
    closeDialog()
  } catch (err) {
    console.log(err)
    industriesData.creatingIndustry = false
  }
}
onMounted(async () => {
  try {
    const hasI = window.localStorage.getItem("industries")
    if (hasI) {
      industriesData.data = JSON.parse(hasI)

      return
    }
    industriesData.loadingIndustries = true

    const industries = await industriesServices.getIndustries({
      page: tableOptions.value.currentPage,
      limit: tableOptions.value.pageLimit,
    })

    industriesData.data = industries.data
    window.localStorage.setItem("industries", JSON.stringify(industries.data))
  } catch (err) {
    console.log(err)
  } finally {
    industriesData.loadingIndustries = false
  }
})
</script>

<template>
  <div>
    // creating and editing industries dialog 
    <VDialog
      v-model="dialog.show"
      width="700"
      transition="slide-y-transition"
    >
      <VCard>
        <VCardTitle class="bg-primary">
          {{ dialog.info.title }}
          <DialogCloseBtn @click="closeDialog" />
        </VCardTitle>
        <VCardText>
          <div class="text-subtitle-1 text-medium-emphasis">
            Name
          </div>
          <VForm
            ref="formRef"
            @submit.prevent="onSave"
          >
            <VTextField
              v-model="industryInput"
              placeholder="Name"
              :rules="[requiredValidator]"
              :readonly="industriesData.creatingIndustry"
            />
            <div class="text-end mt-10">
              <VBtn
                color="primary"
                type="submit"
              >
                Save
              </VBtn>
            </div>
          </VForm>
        </VCardText>
      </VCard>
    </VDialog>
    // delete confirmation dialog
    <VDialog
      v-model="showDeleteConfirmation"
      width="440"
      transition="v-scale-transition"
    >
      <VCard>
        <div
          class="py-6 mx-auto text-center"
          style="inline-size: 90%"
        >
          <VIcon
            icon="mdi-alert-circle-outline"
            class="text-warning"
            style="block-size: 94px;inline-size:94px"
          />
          <h2 class="text-h3 font-weight-medium">
            Are you sure to delete this Industry?
          </h2>
          <p class="text-subtitle-1">
            You won't be able to revert this!
          </p>
          <VBtn
            color="primary"
            type="submit"
            class="mr-3"
            @click="deleteIndustries"
          >
            Yes Delete it!
          </VBtn>
          <VBtn
            variant="outlined"
            color="error"
            @click="showDeleteConfirmation = false"
          >
            Cancle
          </VBtn>
        </div>
      </VCard>
    </VDialog>
    <VCard class="mb-6">
      <template #title>
        <VRow>
          <VCol>
            <VBtn @click="openDialog('Create')">
              Create
            </VBtn>
          </VCol>
          <VCol
            class="d-flex align-center"
            style="max-inline-size: 340px"
          >
            <p class="font-weight-bold text-sm mr-2 mb-0">
              Search
            </p>
            <VTextField
              v-model="searchInput"
              placeholder="search"
            />
          </VCol>
        </VRow>
      </template>
      <template #text>
        <VDataTable
          v-model:page="tableOptions.currentPage"
          :sort-by="sortBy"
          :headers="tableHeaders"
          :items="industriesData.data"
          item-key="name"
          :items-per-page="tableOptions.pageLimit"
          hide-default-footer
        >
          <template #item.action="{ item }">
            <VMenu>
              <template #activator="{ props }">
                <VBtn
                  v-bind="props"
                  variant="text"
                  :ripple="false"
                >
                  <VIcon icon="mdi-dots-vertical" />
                </VBtn>
              </template>
              <VList>
                <VBtn
                  prepend-icon="mdi-pencil-outline"
                  variant="text"
                  block
                  class="justify-start"
                  @click="
                    () => {
                      industryInput = item.raw.name;
                      openDialog('Edit');
                    }
                  "
                >
                  Edit
                </VBtn>
                <VBtn
                  prepend-icon="mdi-trash-can-outline"
                  variant="text"
                  block
                  class="justify-start"
                  @click="
                    () => {
                      deleteIndustryId = item.raw.id;
                      showDeleteConfirmation = true;
                    }
                  "
                >
                  Delete
                </VBtn>
              </VList>
            </VMenu>
          </template>
          <template #bottom>
            <div class="d-flex justify-space-between align-center">
              <div class="d-flex align-center gap-3">
                <span class="d-inline-block">
                  Showing  {{ tableOptions.currentPage }} to 
                </span>
                <VMenu>
                  <template #activator="{ props }">
                    <VBtn
                      color="primary"
                      variant="outlined"
                      v-bind="props"
                      append-icon="mdi-unfold-more-horizontal"
                    >
                      {{ tableOptions.pageLimit }}
                    </VBtn>
                  </template>
                  <VList>
                    <VListItem
                      v-for="(item, index) in [2, 5, 10, 15, 20]"
                      :key="index"
                      :value="index"
                    >
                      <VListItemTitle class="text-primary">
                        {{ item }}
                      </VListItemTitle>
                    </VListItem>
                  </VList>
                </VMenu>
                <span class="d-inline-block">
                  of {{ 7 }} entries
                </span>
              </div>
              <VPagination
                v-model="tableOptions.currentPage"
                class="ml-auto"
                rounded="circle"
                :length="15"
                style="max-inline-size: 400px"
              />
            </div>
          </template>
        </VDataTable>
      </template>
    </VCard>
  </div>
</template>
