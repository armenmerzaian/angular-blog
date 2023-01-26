import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogPost } from '../BlogPost';
import { PostService } from '../post.service';

@Component({
  selector: 'app-edit-post',
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

                <div class="pull-right"><button class="btn btn-danger btn-sm" (click)="deletePost(blogPost._id)">Delete Post</button> &nbsp; <button
                        type="submit" class="btn btn-success btn-sm">Update Post</button></div>
            </form>
        </div>
    </div>
</div>
<br />
  `,
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  blogPost: BlogPost;
  tags: string;

  constructor(private postService: PostService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.postService.getPostbyId(this.activatedRoute.snapshot.params['id']).subscribe(data => {
      this.blogPost = data; 
      this.tags = data.tags.toString();
    })
  }

  formSubmit(): void {
    this.blogPost.tags = this.tags.split(',').map(tag => tag.trim());
    this.postService.updatePostById(this.blogPost._id, this.blogPost).subscribe(() => this.router.navigate(['/admin']));
  }

  
  deletePost(id: any) {
    this.postService.deletePostById(id).subscribe(() => this.router.navigate(['/admin']));
  }

}
