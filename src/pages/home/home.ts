import { Component } from '@angular/core';
import { NgModel } from '@angular/forms'
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  personName: string;

  constructor(private toastController: ToastController) {

  }


  showGreetingPerson(personName: string): void {

    this.toastController.create({
      message: `Hello ${personName}!`,
      duration: 3000,
    }).present();

  }
}
