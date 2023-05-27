export default [
  {
    title: "Dashboard",
    to: null,
    icon: { icon: "tabler-smart-home" },
  },
  { heading: "ADMINISTRATION" },
  {
    title: "Account Manager",
    icon: { icon: "tabler-smart-home" },
    children: [
      { title: "Member List", to: null },
      { title: "Geoplotter", to: null },
      { title: "Add Member", to: null },
    ],
  },
  {
    title: "Commission Manager",
    icon: { icon: "tabler-file" },
    children: [
      { title: "Rates Library", to: null },
      { title: "Default Rates", to: null },
      { title: "Agent Manager", to: null },
      { title: "Payments", to: null },
    ],
  },
  { heading: "OPERATIONAL" },
  {
    title: "Catalogue",
    icon: { icon: "tabler-smart-home" },
    children: [
      { title: "Shop", to: null },
      { title: "Cart", to: null },
    ],
  },
  {
    title: "Shop Manager",
    icon: { icon: "tabler-file" },
    children: [
      { title: "Add Manage", to: null },
      { title: "Sales Manager", to: null },
      { title: "Consignment", to: null },
    ],
  },
  {
    title: "Media Center",
    icon: { icon: "tabler-smart-home" },
    children: [{ title: "Add New", to: null }],
  },
  { heading: "SYSTEM" },
  {
    title: "Master Data",
    icon: { icon: "tabler-smart-home" },
    children: [
      { title: "Products", to: null },
      { title: "Countries", to: null },
      { title: "Contracts", to: null },
      { title: "Roles & Permissions", to: null },
      { title: "Defaults", to: null },
    ],
  },
  {
    title: "Communication",
    icon: { icon: "tabler-file" },
    children: [
      { title: "Announcements", to: null },
      { title: "Whatsapp", to: null },
    ],
  },
  {
    title: "System Accounts",
    to: null,
    icon: { icon: "tabler-smart-home" },
  },
  {
    title: "Warehouse",
    icon: { icon: "tabler-file" },
    children: [
      { title: "Manage", to: null },
      { title: "Stock Manager", to: null },
      { title: "Transactions History", to: null },
    ],
  },
  {
    title: "Transactions",
    icon: { icon: "tabler-file" },
    children: [
      { title: "Bonus Payments", to: null },
      { title: "Contract Signings", to: null },
      { title: "Agent Checks", to: null },
      { title: "Agent Sales", to: null },
      { title: "Agent Stock", to: null },
      { title: "Consign Payments", to: null },
      { title: "Late Actions", to: null },
      { title: "New Accounts", to: null },
      { title: "New Shops", to: null },
    ],
  },
]
