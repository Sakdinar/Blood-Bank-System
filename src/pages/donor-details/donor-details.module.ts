import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DonorDetailsPage } from './donor-details';

@NgModule({
  declarations: [
    DonorDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(DonorDetailsPage),
  ],
})
export class DonorDetailsPageModule {}
