import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogPost } from '../BlogPost';
import { PostService } from '../post.service';

@Component({
  selector: 'app-new-post',
  template: `
    <br />
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <form (ngSubmit)="formSubmit()">
                <div class="form-group">
                    <label>Title</label>
                    <input type="text" class="form-control" name="title" [(ngModel)]="blogPost.title">
                </div>
                <div class="form-group">
                    <label>Featured Image (URL)</label>
                    <input type="text" class="form-control" name="featuredImage" [(ngModel)]="blogPost.featuredImage">
                </div>
                <div class="form-group">
                    <label>Post</label>
                    <textarea class="form-control" style="min-height:200px" name="post" [(ngModel)]="blogPost.post" [innerHTML]="blogPost.post"></textarea>
                </div>
                <div class="form-group">
                    <label>Category</label>
                    <input type="text" class="form-control" name="category" [(ngModel)]="blogPost.category">
                </div>
                <div class="form-group">
                    <label>Tags</label>
                    <textarea class="form-control" name="tags" [(ngModel)]="tags"></textarea>
                </div>

                <div class="pull-right">
                  <button type="submit" class="btn btn-success btn-sm">Add Post</button>
                </div>
            </form>
        </div>
    </div>
</div>
<br />
  `,
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  blogPost: BlogPost = new BlogPost();
  tags: string;

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit(): void {
  }

  formSubmit(){
    this.blogPost.tags = this.tags.split(',').map(tag => tag.trim());
    this.blogPost.isPrivate = false;
    this.blogPost.postDate = new Date().toLocaleDateString();
    this.blogPost.postedBy = 'BTI425 Student';
    this.blogPost.views = 0;
    this.postService.newPost(this.blogPost)
    .subscribe(() => this.router.navigate(['/admin']));
  }

}
