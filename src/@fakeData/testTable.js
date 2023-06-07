const users =[ 
  {
    id: '1',
    fullName: 'John Doe',
    email: 'john.doe@example.com',
    role: 'admin',
    currentPlan: 'basic',
    billing: '29.99',
    status: 'active',
  },
  {
    id: '2',
    fullName: 'Jane Smith',
    email: 'jane.smith@example.com',
    role: 'author',
    currentPlan: 'enterprise',
    billing: '49.99',
    status: 'inactive',
  },

  // Add more user objects as needed
]

const headers = [
  { text: 'ID', value: 'id' },
  { text: 'Full Name', value: 'fullName' },
  { text: 'Email', value: 'email' },
  { text: 'Role', value: 'role' },
  { text: 'Current Plan', value: 'currentPlan' },
  { text: 'Billing', value: 'billing' },
  { text: 'Status', value: 'status' },
]

export { users, headers }
