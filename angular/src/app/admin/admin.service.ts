import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) {

  }

  getStores() {
  	return this.http.get('http://localhost/store-manager-new/stores/getStores');
  }

  getStoreDetails(storeId) {
  	return this.http.post('http://localhost/store-manager-new/stores/getStoreDetails',{id: storeId});
  }

  getUserDetails() {
  	return this.http.get('http://localhost/store-manager-new/stores/getUserDetails');
  }
  getMasterItems() {
    return this.http.get('http://localhost/store-manager-new/stores/getMasterItems');
  }
}
