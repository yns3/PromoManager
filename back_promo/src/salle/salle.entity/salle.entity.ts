import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Salle{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 45 })
    contenance:string;

    @Column({ length: 45 })
    etage:string;
}
