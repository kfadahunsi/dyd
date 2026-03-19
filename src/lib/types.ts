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