import { Player } from './player.model';

export type PlayersHttpResponse = {
  data: PlayersHttpResponseBody;
  meta: PlayersHttpResponseRequestData;
};

export type PlayersHttpResponseRequestData = {
  total_pages: number;
  current_page: number;
  next_page: number;
  per_page: number;
  total_count: number;
};

export type PlayersRequestData = {
  page: number;
  per_page: number;
  search?: number;
};

export type PlayersHttpResponseBody = Player[];
