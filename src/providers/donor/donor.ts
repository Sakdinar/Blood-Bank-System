import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class DonorProvider {
  public donor = [];
  constructor(public storage: Storage) { 
    console.log('Hello DonorProvider Provider');
  }

  getData() {
    return this.storage.get('donor');
  }

  save(data) {
    this.storage.set('donor', data);
  }

}
