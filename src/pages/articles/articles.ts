import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ArticlesProvider } from '../../providers/articles/articles'

@Component({
  selector: 'page-articles',
  templateUrl: 'articles.html'
})
export class ArticlesPage {
  results = [];
  constructor(
    private articles: ArticlesProvider,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}

  ionViewDidLoad() {
    this.articles
      .getArticles()
  }
}
