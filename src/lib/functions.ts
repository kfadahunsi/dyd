import type { FixtureList, TeamList } from "./types"


export function countManager(manager: string, teamList: TeamList){
  let counter = 0
  for(const team of teamList){
    if(team.manager === manager){
      counter = counter + 1
    }
  } 
  return counter
}

export function groupFixtures(fixtureList: FixtureList){
  return fixtureList.reduce<Record<string, FixtureList>>((acc, match)=>{
   const week = String(match.week)

  if (!acc[week]) {
    acc[week] = []
  }

  acc[week].push(match)
  return acc
}, {})

}