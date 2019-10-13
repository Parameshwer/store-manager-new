import { Component, OnInit } from '@angular/core';
import { StoresService } from '../stores.service';

@Component({
  selector: 'app-stores-list',
  templateUrl: './stores-list.component.html',
  styleUrls: ['./stores-list.component.scss']
})
export class StoresListComponent implements OnInit {

  constructor(private storesService: StoresService) { }
  public storesData:any;
  ngOnInit() {
  	this.getStores();
  	console.log(15);
  }

  getStores(): void {    
    this.storesService.getStores().subscribe((data)=>{
    	this.storesData = data;
    })  

  }

}
