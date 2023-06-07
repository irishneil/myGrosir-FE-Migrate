<template>
  <div>
    <CustomTable
      :headers="headers"
      :data="data"
      general-button-name="Add User"
      :general-button-action="showAddUserDrawer"
    />
  </div>
</template>

<script setup>
import CustomTable from "../../components/tables/Table1.vue"

const headers = ["Name", "Photo", "Country", "Position", "Status", "Action"]

const data = [
  {
    Name: "Agent",
    Photo: "",
    Country: "ID",
    Position: "Super Admin",
    Status: "Active",
    Action: "",
  },
  {
    Name: "Admin",
    Photo: "",
    Country: "MY",
    Position: "Super Admin",
    Status: "Active",
    Action: "",
  },
  {
    Name: "Warehouse",
    Photo: "",
    Country: "MY",
    Position: "Warehouse",
    Status: "Active",
    Action: "Add Test",
  },
  {
    Name: "Marketing",
    Photo: "",
    Country: "ID",
    Position: "Warehouse",
    Status: "Active",
    Action: "marketing5",
  },
  {
    Name: "Marketing",
    Photo: "",
    Country: "ID",
    Position: "Marketing",
    Status: "Active",
    Action: "marketing41",
  },
  {
    Name: "Marketing",
    Photo: "",
    Country: "MY",
    Position: "Marketing",
    Status: "Active",
    Action: "marketing2",
  },
  {
    Name: "Marketing",
    Photo: "",
    Country: "MY",
    Position: "Marketing",
    Status: "Active",
    Action: "admin2",
  },
  {
    Name: "Admin2",
    Photo: "",
    Country: "MY",
    Position: "Admin2",
    Status: "Active",
    Action: "",
  },
]

function showAddUserDrawer() {
  // Add your logic to show the add user drawer here
}
</script>
