import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PushadminComponent } from './pushadmin/pushadmin.component';
import { NotificationListComponent } from './notifications/notification-list/notification-list.component';


const routes: Routes = [
{path: 'push', component: PushadminComponent},
{path: '',component: NotificationListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponent = [PushadminComponent,NotificationListComponent];
