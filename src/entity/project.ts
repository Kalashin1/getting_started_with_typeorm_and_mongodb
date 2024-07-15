import {
  Entity,
  ObjectIdColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

import { ObjectId } from "mongodb";

@Entity({
  name: "projects",
})
export class Project {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  status: "CREATED" | "ACCEPTED" | "IN_PROGRESS" | "COMPLETED";

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;
}
