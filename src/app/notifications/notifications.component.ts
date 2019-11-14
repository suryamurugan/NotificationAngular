import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  constructor() { }

  ngOnInit() {  
    //this.getAllNotifications();
  }

 /*  coffeeOrders;

  getAllNotifications = () =>
    this
      .getAllNotifications()
      .subscribe(res => (this.coffeeOrders = res)); */

  //deleteOrder = data => this.deleteCoffeeOrder(data);

  //markCompleted = data => this.updateCoffeeOrder(data);
}