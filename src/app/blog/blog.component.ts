import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../BlogPost';
import { PostService } from '../post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog',
  template: `<div class="container">
  <div class="row">
    <!-- Latest Posts -->
    <main class="posts-listing col-lg-8"> 
      <div class="container">
        <div class="row">
          <!-- posts -->
          <app-post-card *ngFor="let post of blogPosts" [post]="post" class="post col-xl-6"></app-post-card>
          <div class="w-100">
            <app-paging [page]="page" (newPage)="getPage($event)"></app-paging>
          </div> 
        </div>
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
</div>
`,
  styles: [

  ]
})
export class BlogComponent implements OnInit {

  blogPosts: Array<BlogPost>;
  page: number = 1 ;
  tag: string;
  category: string;
  querySub: any;

  constructor(private postService: PostService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.querySub = this.route.queryParams.subscribe(params => {

      if (params['tag']) {
        this.tag = params['tag'];
        this.category = "";
      } else {
        this.tag = "";
      }

      if (params['category']) {
        this.category = params['category'];
        this.tag = "";
      } else {
        this.category = "";
      }

      this.getPage(+params['page'] || 1);
    });
  }

  getPage(num: number) : void{
    this.postService.getPosts(num, this.tag, this.category)
    .subscribe((data) => {
      if(data.length == 0 || undefined) return;
      this.blogPosts = data;
      this.page = num;
    });
  }

  ngOnDestroy(){
    if(this.querySub) this.querySub.unsubscribe();
  }

}
