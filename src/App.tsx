import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom"
import Home from "./pages/Home"
import { ThemeProvider } from "./components/theme-provider"
import Layout from "./pages/Layout"
import Managers from "./pages/Managers"
import Table from "./pages/Table"
import History from "./pages/History"
import ErrorPage from "./pages/ErrorPage"
import NotFound from "./pages/NotFound"
import Cup from "./pages/Cup"

export function App() {
  const router = createBrowserRouter(createRoutesFromElements(
      <Route element={<Layout/>} errorElement={<ErrorPage/>}>
        <Route index element={<Home/>}/>
        <Route path="managers" element={<Managers/>}/>
        <Route path="table" element={<Table/>}/>
        <Route path="history" element={<History/>}/>
        <Route path="cup" element={<Cup/>} />
        <Route path="*" element={<NotFound/>}/>
      </Route>
  ))
  return (
    <ThemeProvider>
      <RouterProvider router={router}/>
    </ThemeProvider>
  )
}

export default App
