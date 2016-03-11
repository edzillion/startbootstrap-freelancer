import {Component, EventEmitter} from 'angular2/core';
import {Navbar} from './navbar';
import {Contact} from './contact';
import {Modal} from './modal';
import {PortfolioItem} from './portfolioItem';

@Component({
  selector: 'app',
  directives: [Contact, Navbar, Modal, PortfolioItem],
  template: `
  <div id="mydiv" (scroll)='myScroll()'>

  <nav-bar [shrink]="isHeaderShrunk"></nav-bar>

  <!-- Header -->
  <header>
      <div class="container">
          <div class="row" >
              <div class="col-lg-12">
                  <img class="img-responsive" src="img/profile.png" alt="">
                  <div class="intro-text">
                      <span class="name">Start Bootstrap</span>
                      <hr class="star-light">
                      <span class="skills">Web Developer - Graphic Artist - User Experience Designer</span>
                  </div>
              </div>
          </div>
      </div>
  </header>

  <!-- Portfolio Grid Section -->
  <section id="portfolio">
      <div class="container">
          <div class="row">
              <div class="col-lg-12 text-center">
                  <h2>Portfolio</h2>
                  <hr class="star-primary">
              </div>
          </div>
          <div class="row">
          <portfolio-item *ngFor="#item of portfolioItems; #i = index" [portfolio-id]="i" [item]="item" (openModal)="onPortfolioClick($event)" ></portfolio-item>

          </div>
      </div>
  </section>

  <!-- About Section -->

  <section class="success" id="about">
      <div class="container">
          <div class="row">
              <div class="col-lg-12 text-center">
                  <h2>About</h2>
                  <hr class="star-light">
              </div>
          </div>
          <div class="row">
              <div class="col-lg-4 col-lg-offset-2">
                  <p>Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional LESS stylesheets for easy customization.</p>
              </div>
              <div class="col-lg-4">
                  <p>Whether you're a student looking to showcase your work, a professional looking to attract clients, or a graphic artist looking to share your projects, this template is the perfect starting point!</p>
              </div>
              <div class="col-lg-8 col-lg-offset-2 text-center">
                  <a href="#" class="btn btn-lg btn-outline">
                      <i class="fa fa-download"></i> Download Theme
                  </a>
              </div>
          </div>
      </div>
  </section>

  <!-- Contact Section -->

  <section id="contact">
    <contact-section></contact-section>
  </section>

  <!-- Footer -->

  <footer class="text-center">
      <div class="footer-above">
          <div class="container">
              <div class="row">
                  <div class="footer-col col-md-4">
                      <h3>Location</h3>
                      <p>3481 Melrose Place<br>Beverly Hills, CA 90210</p>
                  </div>
                  <div class="footer-col col-md-4">
                      <h3>Around the Web</h3>
                      <ul class="list-inline">
                          <li>
                              <a href="#" class="btn-social btn-outline"><i class="fa fa-fw fa-facebook"></i></a>
                          </li>
                          <li>
                              <a href="#" class="btn-social btn-outline"><i class="fa fa-fw fa-google-plus"></i></a>
                          </li>
                          <li>
                              <a href="#" class="btn-social btn-outline"><i class="fa fa-fw fa-twitter"></i></a>
                          </li>
                          <li>
                              <a href="#" class="btn-social btn-outline"><i class="fa fa-fw fa-linkedin"></i></a>
                          </li>
                          <li>
                              <a href="#" class="btn-social btn-outline"><i class="fa fa-fw fa-dribbble"></i></a>
                          </li>
                      </ul>
                  </div>
                  <div class="footer-col col-md-4">
                      <h3>About Freelancer</h3>
                      <p>Freelance is a free to use, open source Bootstrap theme created by <a href="http://startbootstrap.com">Start Bootstrap</a>.</p>
                  </div>
              </div>
          </div>
      </div>
      <div class="footer-below">
          <div class="container">
              <div class="row">
                  <div class="col-lg-12">
                      Copyright &copy; Your Website 2014
                  </div>
              </div>
          </div>
      </div>
  </footer>

  <!-- Scroll to Top Button (Only visible on small and extra-small screen sizes) -->
  <div class="scroll-top page-scroll visible-xs visible-sm">
      <a class="btn btn-primary" href="#page-top">
          <i class="fa fa-chevron-up"></i>
      </a>
  </div>

  <!-- Portfolio Modals -->

  <modal [item]="portfolioItem" [isOpen]="modalOpen" (isOpenChange)="modalChange($event)"></modal>

  `
})

