import { getGwStatus, getHomeStats } from "@/api/api-functions"
import type { GwStatus, HomeStatsList } from "@/lib/types"
import { useEffect, useState } from "react"
import { Spinner } from "./ui/spinner"

export default function GwStatus() {
    const [status, setStatus] = useState<GwStatus | null>(null)
    const [homeData, setHomeData] = useState<HomeStatsList | null>(null)


    useEffect(()=>{
        async function loadGwData(){
            const gwStatus: GwStatus = await getGwStatus()
            const homeStats: HomeStatsList = await getHomeStats()
            //console.log(homeStats)

            setStatus(gwStatus)
            setHomeData(homeStats)
        }

        loadGwData()
    }, [])
  return (
    <div className="mt-5 w-full flex flex-col items-center">
        <h3 className="h3 mb-2">GW Information</h3>
        {status && homeData ? 
        <div className="w-full flex flex-col items-center">
            <h4 className="h4">Gameweek {status.current_event} - {`${status.current_event_finished ? "Finished" : "Pending" }`}</h4>
            <p>{`Trading Window Status: ${status.trades_time_for_approval ? "Open" : "Closed"}`}</p>
            <p>{`Waivers: ${status.trades_time_for_approval ? "Complete" : "Pending"}`}</p>
            <div className="w-full flex flex-col items-center mt-5">
                <p className="bg-green-400 rounded-2xl px-2 h-10 text-center pt-2 mb-2">GW Top Scorer: {homeData[0].name} ({homeData[0].event_points})</p>
                <p className="bg-red-400 rounded-2xl px-2 h-10 text-center pt-2 mb-2">GW Bottom Scorer: {homeData[homeData.length - 1].name} ({homeData[homeData.length - 1].event_points})</p>
                <p className="bg-blue-400 rounded-2xl px-2 h-10 text-center pt-2">Average Points: {Number((homeData.reduce((acc, data)=>(acc + data.event_points), 0)/ homeData.length).toFixed(2))}</p>
            </div>
        </div>
        : <Spinner className="size-8"/>}
    </div>
  )
}
