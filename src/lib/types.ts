export type TeamList = HistTeam []

export type HistTeam = {
    name: string;
    manager: string;
    year: string;
    points: number;
    img: string;
}

export type TableObj= {
    "Super Slimey Fütbol": ClubTableDetails, 
    "Amassing Silvaware": ClubTableDetails, 
    "Maatsen Margiela Utd": ClubTableDetails, 
    "Saint Laurent Slot": ClubTableDetails, 
    "Darwin’s Theory": ClubTableDetails, 
    "Duck Duck Guus Poyet": ClubTableDetails, 

}

export type ClubTableDetails = {
    event_total: number,
    last_rank: number,
    league_entry: number,  
    rank: number,
    rank_sort: number,
    total: number,
}


export type CupStats= {
    draws: number,
    league_points: number,
    losses: number,
    played: number,
    points_against: number,
    points_for: number,
    wins: number,
}

export type CupTable = {
    ASA: CupStats,
    SSFC: CupStats,
    DTF: CupStats,
    SLS: CupStats,
    MMUFC: CupStats,
    DDGP: CupStats,
}

export type Fixture = {
    home: string,
    away: string,
    home_score: number | null,
    away_score: number | null,
    week: number
}

export type FixtureList = Fixture []

export type GwStatus = {
  current_event : number,
  current_event_finished : boolean,
  next_event : number,
  processing_status : string,
  trades_time_for_approval: boolean,
  waivers_processed : boolean
}

export type HomeStats = {
    event_points: number,
    favourite_team: number,
    id: number,
    league_set: [number],
    name: string,
    overall_points: number,
    player_first_name: string,
    player_last_name: string,
    region_code_long: string,
    region_code_short: string,
    region_name: string,
    started_event: number,
    transactions_event: number,
    transactions_total : number
}

export type HomeStatsList = HomeStats[]