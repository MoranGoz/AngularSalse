import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FilterComponent } from './filter/filter.component';
import { HeaderComponent } from './header/header.component';
import { CompaniesTableComponent } from './table/companiesTable.component';
import { HttpClientModule } from '@angular/common/http';
// import { DemoComponent } from './demo/demo.component';
import { MatTableModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { AddCompanyComponent } from './add-company/add-company.component';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { MatMenuModule} from '@angular/material/menu';
import { EditCompanyComponent } from './edit-company/edit-company.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    HeaderComponent,
    CompaniesTableComponent,
    //DemoComponent,
    AddCompanyComponent,
    EditCompanyComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatInputModule ,
    MatTableModule,
    MatFormFieldModule,
    FormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule
    
  ],
 
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
