import { getFixtures } from "@/api/api-functions"
import { groupFixtures } from "@/lib/functions"
import type { FixtureList} from "@/lib/types"
import { useEffect, useState } from "react"

export default function FixturesAndResults() {
    const [fixtures, setFixtures] = useState<Record<string, FixtureList> | null>(null)


    useEffect(()=>{
        async function loadFixtures(){
            const leagueFixtures =  await getFixtures()
            const groupedFixtures = groupFixtures(leagueFixtures)
            console.log(groupedFixtures)
            setFixtures(groupedFixtures)
        }

        loadFixtures()
    }, [])


  return (
    <div className="mt-10 w-full h-full lg:flex lg:flex-row">
        <div className="border border-blue-200 w-full flex flex-col items-center lg:w-3/6">
            <h3 className="h3">Results</h3>
            {fixtures ? Object.entries(fixtures).filter(
                ([_fixtureNo,fixtureList])=>(fixtureList.every(
                    (fixture)=>(fixture.home_score !==null)))).map(([fixtureNo,fixtureList])=>{
                        return(
                            <div key={fixtureNo} className="flex flex-col items-center">
                                <h4 className="h4">Week {fixtureNo}</h4>
                                {fixtureList.map((fixture)=>{
                                    return(
                                        <p key={`${fixture.home}${fixture.away}`}>{fixture.home} {fixture.home_score} - {fixture.away_score} {fixture.away}</p>
                                    )
                                })}
                            </div>
                        )
                    })
            : <p>Loading</p>}

        </div>
        <div className="border border-green-300 w-full flex flex-col items-center  lg:w-3/6">
            <h3 className="h3">Fixtures</h3>
            {fixtures ? Object.entries(fixtures).filter(
                ([_fixtureNo,fixtureList])=>(fixtureList.every(
                    (fixture)=>(fixture.home_score ===null)))).map(([fixtureNo,fixtureList])=>{
                        return(
                            <div key={fixtureNo} className="flex flex-col items-center">
                                <h4 className="h4">Week {fixtureNo}</h4>
                                {fixtureList.map((fixture)=>{
                                    return(
                                        <p key={`${fixture.home}${fixture.away}`}>{fixture.home} v {fixture.away}</p>
                                    )
                                })}
                            </div>
                        )
                    })
            : <p>Loading</p>}
        </div>
    </div>
  )
}
