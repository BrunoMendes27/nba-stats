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
      priority: 1,
    },
    {
      title: 'Weight',
      priority: 2,
    },
    {
      title: 'Position',
      priority: 3,
    },
    {
      title: 'Team',
      priority: 4,
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
