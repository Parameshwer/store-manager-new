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
  public invalidItemErrorMsg:any;
  public allStock:any = [];
  public allSales:any = [];
  public billingItems:Array<any> = [];
  public totalPrice:any;
  public discountPrice = 0;
  public grandTotal = 0;

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
  onBillingFormSubmit() {
    console.log(this.billingForm.value);
    if(this.billingForm.value) {
      this.billingForm.value.storeId = this.storeId;
    }
    
    this.adminService.getItemDetails(this.billingForm.value).subscribe(response => {
      //this.billingForm.reset();
      console.log(response);
      this.invalidItemErrorMsg = "";
      this.billingItems = [];
      this.totalPrice = 0;
      if(response && response['status']) { 
          this.billingItems = response['data'];
          this.totalPrice = response['totalPrice'];
          this.grandTotal = this.totalPrice;
      } else {
        this.invalidItemErrorMsg = response['message'];
      }
    });
  }

  onKey(event: any) {
    this.discountPrice = 0;  
    this.grandTotal = 0;
    if(event['target']['value'] > 0) {
      this.discountPrice = (event['target']['value']/100)*this.totalPrice;
      this.grandTotal = this.totalPrice - this.discountPrice;
    } else {
      this.grandTotal = this.totalPrice - this.discountPrice;
    }
  }

  printDiv() {
      let divContents = document.getElementById("billing-items").innerHTML; 
      let a = window.open('', '', 'height=500, width=500'); 
      a.document.write('<html>'); 
      a.document.write('<body>'); 
      a.document.write(divContents); 
      a.document.write('</body></html>'); 
      a.document.close(); 
      a.print(); 
  }
  saveBill() {
      let orderDetails = {};
          orderDetails['storeId'] = this.storeId;
          orderDetails['billingIds'] = this.billingForm['value'][''];          
          orderDetails['totalPrice'] = this.totalPrice;
          orderDetails['discountPrice'] = this.discountPrice;
          orderDetails['grandTotal'] = this.grandTotal;

      this.adminService.saveBill(orderDetails).subscribe(response => {
        this.sendStockForm.reset();
      });
  }
  checkSales() {
    this.resetAllFlags();
    this.checkSalesflg = true;
    this.allSales = [];
    this.adminService.getSales(this.storeId).subscribe(response => {
      if(response['status']) {
        console.log(response['data']);  
        this.allSales = response['data'];
        console.log(this.allSales);
      }
    });
  }

}
