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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule,MatMenuModule } from  '@angular/material';
import {  CUSTOM_ELEMENTS_SCHEMA }  from '@angular/core';






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
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireMessagingModule,
   ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
   BrowserAnimationsModule,
  //  ServiceWorkerModule.register('/combined-worker.js', { enabled: environment.production })

  ],
  providers: [MessagingService,AsyncPipe,NotificationsService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