//

export class AppComponent {
  didScroll: boolean;
  isHeaderShrunk: boolean;
  public portfolioItem: any;
  public modalOpen: boolean = false;

  public portfolioItems = [
    {
      imgSrc: '/img/portfolio/cabin.png',
      title: 'Project Title',
      client: '<a href="http://startbootstrap.com">Start Bootstrap</a>',
      text: 'Use this area of the page to describe your project. The icon above is part of a free icon set by <a href="https://sellfy.com/p/8Q9P/jV3VZ/">Flat Icons</a>. On their website, you can download their free set with 16 icons, or you can purchase the entire set with 146 icons for only $12!',
      date: '<a href="http://startbootstrap.com">April 2014</a>',
      service: '<a href="http://startbootstrap.com">Web Development</a>'
    },
    {
      imgSrc: '/img/portfolio/cake.png',
      title: 'Project Title',
      text: 'Use this area of the page to describe your project. The icon above is part of a free icon set by <a href="https://sellfy.com/p/8Q9P/jV3VZ/">Flat Icons</a>. On their website, you can download their free set with 16 icons, or you can purchase the entire set with 146 icons for only $12!',
      client: '<a href="http://startbootstrap.com">Start Bootstrap</a>',
      date: '<a href="http://startbootstrap.com">April 2014</a>',
      service: '<a href="http://startbootstrap.com">Web Development</a>'
    },
    {
      imgSrc: '/img/portfolio/circus.png',
      title: 'Project Title',
      text: 'Use this area of the page to describe your project. The icon above is part of a free icon set by <a href="https://sellfy.com/p/8Q9P/jV3VZ/">Flat Icons</a>. On their website, you can download their free set with 16 icons, or you can purchase the entire set with 146 icons for only $12!',
      client: '<a href="http://startbootstrap.com">Start Bootstrap</a>',
      date: '<a href="http://startbootstrap.com">April 2014</a>',
      service: '<a href="http://startbootstrap.com">Web Development</a>'
    },
    {
      imgSrc: '/img/portfolio/game.png',
      title: 'Project Title',
      text: 'Use this area of the page to describe your project. The icon above is part of a free icon set by <a href="https://sellfy.com/p/8Q9P/jV3VZ/">Flat Icons</a>. On their website, you can download their free set with 16 icons, or you can purchase the entire set with 146 icons for only $12!',
      client: '<a href="http://startbootstrap.com">Start Bootstrap</a>',
      date: '<a href="http://startbootstrap.com">April 2014</a>',
      service: '<a href="http://startbootstrap.com">Web Development</a>'
    },
    {
      imgSrc: '/img/portfolio/submarine.png',
      title: 'Project Title',
      text: 'Use this area of the page to describe your project. The icon above is part of a free icon set by <a href="https://sellfy.com/p/8Q9P/jV3VZ/">Flat Icons</a>. On their website, you can download their free set with 16 icons, or you can purchase the entire set with 146 icons for only $12!',
      client: '<a href="http://startbootstrap.com">Start Bootstrap</a>',
      date: '<a href="http://startbootstrap.com">April 2014</a>',
      service: '<a href="http://startbootstrap.com">Web Development</a>'
    },
    {
      imgSrc: '/img/portfolio/safe.png',
      title: 'Project Title',
      text: 'Use this area of the page to describe your project. The icon above is part of a free icon set by <a href="https://sellfy.com/p/8Q9P/jV3VZ/">Flat Icons</a>. On their website, you can download their free set with 16 icons, or you can purchase the entire set with 146 icons for only $12!',
      client: '<a href="http://startbootstrap.com">Start Bootstrap</a>',
      date: '<a href="http://startbootstrap.com">April 2014</a>',
      service: '<a href="http://startbootstrap.com">Web Development</a>'
    }
  ];

  constructor() {
    this.portfolioItem = this.portfolioItems[0];
  }

  onPortfolioClick(portfolioIndex) {
    this.modalOpen = true;
    this.portfolioItem = this.portfolioItems[portfolioIndex];
  }

  modalChange (modalOpen) {
    this.modalOpen = modalOpen;
  }
}
