import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatIconModule} from '@angular/material';
import 'hammerjs';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import {MatStepperModule} from '@angular/material/stepper';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatBadgeModule} from '@angular/material/badge';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
     MatCheckboxModule,
     MatMenuModule,
     MatTabsModule,
     MatStepperModule,
     MatBadgeModule,
     MatIconModule
   
  ],
  exports:[
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatTabsModule,
    MatStepperModule,
    MatBadgeModule,
    MatIconModule
    
  ]
})
export class MaterialModule { }
