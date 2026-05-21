import { Outlet } from "react-router";
import Header from "../components/Header";
import Menu from "../components/Menu";


export default function Layout() {
  return (
    <div className="w-screen h-screen flex flex-col overflow-hidden">
      <Header/>
      <Menu/>
      <main className="flex-1 overflow-auto bg-(image:--background-gradient)">
        <Outlet/>
      </main>
    </div>
  )
}
