import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  PlayersHttpResponse,
  PlayersRequestData,
} from '../models/player-http.model';
import { playersMock } from './mock-players';

@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  private baseUrl = 'https://www.balldontlie.io/api/v1/players';

  constructor(private readonly http: HttpClient) {
    console.log('aqui');
  }

  loadPlayers$(params: PlayersRequestData): Observable<PlayersHttpResponse> {
    // let query = new HttpParams();
    // if (params.page != null) {
    //   query = query.set('page', params.page);
    // }
    // if (params.per_page != null) {
    //   query = query.set('per_page', params.per_page);
    // }
    // if (params.search != null) {
    //   query = query.set('search', params.search);
    // }
    // console.log(query);

    // return this.http.get<PlayersHttpResponse>(this.baseUrl, { params: query });

    return of(playersMock);
  }
}
