import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './routes/home/home.component';
import { AboutUsComponent } from './routes/about-us/about-us.component';
import { ArticleComponent } from './routes/article/article.component';
import { ArticlesListComponent } from './routes/articles-list/articles-list.component';
import { NavBarComponent } from './routes/nav-bar/nav-bar.component';
import { PageNotFoundComponent } from './routes/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ArticleComponent,
    ArticlesListComponent,
    NavBarComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
