import { premList } from "@/data/lists"

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

//export type TeamLookUp = "ARS" | "MCI" |"MUN" |"AVL" |"LIV" |"CHE" |"BRE" |"EVE"| "FUL"| "BHA" |"SUN" |"NEW" |"BOU" |"CRY"| "LEE"| "NFO" |"TOT"| "WHU" | "BUR" | "WOL"

//modified object from the regular fpl player object to include name, team position as well as general info
export type Basic = {
  name: string;
  team: string;
  position: "GKP" | "DEF" | "MID" | "FWD"; // nice improvement
}

export type General = {
  element: number;
  position: number;
  is_captain: boolean;
  is_vice_captain: boolean;
  multiplier: number;
}

export type ExplainedStat = {
  name: string;
  points: number;
  value: number;
  stat: string;
};

export type Explained = [ExplainedStat[], number][]

export type Stats = {
  minutes: number;
  goals_scored: number;
  assists: number;
  clean_sheets: number;
  goals_conceded: number;
  own_goals: number;
  penalties_saved: number;
  penalties_missed: number;
  yellow_cards: number;
  red_cards: number;
  saves: number;
  bonus: number;
  bps: number;
  influence: number;
  creativity: number;
  threat: number;
  ict_index: number;
  starts: number;
  expected_goals: number;
  expected_assists: number;
  expected_goal_involvements: number;
  expected_goals_conceded: number;
  clearances_blocks_interceptions: number;
  recoveries: number;
  tackles: number;
  defensive_contribution: number;
  total_points: number;
  in_dreamteam: boolean;
}

export type Player = {
  basic: Basic;
  general: General;
  explained: Explained;
  stats: Stats;
}

export type ClubLineups = {
  ASA: Player[], 
  SSFC: Player[],
  MMUFC: Player[],
  SLS: Player[],
  DDGP: Player[],
  DTF: Player[],
}

export type Team = keyof typeof premList