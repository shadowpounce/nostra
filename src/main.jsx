import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Cursor from './Components/Cursor/Cursor'
import './assets/styles/index.scss'
import './assets/styles/animations.scss'

import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <Cursor />
      <RouterProvider router={App} />
    </>
  </React.StrictMode>
)
