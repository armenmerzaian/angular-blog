import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `<footer class="main-footer">
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <div class="logo">
          <h6 class="text-white">Seneca College</h6>
        </div>
        <div class="contact-details">
          <p>1750 Finch Ave E, North York, ON M2J 5G3</p>
          <p>Phone: (416) 491 5050</p>
          
          <ul class="social-menu">
            <li class="list-inline-item"><a href="https://twitter.com/SenecaCollege"><i class="fa fa-twitter"></i></a></li>
            <li class="list-inline-item"><a href="https://www.instagram.com/senecacollege/?hl=en"><i class="fa fa-instagram"></i></a></li>

          </ul>
        </div>
      </div>
      <div class="col-md-4">
        <div class="menus d-flex">
          <ul class="list-unstyled">
            <li> <a href="https://www.senecacollege.ca/registrar/canadian-applicants.html">Canadian Applicants</a></li>
            <li> <a href="https://www.senecacollege.ca/international/apply.html">International Applicants</a></li>
            <li> <a href="https://www.senecacollege.ca/ce/index.html">Part-time Studies Applicants</a></li>
          </ul>
          <ul class="list-unstyled">
            <li> <a href="https://www.senecacollege.ca/boilerplates/footer/About-Seneca/Strategic-Plan.html">Strategic Plan</a></li>
            <li> <a href="https://www.senecacollege.ca/about/sustainability.html">Sustainable Seneca</a></li>
            <li> <a href="https://www.senecacollege.ca/boilerplates/footer/About-Seneca/Careers-at-Seneca.html">Careers at Seneca</a></li>
            <li> <a href="https://www.senecacollege.ca/alumni.html">Alumni</a></li>
          </ul>
        </div>
      </div>
      <div class="col-md-4">
            <app-footer-posts></app-footer-posts>
      </div>
    </div>
  </div>
  <div class="copyrights">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <p>&copy; 2020. All rights reserved. Your great site.</p>
        </div>
        <div class="col-md-6 text-right">
          <p>Template By <a href="https://bootstrapious.com/p/bootstrap-carousel" class="text-white">Bootstrapious</a>
            <!-- Please do not remove the backlink to Bootstrap Temple unless you purchase an attribution-free license @ Bootstrap Temple or support us at http://bootstrapious.com/donate. It is part of the license conditions. Thanks for understanding :)                         -->
          </p>
        </div>
      </div>
    </div>
  </div>
</footer>`,
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
