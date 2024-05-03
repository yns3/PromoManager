import { Promo } from 'src/promo/promo.entity/promo.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Utilisateur{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 45 })
    nom:string;

    @Column({ length: 45 })
    prenom:string;

    @Column({ length: 45 })
    roles:string;

    @Column({ length: 45 })
    tel:string;

    @Column({ length: 45 })
    mdp:string;

    @Column({ default: 1 })
    age:number;

    @Column({ length: 45 })
    email:string;
    @ManyToOne(() => Promo, (promo) => promo.utilisateurs)
    promo: Promo

}

