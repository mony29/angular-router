import { Component, OnInit } from '@angular/core';
import { IArticle } from '../iarticle';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit{

  articles : IArticle[] = []

  constructor(private _articleService : ArticleService){}

  ngOnInit(): void {
    this.articles = this._articleService.getAllArticle();
  }
}
