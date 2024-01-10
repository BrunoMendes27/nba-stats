import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  PlayersHttpResponse,
  PlayersQueryParams,
} from '../models/player-http.model';

@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  private baseUrl = 'https://www.balldontlie.io/api/v1/players';

  constructor(private readonly http: HttpClient) {}

  loadPlayers$(params: PlayersQueryParams): Observable<PlayersHttpResponse> {
    let query = new HttpParams();
    if (params.page != null) {
      query.set('page', params.page);
    }
    if (params.per_page != null) {
      query.set('per_page', params.per_page);
    }
    if (params.search != null) {
      query.set('search', params.search);
    }

    return this.http.get<PlayersHttpResponse>(this.baseUrl, query);
  }
}
