import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { User } from "./user";
import { Comments } from "./comments";

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

  @ManyToOne(() => User, (user) => user.adverts, { eager: true })
  user: User;

  @OneToMany(() => Comments, (comments) => comments.adverts, { eager: true })
  comments: Comments[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
