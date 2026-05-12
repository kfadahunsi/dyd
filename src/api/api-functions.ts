/*To get your team id, go to the fpl draft website, 
scroll to the admin section, click on  team details. 
when the page loads, the number will be in you url. 
when you fetch your team data. you will then be able 
to see your league ID as well in the response*/


//const teamID = "224216"
//const leagueID = "43953"


export async function getTable(){
    try{    
    const res = await fetch("http://localhost:8000/league_table")
    if(!res.ok){
        const err = await res.json()
        throw new Error(err.detail || "Failed to fetch table data")
    }
    const data = await res.json()
    return data
    }
    finally{
        console.log("finally block from getTable reached")
    }

}

export async function getCupTable() {
    try{
        const response = await fetch("http://localhost:8000/cup_table")
        if(!response.ok){
            const err = await response.json()
            throw new Error(err.detal || "Failed to fetch cup data")
        }
        const data =  await response.json()
        return data
    }
    finally{
        console.log("finally block from getCupTable reached")
    }
}

export async function getFixtures() {
    try{
        const response = await fetch("http://localhost:8000/fixtures")
        if(!response.ok){
            const err = await response.json()
            throw new Error(err.detail || "Failed to fetch fixture data")
        }
        const data =  response.json()
        return data
    }
    finally{
       console.log("finally block from getCupTable reached") 
    }
}

export async function getGwStatus() {
    try{
        const response = await fetch("http://localhost:8000/gw_status")
        if(!response.ok){
            const err = await response.json()
            throw new Error( err.detail || "Failed to fetch gw status")
        }
        const data = response.json()
        return data
    }catch(err){
        console.error(err)
    }
}

export async function getHomeStats() {
    try{
        const response = await fetch("http://localhost:8000/home_stats")
        if(!response.ok){
            const err = await response.json()
            throw new Error( err.detail || "Failed to fetch gw status")
        }
        const data = response.json()
        return data
    }catch(err){
        console.error(err)
    }
}

export async function getLeagueTeams() {
    try{
        const response = await fetch("http://localhost:8000/league_teams")
        if(!response.ok){
            const err = await response.json()
            throw new Error( err.detail || "Failed to fetch league teams")
        }
        const data = response.json()
        //console.log("response was ok: ", data)
        return data
    }catch(err){
        console.error(err)
    }
}

export async function getSemis(){
    try{
        const response = await fetch("http://localhost:8000/semi_finals")
        if(!response.ok){
            const err = await response.json()
            throw new Error( err.detail || "Failed to fetch league teams")
        }
        const data = response.json()
        //console.log("response was ok: ", data)
        return data
    }catch(err){
        console.error(err)
    }
}

export async function getSemiResults(){
    try{
        const response = await fetch("http://localhost:8000/semi_results")
        if(!response.ok){
            const err = await response.json()
            throw new Error( err.detail || "Failed to fetch league teams")
        }
        const data = response.json()
        //console.log("response was ok: ", data)
        return data
    }catch(err){
        console.error(err)
    }
}

export async function getFinals(){
    try{
        const response = await fetch("http://localhost:8000/finals")
        if(!response.ok){
            const err = await response.json()
            throw new Error( err.detail || "Failed to fetch league teams")
        }
        const data = response.json()
        //console.log("response was ok: ", data)
        return data
    }catch(err){
        console.error(err)
    }
}

export async function getWinner(){
    try{
        const response = await fetch("http://localhost:8000/winner")
        if(!response.ok){
            const err = await response.json()
            throw new Error( err.detail || "Failed to fetch league teams")
        }
        const data = response.json()
        //console.log("response was ok: ", data)
        return data
    }catch(err){
        console.error(err)
    }
}
