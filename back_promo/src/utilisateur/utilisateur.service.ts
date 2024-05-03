import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Utilisateur } from './utilisateur.entity/utilisateur.entity';

@Injectable()
export class UtilisateurService {

    constructor(@InjectRepository(Utilisateur) private UtilisateurRepository: Repository<Utilisateur>) { }

    async getUtilisateurs(): Promise<Utilisateur[]> {
        return await this.UtilisateurRepository.find();
    }

    async getUtilisateur(_id: number): Promise<Utilisateur> {
        return await this.UtilisateurRepository.findOneBy({id:_id})
    }

     async createUtilisateur(Utilisateur: Utilisateur) {
        this.UtilisateurRepository.save(Utilisateur)
    }


    async updateUtilisateur(Utilisateur: Utilisateur) {
        this.UtilisateurRepository.save(Utilisateur)
    }

    async deleteUtilisateur(Utilisateur: Utilisateur) {
        this.UtilisateurRepository.delete(Utilisateur);
    }

    async findOne(username: string) {
        return await this.UtilisateurRepository.findOneBy({email:username});
    }
}
