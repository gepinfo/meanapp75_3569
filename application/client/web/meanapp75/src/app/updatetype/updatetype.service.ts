import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../../shared/shared.service';

@Injectable({
    providedIn: 'root'
})

export class UpdatetypeService {
    constructor(
        private sharedService: SharedService,
        private http: HttpClient,
    ) { }

    Update(types:any): Observable<any> {
        let jwt_token = sessionStorage.getItem('JwtToken');
 	 	return this.http.put(this.sharedService.WEB_API + '/types' + `?jwt_token=${jwt_token}`, types);
    }
    GetEntityById(typesId:any): Observable<any> {
        let jwt_token = sessionStorage.getItem('JwtToken');
 	 	return this.http.get(this.sharedService.WEB_API + '/types/' + typesId + `?jwt_token=${jwt_token}`);
    }
}