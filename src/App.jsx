import './App.scss'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './views/Home'
import AddCard from './views/AddCard'
import Error from './views/Error'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <Error />
    },
    {
      path: '/addcard',
      element: <AddCard />,
      errorElement: <Error />
    },
  ]
  )

  return (
    <div className="App">

      <RouterProvider router={ router } />

    </div>
  )
}

export default App
