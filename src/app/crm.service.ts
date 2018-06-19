import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import Company from 'models/company';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrmService {
  private serviceUrl :'http://localhost:3000/';
  companies : Array<Company> =  new Array<Company>();
  public companiesUpdated: Observable<Company[]>;
  public companiesSubject: Subject<Company[]>;

  constructor(private http : HttpClient) {
    this.companiesSubject = new Subject<Company[]>();
    this.companiesUpdated = this.companiesSubject.asObservable();
    this.getCompanies();
   }

  getCompanies(){
    const observable = this.http.get<Company[]>('/companiesApi/');
    observable.subscribe((data)=>{
      this.companies = data;
      this.companiesSubject.next(data);
    })
  }

  addCompany(newCompany:Company){
    this.http.post<Company>('/companiesApi/add', newCompany).subscribe((data)=>{
      console.log('new'+ newCompany);
      console.log('data'+ data);
      this.companies.push(data);
      this.companiesSubject.next(this.companies);

    });
  }

  editCompany(company:Company,id) {
    this.http.put<Company>(`/companiesApi/update/`+ id, {company: company}).subscribe((company)=>{
      console.log('Editing inside service '+id);
      let index = this.companies.findIndex(id);
      console.log(index);
      this.companies[index]=company;
      console.log('New values' + this.companies[index])
      this.companiesSubject.next(this.companies);
    });
}

  removeCompany(id) {
    this.http.delete<Company>(`/companiesApi/delete/`+ id).subscribe((company)=>{
      console.log('deleting inside service '+id);
      let index = this.companies.findIndex(id);
      console.log(index);
      this.companies.splice(index,1);
      console.log(this.companies[index])
      this.companiesSubject.next(this.companies);
  });
  }
}


//   //DOGS[existingDogIndex] = dog;
// }
// removeDog(id) {
//   const objservable = this.http.delete<Dog[]>('/api/dogs/' + id);
//   objservable.subscribe((dogs)=>{
//       this.dogs = dogs;
//       this.dogsSubject.next(this.dogs);

//   });
// }