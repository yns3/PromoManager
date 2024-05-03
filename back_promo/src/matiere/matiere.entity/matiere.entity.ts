import { Promo } from "src/promo/promo.entity/promo.entity";
import { Utilisateur } from "src/utilisateur/utilisateur.entity/utilisateur.entity";
import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Matiere{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 45 })
    libelle:string;

    
    @ManyToMany(() => Promo, (promo) => promo.matieres)
    promos: Promo[];
}
