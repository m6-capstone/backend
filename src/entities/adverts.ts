import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from "typeorm";
import { User } from "./user";

@Entity("adverts")
export class Adverts {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  advertsType: string;

  @Column()
  title: string;

  @Column()
  year: string;

  @Column()
  mileage: string;

  @Column("decimal", { precision: 8, scale: 2 })
  price: number;

  @Column()
  description: string;

  @Column()
  vehicleType: string;

  @Column()
  coverImage: string;

  @Column("text", { array: true })
  galleryImages: string[];

  @Column({ default: true })
  isActive: boolean;

  @Column({ default: true })
  isPublished: boolean;

  @ManyToOne(() => User, (user) => user.adverts)
  user: User;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
