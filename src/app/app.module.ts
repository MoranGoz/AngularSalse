import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FilterComponent } from './filter/filter.component';
import { HeaderComponent } from './header/header.component';
import { TableComponent } from './table/table.component';
import { ServiceComponent } from './service/service.component';
@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    HeaderComponent,
    TableComponent,
    ServiceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
