import DisplayTeam from "@/components/DisplayTeam";
import GwStatus from "@/components/GwStatus";



//console.log(import.meta.env.VITE_API_BASE_URL)

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full mt-5 items-center">
        <h2 className="h2 w-10/12 rounded-2xl p-2 text-center mt-5 text-[#FFE9C9] bg-[#416880] lg:w-6/10 lg:rounded">
          Home of the greatest FPL draft league in the world
        </h2>
        <GwStatus/>
        <DisplayTeam/>
    </div>
  )
}
