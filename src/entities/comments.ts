import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { User } from "./user";
import { Adverts } from "./adverts";

@Entity("comments")
export class Comments {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  text: string;
  
  @ManyToOne(() => User, (user) => user.comments)
  user: User;

  @ManyToOne(() => Adverts, (adverts) => adverts.comments)
  adverts: Adverts;
}
