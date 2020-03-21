import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({
    name: 'products'
})
export class City{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 50})
    name: string;

    @Column('integer')
    code: number;

    @Column('integer')
    amount: number;
}