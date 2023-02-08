import { Component } from '@angular/core';
import { Jobs_List } from '../register';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  jobs: Jobs_List[] = [];
  constructor() {
    this.jobs = [
      {
        title: 'Walk In for Designer Job Role',
        start_date: '10-Jul-2021',
        end_date: '11-Jul-2021',
        location: 'Mumbai',
        job_roles: ['Instructional Designer'],
        student_branch: 'all',
      },
      {
        title: 'Walk In for Multiple Job Roles',
        start_date: '03-Jul-2021',
        end_date: '04-Jul-2021',
        location: 'Mumbai',
        job_roles: [
          'Instructional Designer',
          'Software Engineer',
          'Software Quality Engineer',
        ],
        student_branch: 'MCA',
      },
      {
        title: 'Walk In for Design and Development Job Role',
        start_date: '10-Jul-2021',
        end_date: '11-Jul-2021',
        location: 'Mumbai',
        job_roles: ['Instructional Designer', 'Software Engineer'],
        student_branch: 'all',
      },
    ];
  }
}
