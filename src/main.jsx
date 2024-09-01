import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import ChatPage from "./routes/chat/ChatPage"
import DashboardPage from "./routes/dashboard/DashboardPage"
import HomePage from "./routes/home/HomePage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/dashboard",
    children: [
      { path: "/dashboard", element: <DashboardPage /> },
      { path: "/dashboard/chats/:id", element: <ChatPage /> }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
