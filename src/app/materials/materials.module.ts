import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

const modules = [
  MatButtonModule, 
  MatCheckboxModule,
  MatInputModule,
  MatCardModule,
  MatToolbarModule
]

@NgModule({
  declarations: [],
  imports: modules,
  exports: modules,
})
export class MaterialsModule { }
