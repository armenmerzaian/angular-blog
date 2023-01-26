import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogPost } from '../BlogPost';
import { PostService } from '../post.service';

@Component({
  selector: 'app-posts-table',
  template: `
    <br />
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <a [routerLink]="['/admin/newPost']" class="btn btn-success btn-sm pull-right">+&nbsp;&nbsp;New Post</a><br /><br />
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Post Date</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    <tr *ngFor="let post of blogPosts" (click)="rowClicked($event, post._id)">
                        <td>{{ post.title }}</td>
                        <td>{{ post.postDate | date:'mediumDate' }}</td>
                        <td>{{ post.category }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
<br />
  `,
  styleUrls: ['./posts-table.component.css']
})
export class PostsTableComponent implements OnInit {

  blogPosts: Array<BlogPost> = [];
  constructor(private postService: PostService, private router: Router) { }

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe(data => this.blogPosts = data);
  }

  rowClicked(e: Event, id: any){
    this.router.navigate([`/admin/post/${id}`]);
  }

}
