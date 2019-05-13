import { Component, OnInit } from '@angular/core';
import './rxjs-operators';
import {fileReaderService} from './file-reader.service';
import {Post} from './post';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-file-reader',
  templateUrl: './file-reader.component.html',
  styleUrls: ['./file-reader.component.sass'],
  providers: <any>[fileReaderService],
  encapsulation: ViewEncapsulation.None
})
export class FileReaderComponent implements OnInit {

    public postTitle;
    public postBody;
    public data;
    public loading;
    
  constructor(private _postDataService: fileReaderService) {
    this.getPosts('http://jsonplaceholder.typicode.com/posts/');
    
  }
    
    private posts:Post[] = [];
    private errorMessage:any = '';
    

    getPosts(sourceURL){
        this.loading = true;
        this._postDataService.getData(sourceURL).subscribe(
            posts => this.posts = posts, 
            error => this.errorMessage = <any>error
        );
    }
    
    showOnLoad(){
        this.postTitle = this.posts[0].title;
        //this.postBody = postBody;
    }
        
    showPost(postTitle, postBody){
        this.postTitle = postTitle;
        this.postBody = postBody;
    }
    
  ngOnInit() {
  }

}
