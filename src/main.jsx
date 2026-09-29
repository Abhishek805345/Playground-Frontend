import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import App from './App.jsx'
import { sessionLoader,Nav } from './components/welcome.jsx';
import { Hero } from './components/hero.jsx';
import { Provider } from 'react-redux';
import Store from './utils/store.jsx';
import { Register, RegisterAction } from './components/register.jsx';
import { Login, loginAction } from './components/login.jsx';

const routes=createBrowserRouter([
  {
    path:"/",
    element:<Hero/>,
    loader:sessionLoader
  },
  {
    path:"/register",
    element:<Register/>,
    action:RegisterAction
  },
  {
    path:"/login",
    element:<Login/>,
    action:loginAction
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Store}>
    <RouterProvider router={routes}>
          <App />
    </RouterProvider>
    </Provider>
  </StrictMode>,
)
