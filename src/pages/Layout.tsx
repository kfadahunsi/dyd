import { Outlet } from "react-router";
import Header from "../components/Header";
import Menu from "../components/Menu";


export default function Layout() {
  return (
    <div className="w-screen h-screen flex flex-col overflow-auto">
      <Header/>
      <Menu/>
      <Outlet/>
    </div>
  )
}
