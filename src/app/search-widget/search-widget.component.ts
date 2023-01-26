import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-widget',
  template: `
    <div class="widget search">
          <header>
            <h3 class="h6">Search the blog</h3>
          </header>
          <form action="#" class="search-form">
            <div class="form-group">
              <input type="search" placeholder="What are you looking for?">
              <button type="submit" class="submit"><i class="icon-search"></i></button>
            </div>
          </form>
        </div>
  `,
  styleUrls: ['./search-widget.component.css']
})
export class SearchWidgetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
