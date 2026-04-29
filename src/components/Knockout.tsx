import { getGwStatus } from "@/api/api-functions"
import type { GwStatus } from "@/lib/types"
import { useEffect } from "react"

export default function Knockout() {
    useEffect(()=>{
        async function loadData(){
            const status: GwStatus = await getGwStatus()
            //console.log(status)
            if(status.current_event === 34 && status.current_event_finished === true){
                console.log("OK time to get the cup knockout displayed")
            }
        }
        loadData()
    }, [])
  return (
    <div className="border border-red-500 w-full h-full flex flex-col items-center">
        <h3 className="h3">Knockout</h3>
        <h4 className="h4">Semi Finals</h4>
        <h4 className="h4">Finals</h4>
    </div>
  )
}
