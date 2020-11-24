import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable()
export class SharedService {

    // base host
    public static BaseHost = environment.BaseHost;

    private envPort = environment.Port;

    //Shared microservice
    private sharedHost = 'http://localhost:3050';

    // App Service
    public Apigateway: String = environment.BaseHost + this.envPort;

    //Shared microservice
    public sharedserviceapi: String = this.sharedHost;
}
