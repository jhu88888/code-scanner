import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScanPageComponent } from './pages/scan-page/scan-page.component';
import { SubmitPageComponent } from './pages/submit-page/submit-page.component';
import { ScannerComponent } from './components/scanner/scanner.component';
import { MaterialsModule } from './materials/materials.module';
import { BarecodeScannerLivestreamModule } from 'ngx-barcode-scanner';
import { ReactiveFormsModule } from '@angular/forms';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ScanPageComponent,
    SubmitPageComponent,
    ScannerComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialsModule,
    BrowserAnimationsModule,
    BarecodeScannerLivestreamModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
