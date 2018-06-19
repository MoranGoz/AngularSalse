import { Component, OnInit, Input, EventEmitter, Output, OnChanges } from '@angular/core';
import Company from 'models/company';
import { CrmService } from '../crm.service';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.css']
})
export class EditCompanyComponent implements OnInit {
  //companyObj = new Company ();
   company_id: number;
   name: string;
   adrress: string;
   country: string;

  constructor(private crmService : CrmService) { }

  ngOnInit() {
  }
  edit() {
    console.log ('edit');
    let newCompany = new Company (this.company_id, this.name, this.adrress,this.country);
    console.log ( 'add-company'+ newCompany);
    this.crmService.editCompany(newCompany,this.company_id);
  }
}