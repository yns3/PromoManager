import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Promo } from './promo.entity/promo.entity';
import { Repository } from 'typeorm';
import { MatiereService } from 'src/matiere/matiere.service';
import { Matiere } from 'src/matiere/matiere.entity/matiere.entity';

@Injectable()
export class PromoService {
    constructor(@InjectRepository(Promo) private PromoRepository: Repository<Promo>,private matiereservice:MatiereService) { }

    async getPromos(): Promise<Promo[]> {
        return await this.PromoRepository.find();
    }

    async getPromo(_id: number): Promise<Promo> {
        return await this.PromoRepository.findOneBy({id:_id})
    }

     async createPromo(Promo: Promo) {
        this.PromoRepository.save(Promo)
    }


    async updatePromo(Promo: Promo) {
        this.PromoRepository.save(Promo)
    }

    async deletePromo(Promo: Promo) {
        this.PromoRepository.delete(Promo);
    }

    async createPromoMatieresRelation(promoId: number, matiereIds: number[]): Promise<Promo> {
        let promo: Promo;
        let matiere: Matiere;
        let matieres: Matiere[] = [];
        //on récupère la promo en fonction de l'ID en paramètre
        promo = await this.getPromo(promoId);
        //on récupère les matieres en fonction des ID en paramètres et on les ajoute dans la liste
        for (let i = 0; i < matiereIds.length; i++) {
            matiere = await this.matiereservice.getMatiere(
            matiereIds[i],
            );
            matieres.push(matiere);
        }
        //on modifie les matieres de la promo récupérée avec le tableau de matières
        promo.matieres = matieres;
        return await this.PromoRepository.save(promo);
    }
}
