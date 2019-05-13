import { Component, OnInit, Input, ChangeDetectorRef, ChangeDetectionStrategy, NgZone } from '@angular/core';
import { newsService } from './news.service';

@Component({
    selector: "my-news-articles",
    changeDetection: ChangeDetectionStrategy.Default,
    templateUrl : 'news-articles.component.html',
    styleUrls: ['./news-reader.component.sass'],
    providers: [newsService]
})
export class NewsArticlesComponent implements OnInit{
    
    private errorMessage:any = '';
    data: any = {};
    public articles: object;
    
    constructor(private _newsService: newsService, public ref: ChangeDetectorRef, public zone: NgZone){}
    
    getArticles(nsrc){
        console.log(nsrc.id);
        this._newsService.getNewsArticles(nsrc.id).subscribe(
            data => {console.log(data); this.data = data},
            error => this.errorMessage = <any>error
        );
        this.articles = this.data.articles;
        this.ref.detectChanges();
    }
    
    ngOnInit() {
//        this._newsService.getNewsArticles("xxx").subscribe(
//            data => {console.log(data); this.data = data},
//            error => this.errorMessage = <any>error
//        )
    }
    
}