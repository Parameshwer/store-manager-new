import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service'

@Component({
  selector: 'app-store-details',
  templateUrl: './store-details.component.html',
  styleUrls: ['./store-details.component.scss'],
  providers: [AdminService]
})
export class StoreDetailsComponent implements OnInit {
  public masterItems;
  constructor(private adminService: AdminService) { }

  ngOnInit() {
  	this.getMasterItems();
  }
  getMasterItems() {
  	this.adminService.getMasterItems().subscribe(response => {                
		this.masterItems = response;
	});
  }

}
