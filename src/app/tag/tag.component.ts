import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-tag',
  template: `
    <div class="widget tags">       
          <header>
            <h3 class="h6">Tags</h3>
          </header>
          <ul class="list-inline">
            <li *ngFor="let tag of tags" class="list-inline-item">
              <a [routerLink]="['/blog']" [queryParams]="{ tag: tag.substring(1)}" class="tag">{{tag}}</a>
            </li>
          </ul>
        </div>
  `,
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {
  tags: Array<string> = [];
  
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getTags().subscribe(data => this.tags = data);
  }

}
