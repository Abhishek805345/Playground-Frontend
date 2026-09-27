import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import App from './App.jsx'
import { sessionLoader,Nav } from './components/welcome.jsx';
import { Hero } from './components/hero.jsx';
import { Provider } from 'react-redux';
import Store from './utils/store.jsx';
import { Register } from './components/register.jsx';

const routes=createBrowserRouter([
  {
    path:"/",
    element:<Hero/>,
    loader:sessionLoader
  },
  {
    path:"/register",
    element:<Register/>
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
