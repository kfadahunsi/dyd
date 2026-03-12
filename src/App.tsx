import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom"
import Home from "./components/Home"
import { ThemeProvider } from "./components/theme-provider"
import Layout from "./components/Layout"
import Teams from "./components/Teams"
import Table from "./components/Table"
import History from "./components/History"
import ErrorPage from "./components/ErrorPage"
import NotFound from "./components/NotFound"

export function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route element={<Layout/>}>
        <Route index element={<Home/>} errorElement={<ErrorPage/>}/>
        <Route path="teams" element={<Teams/>}/>
        <Route path="table" element={<Table/>}/>
        <Route path="history" element={<History/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Route>
    </Route>
  ))
  return (
    <ThemeProvider>
      <RouterProvider router={router}/>
    </ThemeProvider>
  )
}

export default App
