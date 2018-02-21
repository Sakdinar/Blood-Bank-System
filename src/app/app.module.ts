import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DonorDetailsPage } from '../pages/donor-details/donor-details';
import { DonorListPage } from '../pages/donor-list/donor-list';
import { DonorProvider } from '../providers/donor/donor';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DonorDetailsPage,
    DonorListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DonorDetailsPage,
    DonorListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DonorProvider
  ]
})
export class AppModule {}
