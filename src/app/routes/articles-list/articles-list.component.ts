import { Component, OnInit } from '@angular/core';
import { IArticle } from '../iarticle';
import { ArticleService } from '../article.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {

  articles: IArticle[] = [];
  articleId: number | undefined;
  tempArticle!: IArticle;
  title: string | undefined | null;

  constructor(
    private _articleService: ArticleService,
    private activedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.articles = this._articleService.getAllArticle();
    this.getArticleIdFromUrl();
    console.log('Title : ', this.title);
  }

  getArticleIdFromUrl() {
    this.articleId = +this.activedRoute.snapshot.paramMap.get('id')!;

    this.title = this.activedRoute.snapshot.queryParamMap.get('search');

    for (let art of this.articles) {
      console.log('Article : ', this.articles);
      if (this.articleId === art.id && this.title === art.title) {
        this.tempArticle = art;
      }
    }

    console.log('ID : ', this.articleId);
    console.log('Temp article : ', this.tempArticle);
  }
}
