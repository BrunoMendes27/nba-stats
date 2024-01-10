import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { Standings } from '../models/standings.model';

@Injectable({
  providedIn: 'root',
})
export class StandingsService {
  private readonly baseUrl = 'http://api.sportradar.us/nba/trial/v8/';
  private readonly apiKey = '2yrvv73zpufu9m3rktereuxx';
  constructor(private readonly http: HttpClient) {}

  getStandings$(): Observable<Standings> {
    return this.http
      .get<Standings>(
        this.baseUrl +
          'en/seasons/2023/REG/standings.json?api_key=2yrvv73zpufu9m3rktereuxx'
      )
      .pipe(shareReplay());
  }
}
