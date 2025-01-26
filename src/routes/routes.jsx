import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Body from "../components/Body.jsx";
import Login from "../components/Login.jsx";
import Logout from "../components/Logout.jsx";

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Body />}>
      <Route path='/login' element={<Login />} />
      <Route path='/logout' element={<Logout />} />
    </Route>
  )
)

export default appRouter