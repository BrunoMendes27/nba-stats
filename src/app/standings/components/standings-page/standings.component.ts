import { Component } from '@angular/core';
import { StandingsService } from '../../services/standings.service';

@Component({
  selector: 'app-standings',
  standalone: true,
  imports: [],
  templateUrl: './standings.component.html',
  styleUrl: './standings.component.scss',
})
export class StandingsComponent {
  constructor(private readonly standingsService: StandingsService) {
    this.loadStandings();
  }

  loadStandings(): void {
    this.standingsService
      .getStandings$()
      .subscribe((item) => console.log(item));
  }
}
