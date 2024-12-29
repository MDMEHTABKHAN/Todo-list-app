# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



<!--COMPLETE SETUP  -->

# Todo List Application

A simple and intuitive **Todo List Application** built with **React**, **Vite**, and **Tailwind CSS**. This app enables users to manage tasks by adding, deleting, editing, marking as completed, and filtering tasks by status.

---

## Features

- **Add Tasks**: Users can create tasks with a title, category, and optional reminder.
- **Edit Tasks**: Modify existing tasks.
- **Delete Tasks**: Permanently remove tasks.
- **Filter Tasks**: View tasks filtered by:
  - All tasks
  - Completed tasks
  - Pending tasks
- **Mark as Completed**: Mark tasks as completed or toggle them back to pending.
- **Responsive Design**: Styled with Tailwind CSS for a modern and responsive UI.

---

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (higher recommended)
- [Git](https://git-scm.com/) for version control

---

## Getting Started

Follow these steps to set up the project on your local machine:

### 1. Clone the Repository

Clone the repository from GitHub using the command below:
```bash
git clone https://github.com/<your-username>/<your-repo-name>.git

# project structure 

src/
├── components/
│   ├── TaskForm.jsx      # Form to add or edit tasks
│   ├── TaskList.jsx      # Displays the list of tasks
│   ├── TaskItem.jsx      # Represents a single task item
├── App.jsx               # Main application component
├── main.jsx              # Entry point for React
├── index.css             # Global CSS with Tailwind imports
