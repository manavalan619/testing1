import { Injectable } from '@angular/core';
import { ApiService } from '../config/api.service';
import { SharedService } from 'src/shared/shared.service';
import { Observable } from 'rxjs';
import { Constants } from '../config/Constant';

@Injectable({
  providedIn: 'root'
})
export class MenuBuilderService {

  constructor(
    private api: ApiService, private restapi: SharedService

  ) { }

  createMenu(menu: any): Observable<any> {
    return this.api.post(`${this.restapi.Apigateway}${Constants.saveMenu}`, menu);
  }

  getMenuBuilderByProjectId(id, logId): Observable<any> {
    return this.api.get(`${this.restapi.Apigateway}${Constants.getMenuByProjectId}/${id}` + `?log_id=${logId}`);

  }
  updateMenuById(id, menu, logId): Observable<any> {
    return this.api.put(`${this.restapi.Apigateway}${Constants.updateMenuById}/${id}` + `?log_id=${logId}`, menu);
  }

  updateMenubyProjectId(projectId, menu) {
    return this.api.put(`${this.restapi.Apigateway}${Constants.updateMenuByProjectId}/${projectId}`, menu);
  }
}
