export type Player = {
  id: number;
  first_name: string;
  last_name: string;
  height_feet: number | null;
  height_inches: number | null;
  position: string;
  weight_pounds: number | null;
  team: Team;
};

export type Team = {
  abbreviation: string;
  city: string;
  conference: string;
  division: string;
  full_name: string;
  id: number;
  name: string;
};
