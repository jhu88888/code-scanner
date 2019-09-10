import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ScanPageComponent } from './pages/scan-page/scan-page.component';
import { SubmitPageComponent } from './pages/submit-page/submit-page.component';
import { ScannerComponent } from './components/scanner/scanner.component';
import { MaterialsModule } from './materials/materials.module';
import { BarecodeScannerLivestreamModule } from 'ngx-barcode-scanner';
import { ReactiveFormsModule } from '@angular/forms';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ScanPageComponent,
    SubmitPageComponent,
    ScannerComponent,
    LandingPageComponent,
    ToolBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialsModule,
    BrowserAnimationsModule,
    BarecodeScannerLivestreamModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
