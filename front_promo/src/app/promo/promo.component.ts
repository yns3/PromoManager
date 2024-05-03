import { Component } from '@angular/core';
import { PromoService } from '../service/promos/promo.service';
import { Promo } from '../interface/promo';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrl: './promo.component.css'
})
export class PromoComponent {
  promos: Promo[];

  constructor(private promoService: PromoService){}
  
  ngOnInit(){
    this.getPromos();
  }

  getPromos(){
    let promoData: Observable<Promo[]>;
    promoData=this.promoService.getPromos();
    promoData.subscribe((res)=> {
      this.promos=res;
    });
  }

  deletePromo(promo: Promo): any {
    console.log(promo);
    this.promoService.deletePromo(promo)
  }
}
