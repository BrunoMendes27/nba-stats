export type Standings = {
  conferences: Conferences[];
};

export type Conferences = {
  id: string;
  name: string;
  alias: string;
  teams: Team[];
};

export type Team = {
  id: number;
  name: string;
  market: string;
  wins: number;
  losses: number;
  win_pct: number;
  points_for: number;
  points_against: number;
  point_diff: number;
  sr_id: string;
  reference: string;
  games_behind: GamesBehind;
  streak: Streak;
};

export type GamesBehind = {
  league: number;
  conference: number;
  division: number;
};

export type Streak = {
  kind: string;
  length: number;
};
