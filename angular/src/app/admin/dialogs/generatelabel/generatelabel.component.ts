import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generatelabel',
  templateUrl: './generatelabel.component.html',
  styleUrls: ['./generatelabel.component.scss']
})
export class GeneratelabelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


    printDiv() {
      var mywindow = window.open('', 'new div', 'height=400,width=600');
      mywindow.document.write('<html><head><title></title>');
      mywindow.document.write('<link rel="stylesheet" href="public/midday_receipt.css" type="text/css" />');
      mywindow.document.write('</head><body >');
      mywindow.document.write(document.getElementById("bill-print").innerHTML);
      mywindow.document.write('</body></html>');
      mywindow.document.close();
      mywindow.focus();
      setTimeout(function(){mywindow.print();},1000);
      //mywindow.close();

      return true;
}

}
