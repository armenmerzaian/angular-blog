import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `<header class="header">
  <!-- Main Navbar -->
  <nav class="navbar navbar-expand-lg">
    <div class="search-area">
      <div class="search-area-inner d-flex align-items-center justify-content-center">
        <div class="close-btn"><i class="icon-close"></i></div>
        <div class="row d-flex justify-content-center">
          <div class="col-md-8">
            <form action="#">
              <div class="form-group">
                <input type="search" name="search" id="search" placeholder="What are you looking for?">
                <button type="submit" class="submit"><i class="icon-search-1"></i></button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <!-- Navbar Brand -->
      <div class="navbar-header d-flex align-items-center justify-content-between">
        <!-- Navbar Brand --><a routerLink="/home" routerLinkActive="active" class="navbar-brand">Bootstrap Blog</a>
      </div>
      <!-- Navbar Menu -->
        <ul class="navbar-nav mr-auto">
          <li class="nav-item"><a routerLink="/home" routerLinkActive="active" class="nav-link ">Home</a>
          </li>
          <li class="nav-item"><a routerLink="/blog" routerLinkActive="active" class="nav-link ">Blog</a>
          </li>
        </ul>
        <div class="navbar-text"><button class=" btn"><i class="icon-search-1"></i></button></div>
    </div>
  </nav>
</header>
`,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
