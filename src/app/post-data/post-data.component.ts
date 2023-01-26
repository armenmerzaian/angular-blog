import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPost } from '../BlogPost';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-data',
  template: `
    <div class="post-single">
            <div class="post-thumbnail"><img src="{{post.featuredImage}}" alt="..." class="img-fluid"></div>
            <div class="post-details">
              <div class="post-meta d-flex justify-content-between">
                <div class="category"><a [routerLink]="['/blog']" [queryParams]="{category: post.category}">{{post.category}}</a></div>
              </div>
              <h1>{{post.title}}<a routerLink><i class="fa fa-bookmark-o"></i></a></h1>
              <div class="post-footer d-flex align-items-center flex-column flex-sm-row"><a href="#" class="author d-flex align-items-center flex-wrap">
                  <div class="avatar"><img src="/assets/img/user.svg" alt="..." class="img-fluid"></div>
                  <div class="title"><span>{{post.postedBy}}</span></div></a>
                <div class="d-flex align-items-center flex-wrap">       
                  <div class="date"><i class="icon-clock"></i> {{post.postDate  | date:'mediumDate'}}</div>
                  <div class="views"><i class="icon-eye"></i> {{post.views}}</div>
                  <div class="comments meta-last"><i class="icon-comment"></i>{{post.comments && post.comments.length > 0 ? post.comments.length : 0}}</div>
                </div>
              </div>
              <div class="post-body" [innerHtml]="post.post"></div>
              <div *ngFor="let tag of post.tags" class="post-tags"><a [routerLink]="['/blog']" [queryParams]="{tag: tag.substring(1)}" class="tag">{{tag}}</a></div>
              <div class="post-comments">
                <header>
                  <h3 class="h6">Post Comments<span class="no-of-comments">({{post.comments && post.comments.length > 0 ? post.comments.length : 0}})</span></h3>
                </header>
                <div *ngFor="let comment of post.comments"class="comment">
                  <div class="comment-header d-flex justify-content-between">
                    <div class="user d-flex align-items-center">
                      <div class="image"><img src="/assets/img/user.svg" alt="..." class="img-fluid rounded-circle"></div>
                      <div class="title"><strong>{{comment.author}}</strong><span class="date">{{comment.date  | date:'mediumDate'}}</span></div>
                    </div>
                  </div>
                  <div class="comment-body" [innerHtml]="comment.comment">
                  </div>
                </div>
              </div>
              <div class="add-comment">
                <header>
                  <h3 class="h6">Leave a reply</h3>
                </header>
                <form (ngSubmit)="submitComment()" class="commenting-form">
                  <div class="row">
                    <div class="form-group col-md-12">
                      <input type="text" name="username" id="username" [(ngModel)]="commentName" placeholder="Name" class="form-control">
                    </div>
                    <div class="form-group col-md-12">
                      <textarea name="usercomment" id="usercomment" [(ngModel)]="commentText" placeholder="Type your comment" class="form-control"></textarea>
                    </div>
                    <div class="form-group col-md-12">
                      <button type="submit" class="btn btn-secondary">Submit Comment</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
  `,
  styleUrls: ['./post-data.component.css']
})
export class PostDataComponent implements OnInit {
  
  post: BlogPost;
  querySub: any;

  commentName: string;
  commentText: string;
  
  constructor(private postService: PostService, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.querySub = this.activateRoute.params.subscribe(params =>{ 
      this.postService.getPostbyId(params['id']).subscribe(data => this.post = data);
    });
  }

  ngOnDestroy(): void{
    if(this.querySub) this.querySub.unsubscribe();
  }

  submitComment(){
    this.post.comments.push({ 
      author: this.commentName,
      comment: this.commentText,
      date: new Date().toLocaleDateString()
    });

    this.postService.updatePostById(this.post._id, this.post)
    .subscribe(() => {
    this.commentName = "";
    this.commentText = "";
    });
  }

}
