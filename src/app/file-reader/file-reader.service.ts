import {Injectable} from '@angular/core';
import {Post} from './post';
import {Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()

export class fileReaderService{
    constructor (private http: Http){}
    
    getData(sourceURL):Observable<Post[]>{
        //return this.http.get('http://jsonplaceholder.typicode.com/posts/').map(this.extractData).catch(this.handleError);
        return this.http.get(sourceURL)
            .map(this.extractData)
            .catch(this.handleError);
    }
    
    private extractData(res:Response) {
        let body = res.json();
        return body || [];
    }
    
    private handleError(error:any){
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}