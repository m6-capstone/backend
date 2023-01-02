import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity("address")
export class Address {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({length: 12})
    cep: string;

    @Column({length: 50})
    state: string;

    @Column({length: 50})
    street: string;

    @Column({length: 50})
    city: string;

    @Column({length: 10})
    number: string;

    @Column({length: 50})
    complement: string;
}