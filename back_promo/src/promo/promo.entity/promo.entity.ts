import { Matiere } from 'src/matiere/matiere.entity/matiere.entity';
import { Utilisateur } from 'src/utilisateur/utilisateur.entity/utilisateur.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable } from 'typeorm';

@Entity()
export class Promo{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    numero:number;

    @OneToMany(() => Utilisateur, (utilisateur) => utilisateur.promo)
    utilisateurs: Utilisateur[]
    @ManyToMany(() => Matiere, (matiere) => matiere.promos, {cascade: true})
    @JoinTable()
    matieres: Matiere[];
}
