import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StoresService {
  
  constructor(private http: HttpClient) { }

  getStores() {
  	return this.http.get('http://localhost/store-manager-new/stores/getStores');	
  }
}
