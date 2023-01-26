import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../BlogPost';

@Component({
  selector: 'app-post',
  template: `<div class="container">
  <div class="row">
    <!-- Latest Posts -->
    <main class="post blog-post col-lg-8">
      <div class="container">
        <app-post-data></app-post-data>
      </div>
    </main>
    <aside class="col-lg-4">
      <!-- Widget [Search Bar Widget]-->
      <app-search-widget></app-search-widget>
      <!-- Widget [Latest Posts Widget] -->
      <app-latest-posts></app-latest-posts>
      <!-- Widget [Categories Widget]-->
      <app-categories></app-categories>
      <!-- Widget [Tags Cloud Widget]-->
      <app-tag></app-tag>
    </aside>
  </div>
</div>`,
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  blogPosts: Array<BlogPost>;
  
  constructor() { }

  ngOnInit(): void {
  }

}
