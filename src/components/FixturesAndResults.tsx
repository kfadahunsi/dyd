import { getFixtures } from "@/api/api-functions"
import { fixturesComplete, fixturesRemaining, groupFixtures} from "@/lib/functions"
import type { FixtureList} from "@/lib/types"
import { useEffect, useState } from "react"

export default function FixturesAndResults() {
    const [fixtures, setFixtures] = useState<Record<string, FixtureList> | null>(null)


    useEffect(()=>{
        async function loadFixtures(){
            const leagueFixtures =  await getFixtures()
            const groupedFixtures = groupFixtures(leagueFixtures)
            //console.log("this is grouped fixtures: ", groupedFixtures)
            setFixtures(groupedFixtures)
        }

        loadFixtures()
    }, [])


  return (
    <div className="mt-10 w-full lg:flex lg:flex-row">
        <div className="border border-green-300 w-full flex flex-col items-center lg:w-3/6 overflow-auto">
            <h3 className="h3">Fixtures</h3>
            {fixtures && fixturesRemaining(fixtures) ? Object.entries(fixtures).filter(
                ([_fixtureNo,fixtureList])=>(fixtureList.every(
                    (fixture)=>(fixture.home_score ===null)))).map(([fixtureNo,fixtureList])=>{
                        return(
                            <div key={fixtureNo} className="flex flex-col items-center mb-7">
                                <h4 className="h4">Week {fixtureNo}</h4>
                                {fixtureList.map((fixture)=>{
                                    return(
                                        <div className="flex justify-center w-full gap-2 border-b-4" key={`${fixture.home}${fixture.away}`}>
                                            <span className="w-45 text-center">{fixture.home}</span>
                                            <span className="w-10 text-center">v</span>
                                            <span className="w-45 text-center">{fixture.away}</span>
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })
            : fixtures && !fixturesRemaining(fixtures) ? <p>No fixtures yet, please check back when the new season starts.</p> 
            :  <p>Loading</p>}
        </div>
        <div className="border border-blue-200 w-full flex flex-col items-center lg:w-3/6 overflow-auto">
            <h3 className="h3">Results</h3>
            {fixtures && !fixturesComplete(fixtures) ? Object.entries(fixtures).filter(
                ([_fixtureNo,fixtureList])=>(fixtureList.every(
                    (fixture)=>(fixture.home_score !==null)))).map(([fixtureNo,fixtureList])=>{
                        return(
                            <div key={fixtureNo} className="flex flex-col items-center mb-7">
                                <h4 className="h4">Week {fixtureNo}</h4>
                                {fixtureList.map((fixture)=>{
                                    return(
                                        <div className="flex justify-center w-full gap-2 border-b-4" key={`${fixture.home}${fixture.away}`}>
                                            <span className="w-40 text-center lg:w-45">{fixture.home}</span>
                                            <span className="text-center">{fixture.home_score}</span>
                                            <span className="text-center">-</span>
                                            <span className="text-center">{fixture.away_score}</span>
                                            <span className="w-40 text-center lg:w-45">{fixture.away}</span>
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })
            : fixtures && fixturesComplete(fixtures) ? <p>No results yet, please check back from GW 27.</p> 
            : <p>Loading</p>}

        </div>
    </div>
  )
}
