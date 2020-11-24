import { Request, Response, NextFunction } from "express";
import { ProjectController } from "../controllers/project.controller";

export class Routes {

    public projectController: ProjectController = new ProjectController()

    public routes(app): void {

        app.route('/health/project-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })

        app.route('/projects/add').post(this.projectController.addProject); 
        app.route('/projects/getall').get(this.projectController.getAllProject)
        app.route('/projects/getbyid/:id').get(this.projectController.getProjectByID)
        app.route('/projects/update/:id').put(this.projectController.updateProject)
        app.route('/projects/delete/:id').delete(this.projectController.deleteProject)
        app.route('/projects/getbyuserid/:id').get(this.projectController.getProjectByUserId);

    }
}