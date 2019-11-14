import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { AngularFirestore } from "@angular/fire/firestore";
//import {firebase} from '../environments/firebase';


@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  formData :Notification;

  constructor(private Firestore:AngularFirestore) {

   }

   getNotifications(){

    return this.Firestore.collection('notifications').snapshotChanges();

   }


  
  /* 

   //Firestore CRUD actions example
   createCoffeeOrder(data) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("coffeeOrders")
        .add(data)
        .then(res => {}, err => reject(err));
    });
  } 

  updateCoffeeOrder(data) {
    return this.firestore
      .collection("coffeeOrders")
      .doc(data.payload.doc.id)
      .set({ completed: true }, { merge: true });
  }

  getCoffeeOrders() {
    return this.firestore.collection("coffeeOrders").snapshotChanges();
  }

  deleteCoffeeOrder(data) {
    return this.firestore
      .collection("coffeeOrders")
      .doc(data.payload.doc.id)
      .delete();
  }*/
}