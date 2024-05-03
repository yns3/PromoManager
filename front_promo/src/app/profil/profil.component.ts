import { Component } from '@angular/core';
import { Profil } from '../interface/profil';
import { ProfilService } from '../service/profil.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.css'
})
export class ProfilComponent {
  profilData: Profil = {
    id: 0,
    nom: '',
    prenom: '',
    roles: '',
    tel:'',
    age:0,
    email:'',
  };
  user : Profil | undefined;
  constructor(private profilService : ProfilService){}

  submit(profilData: Profil) {
    this.profilData = profilData;
  
    this.profilService.getUser(profilData).subscribe((user) => this.user=user);
    localStorage.removeItem('userRole');
    if(this.user){
      localStorage.setItem('userRole', this.user.roles);
          console.log("Connexion réussie ! valeur : "+localStorage.getItem('userRole'));
          alert("Connexion réussie ! Role : "+localStorage.getItem('userRole'));
    }
  }
}
