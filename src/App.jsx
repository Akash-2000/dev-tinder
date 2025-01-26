import { RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router'
import './App.css'
import appRouter from './routes/routes'


function App() {

  return (
    <>
    <RouterProvider router={appRouter}/>
    </>
  )
}

export default App
