import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  public userDetails = [];
  constructor(private http: HttpClient) {

  }

  getStores(userDetails) {
  	return this.http.post('http://localhost/store-manager-new/stores/getStores', userDetails);
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
  saveStock(formValues) {
    return this.http.post('http://localhost/store-manager-new/stores/saveStock', formValues);
  }
  getStock(storeId) {
    return this.http.post('http://localhost/store-manager-new/stores/getStock', {storeId: storeId});
  }
  getItemDetails(formValues) {
    return this.http.post('http://localhost/store-manager-new/stores/getItemDetails', formValues);
  }
  saveBill(formValues) {
    return this.http.post('http://localhost/store-manager-new/stores/saveBill', formValues);
  }
  getSales(storeId) {
    return this.http.post('http://localhost/store-manager-new/stores/getSales', {storeId: storeId});
  }
}
