import { Component, OnInit, Input, EventEmitter, Output, OnChanges } from '@angular/core';
import Company from 'models/company';
import { CrmService } from '../crm.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {
  //companyObj = new Company ();
   company_id: number;
   name: string;
   adrress: string;
   country: string;

  constructor(private crmService : CrmService) { }

  ngOnInit() {
  }
  submit() {
    console.log ('submit');
    let newCompany = new Company (this.company_id, this.name, this.adrress,this.country);
    console.log ( 'add-company'+ newCompany);
    this.crmService.addCompany(newCompany);
  }
}
