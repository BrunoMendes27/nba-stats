import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../services/players.service';
import { PlayersRequestData } from '../models/player-http.model';
import { NzTableModule } from 'ng-zorro-antd/table';
import { Player } from '../models/player.model';
import { TableHeader } from '../../shared/models/table.model';
import { CommonModule } from '@angular/common';
import { NoDataPipe } from '../../shared/pipes/no-data.pipe';

@Component({
  selector: 'app-players-page',
  standalone: true,
  imports: [NzTableModule, CommonModule, NoDataPipe],
  templateUrl: './players-page.component.html',
  styleUrl: './players-page.component.scss',
})
export class PlayersPageComponent implements OnInit {
  private readonly defaultRequestData: PlayersRequestData = {
    page: 1,
    per_page: 20,
  };
  readonly listOfColumn: TableHeader[] = [
    {
      title: 'Name',
      compare: (a: Player, b: Player) =>
        a.first_name.localeCompare(b.first_name),
      priority: 1,
    },
    {
      title: 'Weight',
      priority: 3,
    },
    {
      title: 'Position',
      compare: (a: Player, b: Player) => a.position.localeCompare(b.position),
      priority: 4,
    },
    {
      title: 'Team',
      compare: (a: Player, b: Player) => a.team.name.localeCompare(b.team.name),
      priority: 5,
    },
  ];

  data: Player[] = [];

  constructor(private readonly playersHttpService: PlayersService) {}

  ngOnInit(): void {
    this.playersHttpService
      .loadPlayers$(this.defaultRequestData)
      .subscribe((item) => (this.data = item.data));
  }
}
