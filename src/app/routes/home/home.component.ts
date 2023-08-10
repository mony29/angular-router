import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { IArticle } from '../iarticle';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  articles: IArticle[] = []
  constructor(
    private _articleService: ArticleService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.articles = this._articleService.getAllArticle()
  }

  setArticleById(articleId: number) {
    for (let article of this.articles) {
      if (articleId === article.id) {
        this.router.navigate(['/article', articleId], {
          queryParams: { search: article.title },
        });
      }
    }
  }
}
