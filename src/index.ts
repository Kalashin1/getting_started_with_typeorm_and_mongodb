import { AppDataSource } from "./data-source";
import { ProjectService } from "./services/project";

AppDataSource.initialize()
  .then(async () => {
    console.log("Connected to the database");
    const projectService = new ProjectService();

    const projectsArray = [
      {
        title: "project 1",
        description: "None for now",
        price: 300,
      },
      {
        title: "project 2",
        description: "None for now",
        price: 500,
      },
      {
        title: "project 3",
        description: "None for now",
        price: 200,
      },
    ];

    const projects = await projectService.createMultipleProjects(projectsArray);

    console.log(projects);
  })
  .catch((error) => console.log(error));
