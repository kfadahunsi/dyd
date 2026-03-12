import { Outlet } from "react-router";
import Header from "./Header";
import Menu from "./Menu";


export default function Layout() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Header/>
      <Menu/>
      <Outlet/>
    </div>
  )
}
