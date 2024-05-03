import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Salle } from './salle.entity/salle.entity';

@Injectable()
export class SalleService {

    constructor(@InjectRepository(Salle) private SalleRepository: Repository<Salle>) { }

    async getSalles(): Promise<Salle[]> {
        return await this.SalleRepository.find();
    }

    async getSalle(idSalle : number): Promise<Salle> {
        return await this.SalleRepository.findOneBy({id:idSalle})
    }


     async createSalle(Salle: Salle) {
        this.SalleRepository.save(Salle)
    }


    async updateSalle(Salle: Salle) {
        this.SalleRepository.save(Salle)
    }

    async deleteSalle(Salle: Salle) {
        this.SalleRepository.delete(Salle);
    }
}
