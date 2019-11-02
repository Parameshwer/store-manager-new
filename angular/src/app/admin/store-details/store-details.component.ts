import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service'
import { ActivatedRoute,Router} from '@angular/router';
import { FormBuilder,Validators,FormArray } from '@angular/forms';

@Component({
  selector: 'app-store-details',
  templateUrl: './store-details.component.html',
  styleUrls: ['./store-details.component.scss'],
  providers: [AdminService]
})
export class StoreDetailsComponent implements OnInit {
  public masterItems;
  public storeId;
  public checkStockflg: boolean = true;
  public sendStockflg: boolean = false;
  public checkSalesflg: boolean = false;
  public billingflg: boolean = false;
  public columnDefs;
  public rowData;
  
  public allStock:any = [];

  constructor(
  private adminService: AdminService,
  private fb: FormBuilder,
  private route: ActivatedRoute,
  private router: Router
  
  ) {  
    this.getMasterItems();
    this.route.params.subscribe(params => {
      this.storeId = params.id; 
      this.checkStock();
    });
  }

  ngOnInit() {
    
  }
  sendStockForm = this.fb.group({
    itemTypes: ['', Validators.required],
    itemVariants: ['', Validators.required],
    itemBrand: ['', Validators.required],
    noOfItems: ['', Validators.required],
    actualAmount: ['', Validators.required],
    sellingAmount: ['', Validators.required]
  });
 
   billingForm = this.fb.group({
    billingIds: ['', Validators.required]
  });
  getMasterItems() {
  	this.adminService.getMasterItems().subscribe(response => {                
  		this.masterItems = response;
  	});
  }
  resetForm() {
    this.sendStockForm.reset();
  }
  onSubmit() {
    if(this.sendStockForm.value) {
      this.sendStockForm.value.storeId = this.storeId;
    }
    
    this.adminService.saveStock(this.sendStockForm.value).subscribe(response => {
      this.sendStockForm.reset();
    });
  }

  checkStock() {
    this.resetAllFlags();
    this.checkStockflg = true;
    this.adminService.getStock(this.storeId).subscribe(response => {
      this.allStock = response;
    });
  }
  sendStock() {
    this.resetAllFlags();
    this.sendStockflg = true;
  }
  checkSales() {
    this.resetAllFlags();
    this.checkSalesflg = true;
  }
  resetAllFlags() {
    this.checkStockflg = false;
    this.sendStockflg = false;
    this.checkSalesflg = false;
    this.billingflg = false;
  }
  billing() {
    this.resetAllFlags();
    this.billingflg = true;
  }
  resetBillingForm() {
    this.billingForm.reset();
  }

}
