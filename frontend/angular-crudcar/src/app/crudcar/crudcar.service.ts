import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Crudcar } from './crudcar.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CrudcarService {

  private URL = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }

  create(description: string): Observable<Crudcar> {
    return this.httpClient.post<Crudcar>(`${this.URL}/crudcar`, { description });
  }
  
  update(crudcar: Crudcar): Observable<Crudcar[]> {
    return this.httpClient.put<Crudcar[]>(`${this.URL}/crudcar`, crudcar);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(`${this.URL}/crudcar/${id}`);
  }

  findAll(): Observable<Crudcar[]> {
    return this.httpClient.get<Crudcar[]>(`${this.URL}/crudcar`);
  }
}
