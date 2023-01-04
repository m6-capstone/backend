import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  OneToOne
} from "typeorm";
import { Exclude } from "class-transformer";
import { Adverts } from "./adverts";
import { Comments } from './comments'
import { Address } from "./address";

@Entity("user")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  cpf: string;

  @Column()
  cellphone: string;

  @Column()
  birthdate: string;
  
  @Column()
  description: string;

  @Column()
  isSeller: boolean;

  @Column()
  @Exclude()
  password: string;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Adverts, (adverts) => adverts.user)
  adverts: Adverts[];

  @OneToMany(() => Comments, (comments) => comments.user)
  comments: Comments[];

  @OneToOne((type) => Address,{
    eager: true
  })
  address: Address;
}