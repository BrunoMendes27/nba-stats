import { Player } from '../../players/models/player.model';

export interface TableHeader {
  title: string;
  compare?: (a: Player, b: Player) => number;
  priority?: boolean | number;
}
