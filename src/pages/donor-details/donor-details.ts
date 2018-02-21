import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-donor-details',
  templateUrl: 'donor-details.html',
})
export class DonorDetailsPage {
  fullname: string;
  address: string;
  contactno: string;
  dateofbirth: string
  bloodgroup: string
  constructor(public viewCtrl: ViewController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DonorDetailsPage');
  }

  saveDonor() {
    let newDonor = {
      fullname: this.fullname,
      address: this.address,
      contactno: this.contactno,
      bloodgroup: this.bloodgroup,
      dateofbirth: this.dateofbirth
    }
    this.viewCtrl.dismiss(newDonor)
  }

  close() {
    this.viewCtrl.dismiss();
  }

}
