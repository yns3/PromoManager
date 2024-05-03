import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Salle } from '../../interface/salle';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SallesService {

  constructor(private http: HttpClient) {}

  getSalles(): Observable<any>{
    return this.http.get<any>("http://localhost:3000/salle", {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }
}
