import { Team } from '../../standings/models/standings.model';

export type Player = {
  id: number;
  first_name: string;
  last_name: string;
  height_feet?: number;
  height_inches?: number;
  position: string;
  weight_pounds?: number;
  team: Team;
};
