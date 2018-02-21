import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DonorListPage } from './donor-list';

@NgModule({
  declarations: [
    DonorListPage,
  ],
  imports: [
    IonicPageModule.forChild(DonorListPage),
  ],
})
export class DonorListPageModule {}
