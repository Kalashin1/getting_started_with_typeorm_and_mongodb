import "reflect-metadata";
import { DataSource } from "typeorm";
import { Project } from "./entity/project";
require("dotenv").config();

export const AppDataSource = new DataSource({
  type: "mongodb",
  url: process.env.DB_URL,
  synchronize: true,
  logging: false,
  entities: [Project],
  migrations: [],
  subscribers: [],
});
