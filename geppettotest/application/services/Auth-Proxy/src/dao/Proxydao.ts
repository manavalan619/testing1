import mongoose = require('mongoose');
import * as jwt from 'jsonwebtoken';
import * as request from 'request';

import { Signinschema } from '../model/Signin';
import  {Constants} from '../config/Constants';
const logger = require('../config/Logger');

const signinmodel = mongoose.model('Signin', Signinschema);

export class Proxydao {

    public userdao(userdetails, callback) {
        // logger.info('Proxydao.ts : userdao');

        var role = userdetails.role;
        var jsonbody = {
            "variables": {
                "role": {
                    "value": role,
                    "type": "String"
                }
            }
        }
        // logger.info('calling the camunda microservice');
        var posturl = `${Constants.camundaUrl}/accesslevel`

        var camundaresponse = [];
        request.post({ url: posturl, json: jsonbody }, function (error, response, body) {
            camundaresponse.push(body);
            callback(camundaresponse);
        })
    }
}
