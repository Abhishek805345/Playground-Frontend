import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import App from './App.jsx'
import { sessionLoader,Nav } from './components/welcome.jsx';

const routes=createBrowserRouter([
  {
    path:"/",
    element:<Nav/>,
    loader:sessionLoader
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes}>
        <App />
    </RouterProvider>
  </StrictMode>,
)
