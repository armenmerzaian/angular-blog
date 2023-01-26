import { Component, Input, OnInit } from '@angular/core';
import { BlogPost } from '../BlogPost';
import { PostService } from '../post.service';

@Component({
  selector: 'app-latest-posts',
  template: `
        <div class="widget latest-posts">
          <header>
            <h3 class="h6">Latest Posts</h3>
          </header>
          
          <div class="blog-posts">
            <a [routerLink]="['/post', post._id]" *ngFor="let post of posts">
              <div class="item d-flex align-items-center">
                <div class="image"><img [src]="post.featuredImage" alt="..." class="img-fluid">
              </div>
              <div class="title"><strong>{{ post.title }}</strong>
                <div class="d-flex align-items-center">
                    <div class="views"><i class="icon-eye"></i>{{ post.views }}</div>
                    <div class="comments"><i class="icon-comment"></i>{{ post.comments && post.comments.length > 0 ? post.comments.length : 0 }}</div>
                </div>
            </div>
        </div>
    </a>
</div>
        </div>
  `,
  styleUrls: ['./latest-posts.component.css']
})
export class LatestPostsComponent implements OnInit {
  
  posts: Array<BlogPost>

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPosts(1, "", "").subscribe(data => this.posts = data.slice(0,3));
  }

}
