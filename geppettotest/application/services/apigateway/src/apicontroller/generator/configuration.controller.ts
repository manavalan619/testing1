import * as express from 'express';
import { Request, Response } from 'express';
import Controller from "../../interfaces/controller.interface";
import { ApiAdaptar } from '../../config/apiAdaptar';
import  {Constants} from '../../config/Constants';

export class ConfigurationController implements Controller {
    public router = express.Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        // this.router.route('/generate/code').put(this.createProjectCode);
        this.router.route('/generation_flow/add').post(this.addGenerationFlow);
        this.router.route('/generation_flow/update/:id').put(this.updateGenerationFlow);
        this.router.route('/generation_flow/getall').get(this.getAllGenerationFlow);
        this.router.route('/generation_flow/getbyid/:id').get(this.getGenerationFlowByID);
        this.router.route('/generation_flow/getbyname/:name').get(this.getGenerationFlowByName);
        this.router.route('/generation_flow/delete/:id').delete(this.deleteGenerationFlow);
        this.router.route('/generation_flow/getproperties').get(this.getTechPropertyFlow);
    }

    async addGenerationFlow(req: Request, res: Response) {
        try {
            let result = await Promise.resolve(new ApiAdaptar().post(`${Constants.configUrl}/generation_flow/add`, req.body));
            req.baseUrl === '/mobile' ? res.send(result) :
                req.baseUrl === '/desktop' ? res.send(result) : res.send(null);
        } catch (err) {
            req.baseUrl === '/mobile' ? res.send(err) :
                req.baseUrl === '/desktop' ? res.send(err) : res.send(null);
        }
    }

    async updateGenerationFlow(req: Request, res: Response) {
        try {
            let result = await Promise.resolve(new ApiAdaptar().put(`${Constants.configUrl}/generation_flow/update/${req.params.id}`, req.body));
            req.baseUrl === '/mobile' ? res.send(result) :
                req.baseUrl === '/desktop' ? res.send(result) : res.send(null);
        } catch (err) {
            req.baseUrl === '/mobile' ? res.send(err) :
                req.baseUrl === '/desktop' ? res.send(err) : res.send(null);
        }
    }

    async getAllGenerationFlow(req: Request, res: Response) {
        try {
            let result = await Promise.resolve(new ApiAdaptar().get(`${Constants.configUrl}/generation_flow/getall`));
            req.baseUrl === '/mobile' ? res.send(result) :
                req.baseUrl === '/desktop' ? res.send(result) : res.send(null);
        } catch (err) {
            req.baseUrl === '/mobile' ? res.send(err) :
                req.baseUrl === '/desktop' ? res.send(err) : res.send(null);
        }
    }

    async getGenerationFlowByID(req: Request, res: Response) {
        try {
            let result = await Promise.resolve(new ApiAdaptar().get(`${Constants.configUrl}/generation_flow/getbyid/${req.params.id}`));
            req.baseUrl === '/mobile' ? res.send(result) :
                req.baseUrl === '/desktop' ? res.send(result) : res.send(null);
        } catch (err) {
            req.baseUrl === '/mobile' ? res.send(err) :
                req.baseUrl === '/desktop' ? res.send(err) : res.send(null);
        }
    }

    async getGenerationFlowByName(req: Request, res: Response) {
        try {
            let result = await Promise.resolve(new ApiAdaptar().get(`${Constants.configUrl}/generation_flow/getbyname/${req.params.name}`));
            req.baseUrl === '/mobile' ? res.send(result) :
                req.baseUrl === '/desktop' ? res.send(result) : res.send(null);
        } catch (err) {
            req.baseUrl === '/mobile' ? res.send(err) :
                req.baseUrl === '/desktop' ? res.send(err) : res.send(null);
        }
    }

    deleteGenerationFlow(req: Request, res: Response) {
        new ApiAdaptar().delete(
            `${Constants.configUrl}/generation_flow/delete/${req.params.id}`
        ).then((result) => {
            req.baseUrl === '/mobile' ? res.send(result) :
                req.baseUrl === '/desktop' ? res.send(result) : res.send(null);
        }).catch(err => {
            req.baseUrl === '/mobile' ? res.send(err) :
                req.baseUrl === '/desktop' ? res.send(err) : res.send(null);
        });
    }

    getTechPropertyFlow(req: Request, res: Response) {
        new ApiAdaptar().get(
            `${Constants.configUrl}/generation_flow/getproperties`
        ).then((result) => {
            req.baseUrl === '/mobile' ? res.send(result) :
                req.baseUrl === '/desktop' ? res.send(result) : res.send(null);
        }).catch(err => {
            req.baseUrl === '/mobile' ? res.send(err) :
                req.baseUrl === '/desktop' ? res.send(err) : res.send(null);
        });
    }
}