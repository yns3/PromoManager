import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Matiere } from './matiere.entity/matiere.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MatiereService {
    constructor(@InjectRepository(Matiere) private matiereRepository: Repository<Matiere>) { }

    async getMatieres(): Promise<Matiere[]> {
        return await this.matiereRepository.find();
    }

    async getMatiere(_id: number): Promise<Matiere> {
        return await this.matiereRepository.findOneBy({id:_id})
    }

     async createMatiere(Matiere: Matiere) {
        this.matiereRepository.save(Matiere)
    }


    async updateMatiere(Matiere: Matiere) {
        this.matiereRepository.save(Matiere)
    }

    async deleteMatiere(Matiere: Matiere) {
        this.matiereRepository.delete(Matiere);
    }
}
