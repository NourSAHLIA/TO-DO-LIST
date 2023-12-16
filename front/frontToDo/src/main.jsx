import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.jsx'
import Contact from './pages/contact.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>

  },
  { 
  path:"/Contact",
  element:<Contact/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
