import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DonorProvider } from '../../providers/donor/donor';
import { DonorDetailsPage } from '../../pages/donor-details/donor-details';
import { DonorListPage } from '../../pages/donor-list/donor-list';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public donors = [];
  localData;
  constructor(public modalCtrl: ModalController,public storage: Storage, public donorProvider: DonorProvider,public navCtrl: NavController) {
    this.donorProvider.getData().then((donor) => {
      if(donor) {
        this.donors = donor;
      }
    })
  }

  addDonor() {
    let addModal = this.modalCtrl.create(DonorDetailsPage);
    addModal.onDidDismiss((donor) => {
      if(donor) {
        this.saveDonor(donor);
      }
    });
    addModal.present();
  }

  saveDonor(donor) {
    this.donors.push(donor);
    this.donorProvider.save(this.donors);
  }

  viewDonor(donor) {
    this.navCtrl.push(DonorListPage, {
      donor: donor
    })
  }

}
