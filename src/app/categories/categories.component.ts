import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-categories',
  template: `
    <div class="widget categories">
          <header>
            <h3 class="h6">Categories</h3>
          </header>
          <div *ngFor="let cat of categories"class="item d-flex justify-content-between">
            <a [routerLink]="['/blog']" [queryParams]="{ category: cat.cat }">{{cat.cat}}</a>
            <span>{{cat.num}}</span>
          </div>
    </div>
  `,
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Array<any> = [];
 
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getCategories().subscribe(data => this.categories = data);
  }

}
