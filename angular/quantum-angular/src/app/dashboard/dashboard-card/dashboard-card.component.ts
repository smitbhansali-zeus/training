import { Component, Input } from '@angular/core';
import { Jobs_List } from 'src/app/register';
import { CheckExp } from 'src/utils/expirationChecker';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.scss'],
})
export class DashboardCardComponent {
  @Input() job: Jobs_List;
  endtime: any;
  today: any;
  diff: any;
  checker(enddate: string) {
    CheckExp(enddate);
  }
}
