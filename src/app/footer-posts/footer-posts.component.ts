import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../BlogPost';
import { PostService } from '../post.service';

@Component({
  selector: 'app-footer-posts',
  template: `
    <div class="latest-posts" *ngFor="let post of posts">
    <div class="post">
        <a [routerLink]="['/post', post._id]">
            <div class="post d-flex align-items-center">
                <div class="image"><img [src]="post.featuredImage" alt="..." class="img-fluid"></div>
                <div class="title"><strong>{{ post.title }}</strong><span class="date last-meta">{{ post.postDate | date:'mediumDate' }}</span></div>
            </div>
        </a>
    </div>
</div>
  `,
  styleUrls: ['./footer-posts.component.css']
})
export class FooterPostsComponent implements OnInit {

  posts: Array<BlogPost>

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPosts(1, "", "").subscribe(data => this.posts = data.slice(0,3));
  }

}
