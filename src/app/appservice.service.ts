import {CanActivate,Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {Http, Headers, Response,RequestOptions} from '@angular/http';
import {Observable, Subscriber,Subject} from 'rxjs/Rx';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/catch';

@Injectable()
export class AppserviceService {

  constructor(private http: Http) { }

  onLogin(f) {
        const headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
      
        return this.http.post('/api/checkLogin',f,{headers: headers}).map(data => data.json());
}

  getEnquiries():Observable<any>  {
        return this.http.get('/api/getEnquiries')
        .map(this.extractData)
        .catch(this.handleError);      
    }

    extractData(response) {
        const body = response.json();
        return body['sd'] || { };
    }

    private handleError (error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
        errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

}
