localStorage.clear()

const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Landing Page",
        taskDescription: "Create a responsive landing page for the new product.",
        taskDate: "2026-06-22",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Navbar Bug",
        taskDescription: "Resolve the mobile navigation issue.",
        taskDate: "2026-06-18",
        category: "Development"
      }
    ]
  },
  {
    id: 2,
    firstName: "Vivaan",
    email: "employee2@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 0,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Write API Documentation",
        taskDescription: "Document all authentication endpoints.",
        taskDate: "2026-06-23",
        category: "Documentation"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Database Migration",
        taskDescription: "Migrate user data to the new schema.",
        taskDate: "2026-06-17",
        category: "Database"
      }
    ]
  },
  {
    id: 3,
    firstName: "Aditya",
    email: "employee3@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 0,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Implement Login Page",
        taskDescription: "Build login functionality with validation.",
        taskDate: "2026-06-24",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Wireframes",
        taskDescription: "Design dashboard wireframes.",
        taskDate: "2026-06-15",
        category: "UI/UX"
      }
    ]
  },
  {
    id: 4,
    firstName: "Krishna",
    email: "employee4@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Test Payment Gateway",
        taskDescription: "Perform end-to-end testing of payment flow.",
        taskDate: "2026-06-25",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Bug Verification",
        taskDescription: "Verify fixes reported by the development team.",
        taskDate: "2026-06-16",
        category: "QA"
      }
    ]
  },
  {
    id: 5,
    firstName: "Harsh",
    email: "employee5@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 0,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare Monthly Report",
        taskDescription: "Compile and submit team performance report.",
        taskDate: "2026-06-26",
        category: "Management"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Client Follow-up",
        taskDescription: "Contact client regarding pending requirements.",
        taskDate: "2026-06-19",
        category: "Communication"
      }
    ]
  }
];
const admin = [
  {
    id: 100,
    email: "admin@example.com",
    password: "123"
  }
];

export const SetLocalStorage = ()=>{
    localStorage.setItem('Employees',JSON.stringify(employees))  
    localStorage.setItem('Admin',JSON.stringify(admin))  
}
export const GetLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('Employees'))
    const admind = JSON.parse(localStorage.getItem('Admin'))

    return {employees,admind}
}