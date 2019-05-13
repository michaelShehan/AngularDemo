import { Component, OnInit } from '@angular/core';
import { newsService } from './news.service';
import { NewsSourceDetailsComponent } from './news-source-details.component';
import { NewsArticlesComponent } from './news-articles.component';
 
@Component({
    selector: "my-news-sources",
    templateUrl: './news-sources.component.html',
    styleUrls: ['./news-reader.component.sass'],
    providers: [newsService, NewsSourceDetailsComponent, NewsArticlesComponent]
})
export class NewsSourcesComponent implements OnInit{
    
    private errorMessage:any = '';
    data: any = {};
    articles: any = {};
    nsrc: any ={};
    
    public desc;
    public countryCode;
    public linkURL;
    public name;
    public showDetails = false;
    
    constructor(private _newsService: newsService, private _NewsSourceDetailsComponent: NewsSourceDetailsComponent, private _NewsArticlesComponent: NewsArticlesComponent) { }
    
    selectSource(){
        //this._NewsSourceDetailsComponent.selectNewsSource(this.nsrc);
        this.desc = this.nsrc.description;
        this.countryCode = this.nsrc.country;
        this.linkURL = this.nsrc.url;
        this.name = this.nsrc.name;
        this.showDetails = true;
        this.getArticles(this.nsrc);
    }
    
    getArticles(nsrc){
        console.log(nsrc.id);
        this._newsService.getNewsArticles(nsrc.id).subscribe(
            articles => {console.log(articles); this.articles = articles},
            error => this.errorMessage = <any>error
        );
    }

    ngOnInit() {
        this._newsService.getNewsSources().subscribe(
            data => {console.log(data); this.data = data},
            error => this.errorMessage = <any>error
        )
    }
    
}