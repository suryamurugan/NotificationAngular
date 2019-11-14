import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'src/app/shared/notifications.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.css']
})
export class NotificationListComponent implements OnInit {

  list: Notification[];
  constructor(private service:NotificationsService,    private firestore: AngularFirestore,
    ) { }

  ngOnInit() {
    this.service.getNotifications().subscribe(actionArray=>{
      this.list = actionArray.map(item=>{
        return {
          title: item.payload.doc.id,
          ...item.payload.doc.data()
        }as Notification;
      });

    });
  }

}
