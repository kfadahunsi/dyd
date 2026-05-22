/*To get your team id, go to the fpl draft website, 
scroll to the admin section, click on  team details. 
when the page loads, the number will be in you url. 
when you fetch your team data. you will then be able 
to see your league ID as well in the response*/


//const teamID = "224216"
//const leagueID = "43953"
const API_URL = import.meta.env.VITE_API_BASE_URL

export async function getTable(){  
    const res = await fetch(`${API_URL}/league_table`)
    if(!res.ok){
        const err = await res.json()
        throw new Error(err.detail || "Failed to fetch table data")
    }
    const data = await res.json()
    return data
}

export async function getCupTable() {
        const response = await fetch(`${API_URL}/cup_table`)
        if(!response.ok){
            const err = await response.json()
            throw new Error(err.detal || "Failed to fetch cup data")
        }
        const data =  await response.json()
        return data
}

export async function getFixtures() {
        const response = await fetch(`${API_URL}/fixtures`)
        if(!response.ok){
            const err = await response.json()
            throw new Error(err.detail || "Failed to fetch fixture data")
        }
        const data =  await response.json()
        return data

}

export async function getGwStatus() {
        const response = await fetch(`${API_URL}/gw_status`)
        if(!response.ok){
            const err = await response.json()
            throw new Error( err.detail || "Failed to fetch gw status")
        }
        const data = await response.json()
        return data
}

export async function getHomeStats() {
        const response = await fetch(`${API_URL}/home_stats`)
        if(!response.ok){
            const err = await response.json()
            throw new Error( err.detail || "Failed to fetch gw status")
        }
        const data = await response.json()
        return data
}

export async function getLeagueTeams() {
        const response = await fetch(`${API_URL}/league_teams`)
        if(!response.ok){
            const err = await response.json()
            throw new Error( err.detail || "Failed to fetch league teams")
        }
        const data = await response.json()

        return data
}

export async function getSemis(){
    const response = await fetch(`${API_URL}/semi_finals`)
    if(!response.ok){
        const err = await response.json()
        throw new Error( err.detail || "Failed to fetch league teams")
    }
    const data = await response.json()
    return data

}

export async function getSemiResults(){
    const response = await fetch(`${API_URL}/semi_results`)
    if(!response.ok){
        const err = await response.json()
        throw new Error( err.detail || "Failed to fetch league teams")
    }
    const data = await response.json()
    return data
}

export async function getFinals(){
    const response = await fetch(`${API_URL}/finals`)
    if(!response.ok){
        const err = await response.json()
        throw new Error( err.detail || "Failed to fetch league teams")
    }
    const data = await response.json()
    return data
}

export async function getWinner(){
    const response = await fetch(`${API_URL}/winner`)
    if(!response.ok){
        const err = await response.json()
        throw new Error( err.detail || "Failed to fetch league teams")
    }
    const data = await response.json()
    return data
}
