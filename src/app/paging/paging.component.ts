import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paging',
  template: `
    <nav aria-label="Page navigation"> 
      <ul class="pagination pagination-template d-flex justify-content-center"> 
        <li class="page-item"><a class="page-link" (click)="prevPage()"> <i class="fa fa-angle-left"></i></a></li> 
        <li class="page-item"><a class="page-link">{{page}}</a></li> 
        <li class="page-item"><a class="page-link" (click)="nextPage()"> <i class="fa fa-angle-right"></i></a></li> 
      </ul> 
    </nav>
  `,
  styles: [
  ]
})
export class PagingComponent implements OnInit {

  @Input() page: number;

  @Output() newPage = new EventEmitter();
  
  prevPage() {
    if (this.page > 1) {
      this.newPage.emit(this.page - 1);
    }
  }
  
  nextPage() {
    this.newPage.emit(this.page + 1);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
