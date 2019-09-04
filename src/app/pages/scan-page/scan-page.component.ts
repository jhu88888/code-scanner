import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { BarecodeScannerLivestreamComponent } from 'ngx-barcode-scanner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scan-page',
  templateUrl: './scan-page.component.html',
  styleUrls: ['./scan-page.component.scss']
})
export class ScanPageComponent implements OnInit {

  @ViewChild(BarecodeScannerLivestreamComponent, {static: false}) barecodeScanner: BarecodeScannerLivestreamComponent;

  barcodeValue;

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.barecodeScanner.start();
  }

  onValueChanges(result){
    this.barcodeValue = result.codeResult.code;
    if (this.barcodeValue) {}
  }

  goSubmit() {
    this._router.navigate(['submit', {desk_id: this.barcodeValue}])
  }
}
