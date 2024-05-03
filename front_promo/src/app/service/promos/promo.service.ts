import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Promo} from '../../interface/promo';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class PromoService {

  constructor(private http: HttpClient, private router: Router) { }

  getPromos(): Observable<Promo[]>{
    return this.http.get<Promo[]>("http://localhost:3000/promo", {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }

  deletePromo(promo: Promo): any {
    console.log("promo >> " + promo.id);
     this.http.delete('http://localhost:3000/promo/' + promo.id).subscribe(v => {
      console.log(v);
      
     });
    ;
  }
  
}
