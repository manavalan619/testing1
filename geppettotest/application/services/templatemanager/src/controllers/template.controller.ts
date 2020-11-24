import { Request, Response } from 'express';
import { TemplateService } from '../services/template.service';

let templateService = new TemplateService()

export class TemplateController {

    public addTemplate(req: Request, res: Response) {

        templateService.addTemplate(req, (user) => {
            res.status(200); // status for the response
            res.json(user); 
        })
    }

    public getAllTemplateByProject(req: Request, res: Response) {
        templateService.getAllTemplateByProject(req, (user) => {
            res.status(200); // status for the response
            res.json(user); 
        })
    }

    public getAllTemplates(req: Request, res: Response) {
        templateService.getAllTemplates(req, (user) => {
            res.status(200); // status for the response
            res.json(user); 
        })
    }

    public getTemplateByID(req: Request, res: Response) {
        templateService.getTemplateByID(req, (user) => {
            res.status(200); // status for the response
            res.json(user); 
        })
    }

    public getTemplateByName(req:Request, res:Response){
        console.log('---------templatename----',req.query.template_name);
        templateService.getTemplateByName(req,(templatedetails)=>{
            res.status(200);
            res.json(templatedetails);
        })
    }

    public updateTemplate(req: Request, res: Response) {
        templateService.updateTemplate(req, (user) => {
            res.status(200); // status for the response
            res.json(user); 
        })
    }

    public deleteTemplate(req: Request, res: Response) {
        templateService.deleteTemplate(req, (user) => {
            res.status(200); // status for the response
            res.json(user);
        })
    }
}