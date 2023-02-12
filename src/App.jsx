import Home from './pages/Home/Home'
import { createBrowserRouter } from 'react-router-dom'

const App = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
])

export default App
