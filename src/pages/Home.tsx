import GwStatus from "@/components/GwStatus";



export default function Home() {
  return (
    <div className="flex flex-col w-full h-full mt-5 items-center border-t-2 border-t-gray-200">
        <h2 className="h2 w-10/12 text-center mt-5 text-red-600">Home of the greatest FPL draft league in the world</h2>
        <GwStatus/>
    </div>
  )
}
