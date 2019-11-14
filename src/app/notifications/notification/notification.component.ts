import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'src/app/shared/notifications.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  constructor(private service: NotificationsService) { }

  ngOnInit() {
  }

}
