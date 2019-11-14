import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { NotificationsService } from "./shared/notifications.service";
import { AngularFireModule} from "@angular/fire";
import {AngularFirestoreModule, AngularFirestore} from "@angular/fire/firestore";
//import {AppComponent} from './app.component';
import { environment } from 'src/environments/environment';
import { NotificationComponent } from './notifications/notification/notification.component';
import { NotificationListComponent } from './notifications/notification-list/notification-list.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AngularFireMessaging, AngularFireMessagingModule } from '@angular/fire/messaging';

import { AsyncPipe } from '../../node_modules/@angular/common';
import { MessagingService } from './shared/messaging.service';



@NgModule({
  declarations: [
    AppComponent,
    NotificationsComponent,
    NotificationComponent,
    NotificationListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireMessagingModule,
   ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  //  ServiceWorkerModule.register('/combined-worker.js', { enabled: environment.production })

  ],
  providers: [MessagingService,AsyncPipe,NotificationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
