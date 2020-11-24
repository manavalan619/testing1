import { Request, Response, NextFunction } from "express";
import { MenuBuilderController } from "../controllers/menubuilder.controller";
import { DefaultMenuController } from "../controllers/defaultmenu.controller";

export class Routes {

    public menuBuilderController: MenuBuilderController = new MenuBuilderController();
    public defaultMenuController: DefaultMenuController = new DefaultMenuController();

    public routes(app): void {

        app.route('/health/menu-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })

        app.route('/menu/save').post(this.menuBuilderController.addMenu);
        app.route('/menu/getall').get(this.menuBuilderController.getAllMenu);
        app.route('/menu/getbyid/:id').get(this.menuBuilderController.getMenuById);
        app.route('/menu/update/:id').put(this.menuBuilderController.updateMenu);
        app.route('/menu/delete/:id').delete(this.menuBuilderController.deleteMenu)
        app.route('/menu/deletebyproject/:id').delete(this.menuBuilderController.deleteProjectMenu)
        app.route('/menu/getbyprojectid/:projectId').get(this.menuBuilderController.getMenuByProjectId);
        app.route('/menu/updatemenubyproject/:projectId').put(this.menuBuilderController.updateMenuByProjectId);

        // default menu
        app.route('/menu/default').get(this.defaultMenuController.createDefaultMenu);
    }
}