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
      this.getCompanies();

    });
  }
}
//   addDog(newDog: Dog) {
//     this.http.post<Dog>('/api/dogs', { dog: newDog }).subscribe((dog)=>{
//       this.dogs.push(dog);
//       this.dogsSubject.next(this.dogs);
      
//     });
//  }
// updateDog(id: number, dog: Dog) {
//   this.http.put<Array<Dog>>(`/api/dogs/${id}`, { dog: dog }).subscribe((dogs)=>{
//   //var existingDogIndex = this.dogsUpdated.subscribe((dogs)=>{ 
//     this.dogsSubject.next(dogs);

//   });
//   //DOGS[existingDogIndex] = dog;
// }
// removeDog(id) {
//   const objservable = this.http.delete<Dog[]>('/api/dogs/' + id);
//   objservable.subscribe((dogs)=>{
//       this.dogs = dogs;
//       this.dogsSubject.next(this.dogs);

//   });
// }

