import { Component, OnInit, Input } from '@angular/core';
import { BlogPost } from '../BlogPost';


@Component({
  selector: 'app-post-card',
  template: `<!-- post -->
  <div class="post-thumbnail"><a [routerLink]="['/post', post._id]" ><img src={{post.featuredImage}} alt="..." class="img-fluid"></a></div>
    <div class="post-details">
      <div class="post-meta d-flex justify-content-between">
        <div class="date meta-last">{{post.postDate | date:'mediumDate'}}</div>
        <div class="category"><a [routerLink]="['/blog']" [queryParams]="{ category: post.category }">{{post.category}}</a></div>
      </div><a [routerLink]="['/post', post._id]">
        <h3 class="h4">{{post.title}}</h3></a>
      <div class="text-muted" [innerHtml]="post.post"></div>
      <div class="post-footer d-flex align-items-center"><a href="#" class="author d-flex align-items-center flex-wrap">
          <div class="avatar"><img src="/assets/img/user.svg" alt="..." class="img-fluid"></div>
          <div class="title"><span>{{post.postedBy}}</span></div></a>
        <div class="date"><i class="icon-clock"></i> {{post.postDate | date:'mediumDate' }}</div>
        <div class="comments meta-last"><i class="icon-comment"></i>{{post.comments && post.comments.length > 0 ? post.comments.length : 0}}</div>
      </div>
    </div>
  `,
  styleUrls: ['./post-card.component.css']
})

export class PostCardComponent implements OnInit {
  @Input() post: BlogPost;

  constructor() { 
    

  }

  ngOnInit(): void {
  }

}