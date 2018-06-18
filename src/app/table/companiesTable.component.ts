import { Component, OnInit } from '@angular/core';
import { CrmService } from '../crm.service'
import Company from 'models/company';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/table';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-table',
  templateUrl: './companiesTable.component.html',
  styleUrls: ['./companiesTable.component.css']
})
export class CompaniesTableComponent implements OnInit {

  companies :Array<Company> = new Array<Company>();
  displayedColumns = ['company_id', 'name', 'adrress', 'country'];
  dataSource = new MatTableDataSource(this.companies);

  constructor(private crmService : CrmService) { }

  ngOnInit() {
    this.crmService.companiesUpdated.subscribe((data) => { 
      this.companies = data;
      console.log(data);
    });
    console.log('companies:' + this.companies);
  }
 
}
// export class companiesSource extends DataSource<any> {

//   constructor(private crmService : CrmService) { 
//     super ();
//   }
 
 
// }
