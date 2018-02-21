import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DonorProvider } from '../../providers/donor/donor';

@IonicPage()
@Component({
  selector: 'page-donor-list',
  templateUrl: 'donor-list.html',
})
export class DonorListPage {
  fullname;
  address;
  contactno;
  dateofbirth;
  bloodgroup;
  constructor(private donorprovider: DonorProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.fullname = this.navParams.get('donor').fullname
    this.address = this.navParams.get('donor').address
    this.contactno = this.navParams.get('donor').contactno
    this.dateofbirth = this.navParams.get('donor').dateofbirth
    this.bloodgroup = this.navParams.get('donor').bloodgroup
  }

}
