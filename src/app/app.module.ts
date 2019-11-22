import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingComponent } from './app-routing.module';
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

import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule,MatMenuModule,MatCardModule,MatExpansionModule,MatTabsModule } from  '@angular/material';
import {  CUSTOM_ELEMENTS_SCHEMA }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


/* 
const appRoutes: Routes = [
  { path: 'crisis-center', component: CrisisListComponent },
  { path: 'hero/:id',      component: HeroDetailComponent },
  {
    path: 'heroes',
    component: HeroListComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
]; */



@NgModule({
  declarations: [
    AppComponent,
    NotificationsComponent,
    NotificationComponent,
    NotificationListComponent,
    routingComponent,
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
    MatCardModule,
    MatExpansionModule,
    MatTabsModule,

 /*    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
     */
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

