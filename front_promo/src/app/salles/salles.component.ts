import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Salle } from '../interface/salle';
import { SallesService } from '../service/salles/salles.service';

@Component({
  selector: 'app-salles',
  templateUrl: './salles.component.html',
  styleUrl: './salles.component.css'
})
export class SallesComponent implements OnInit {
  
  salles: Salle[];

  constructor(private salleService: SallesService) {}

  ngOnInit(): void {
      this.salleService.getSalles()
        .subscribe(value => {
          this.salles = value
          console.log(this.salles);
          
        })
  }

}
