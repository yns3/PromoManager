import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profil } from '../interface/profil';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  constructor(private http: HttpClient) { }

  getUser(profil : Profil): Observable<Profil> {
    return this.http.post<any>('http://localhost:3000/auth/login',
      profil
    );
  }
}
