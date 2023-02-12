import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Cursor from './Components/Cursor/Cursor'
import './styles/index.scss'
import './styles/animations.scss'

import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <Cursor />
      <RouterProvider router={App} />
    </>
  </React.StrictMode>
)
