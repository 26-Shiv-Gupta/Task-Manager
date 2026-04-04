# 📋 Task Management System

A role-based task management web application built with React. Admins can create and assign tasks to employees, while employees can track, accept, complete, or mark tasks as failed — all in real time.

---

## 🌟 Features

### Admin
- Secure admin login
- Create tasks with title, description, category, due date, and assignee
- View all tasks across all employees in one place
- Real-time task status overview (New, Active, Completed, Failed)

### Employee
- Secure employee login
- Personal dashboard with task count summary
- View assigned tasks as cards
- Accept new tasks, mark them as completed or failed

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | Frontend UI library |
| Vite | Build tool & dev server |
| Tailwind CSS | Utility-first styling |
| React Context API | Global state management |
| localStorage | Data persistence |

---

## 📁 Folder Structure

```
src/
├── context/
│   └── AuthProvider.jsx         # Global auth & data context
│
├── components/
│   ├── Auth/
│   │   └── Login.jsx            # Login page (admin & employee)
│   │
│   ├── Dashboard/
│   │   ├── AdminDashboard.jsx   # Admin dashboard layout
│   │   └── EmployeeDashboard.jsx# Employee dashboard layout
│   │
│   ├── Common/
│   │   ├── Header.jsx           # Top header with logout
│   │   ├── CreateTask.jsx       # Task creation form (admin)
│   │   ├── AllTask.jsx          # All tasks list (admin)
│   │   └── TaskListNumber.jsx   # Task count stat cards (employee)
│   │
│   └── TaskList/
│       ├── TaskList.jsx         # Task card container
│       ├── NewTask.jsx          # New task card
│       ├── AcceptTask.jsx       # Active task card
│       ├── CompleteTask.jsx     # Completed task card
│       └── FaliedTask.jsx       # Failed task card
│
└── App.jsx                      # Root component & routing logic
```

---

## 🚀 Installation & Setup

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or above)
- npm or yarn

### Steps

**1. Clone the repository**
```bash
git clone https://github.com/your-username/task-management-system.git
cd task-management-system
```

**2. Install dependencies**
```bash
npm install
```

**3. Start the development server**
```bash
npm run dev
```

**4. Open in browser**
```
http://localhost:5173
```

### Build for Production
```bash
npm run build
```

---

## 🔐 Default Credentials

The app uses hardcoded credentials stored in the context for demo purposes.

| Role | Email | Password |
|---|---|---|
| Admin | admin@example.com | 123 |
| Employee | employee@example.com | 123 |

> You can update the default users and employees data inside `src/context/AuthProvider.jsx`.

---

## 📌 How It Works

1. User logs in as **Admin** or **Employee**
2. **Admin** creates a task and assigns it to an employee by first name
3. The task appears on the **Employee's** dashboard as a *New Task*
4. Employee **accepts** the task → status changes to *Active*
5. Employee marks it as **Completed** or **Failed**
6. Task counts update in real time on both dashboards
7. All data is persisted in **localStorage** so it survives page refresh
