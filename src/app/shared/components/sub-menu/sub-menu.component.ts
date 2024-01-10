import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@Component({
  selector: 'app-sub-menu',
  standalone: true,
  imports: [NzLayoutModule, NzMenuModule, NzIconModule, RouterModule],
  templateUrl: './sub-menu.component.html',
  styleUrl: './sub-menu.component.scss',
})
export class SubMenuComponent {}
