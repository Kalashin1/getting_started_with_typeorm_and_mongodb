import { ObjectId } from "mongodb";
import { AppDataSource } from "../data-source";
import { Project } from "../entity/project";

export class ProjectService {
  createProject({
    title,
    description,
    price,
  }: Pick<Project, "title" | "description" | "price">) {
    return this.save(
      AppDataSource.mongoManager.create(Project, {
        title,
        description,
        price,
        status: "CREATED",
      })
    );
  }

  async createMultipleProjects(
    params: Pick<Project, "title" | "description" | "price">[]
  ) {
    return Promise.all(
      await params.map((projectParam) =>
        this.save(AppDataSource.mongoManager.create(Project, projectParam))
      )
    );
  }

  getAllProjects(limit = 10) {
    return AppDataSource.mongoManager.find(Project, {
      take: limit,
    });
  }

  getProject(id: string) {
    return AppDataSource.mongoManager.findOne(Project, {
      where: {
        _id: {
          $eq: new ObjectId(id),
        },
      },
    });
  }

  save(project: Project) {
    return AppDataSource.mongoManager.save(Project, project);
  }

  delete(project: Project) {
    return AppDataSource.mongoManager.deleteOne(Project, project);
  }
}
