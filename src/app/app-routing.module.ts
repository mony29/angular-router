import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { AboutUsComponent } from './routes/about-us/about-us.component';
import { ArticleComponent } from './routes/article/article.component';
import { PageNotFoundComponent } from './routes/page-not-found/page-not-found.component';
import { ArticlesListComponent } from './routes/articles-list/articles-list.component';
import { NavBarComponent } from './routes/nav-bar/nav-bar.component';

// const routes: Routes = [
//   { path: '', component: HomeComponent },
//   { path: 'about-us', component: AboutUsComponent },
//   {
//     path: 'article', component: ArticleComponent,
//     children: [
//       { path: 'articles-list', component: ArticlesListComponent }
//     ]
//   },

//   { path: '**', component: PageNotFoundComponent },
// ];

const routes: Routes = [
  {
    path: '',
    component: NavBarComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'about-us', component: AboutUsComponent, },
      { path: 'article', component: ArticleComponent, },
      { path: 'article/:id', component: ArticlesListComponent, },
    ],
  },
  { path: 'error', component: PageNotFoundComponent, },
  { path: '**', redirectTo: 'error', pathMatch: 'full',},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
