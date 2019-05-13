import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { newsSources } from './news-sources';
import { HttpClient, HttpHandler, HttpInterceptor, HttpRequest, HttpEvent } from '@angular/common/http'; 
//import {HttpClientModule} from '@angular/common/http';

@Injectable()

export class newsService{
    
    constructor (private _http: Http){}
    
    getNewsSources(): Observable<any>{
        return this._http.get('https://newsapi.org/v1/sources?language=en')
        .map(this.extractData)
        .catch(this.handleError);
    }
    
    getNewsArticles(source: string): Observable<any>{
        return this._http.get('https://newsapi.org/v1/articles?source='+ source +'&sortBy=top&apiKey=82c491f8fca84a2a878999ed7ccf5873')
        .map(this.extractArticleData)
        .catch(this.handleError);
    }
    
    private extractData(res: Response){
        let body = res.json();
        return body || [];
    }
    private extractArticleData(articleRes: Response){
        let articleBody = articleRes.json();
        return articleBody || [];
    }
    
    private handleError(error:any){
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}

