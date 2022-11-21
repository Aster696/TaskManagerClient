import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatListModule} from '@angular/material/list'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatMenuModule} from '@angular/material/menu'; 
import {ScrollingModule} from '@angular/cdk/scrolling'; 
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatExpansionModule} from '@angular/material/expansion'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatBadgeModule} from '@angular/material/badge'; 
import {MatTableModule} from '@angular/material/table'; 
import {MatPaginatorModule} from '@angular/material/paginator'; 
import {MatCheckboxModule} from '@angular/material/checkbox'; 
import {MatDialogModule} from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs'; 
import {MatSelectModule} from '@angular/material/select'; 
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


const MaterialComponents = [
  MatFormFieldModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatToolbarModule,
  MatListModule,
  MatCardModule,
  MatMenuModule,
  ScrollingModule,
  MatGridListModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatBadgeModule,
  MatTableModule,
  MatPaginatorModule,
  MatCheckboxModule,
  MatDialogModule,
  MatTabsModule,
  MatSelectModule,
  MatSlideToggleModule,
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialComponents,
  ],
  exports: [
    MaterialComponents
  ]
})
export class MaterialModule { }
