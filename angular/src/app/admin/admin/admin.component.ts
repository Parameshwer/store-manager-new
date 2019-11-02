import { Component, OnDestroy,OnInit } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
import { AdminService } from '../admin.service'
declare const App: any;


/** @title Responsive sidenav */
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: [AdminService]
})
export class AdminComponent implements OnInit { 
 public App = App;
 public stores;
 public userDetails = [];
 public storeId;
 public storeDetails;
 constructor(
   private adminService: AdminService,
   private route: ActivatedRoute,
   private router: Router
  ) {}

  ngOnInit() {
    this.getUserDetails();  	
    this.getStoreDetails(); 
    this.getStores();
  }

  getStoreDetails() {
    this.route.params.subscribe(params => {
    console.log(params);
        this.storeId = params.id;
          this.adminService.getStoreDetails(this.storeId).subscribe(response => {                
            this.storeDetails = response;
          });
    });
  }
  gotoStore(id) {
    this.router.navigate(['admin/store', id]);
  }
  getUserDetails() {
    this.adminService.getUserDetails().subscribe(response => {      
      this.userDetails.push(response);
    });
  }
  getStores() {
    this.adminService.getStores().subscribe(response => {
      console.log(response);
      this.stores = response;
    });
  }


}
