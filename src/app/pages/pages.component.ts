import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  title = 'AngularMaterialGettingStarted';

  isMenuOpen = true;
  contentMargin = 240;
 //  private route: ActivatedRoute;
  private location: Location;

  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
  }
  onToolbarMenuToggle() {
    console.log('On toolbar toggled', this.isMenuOpen);
    this.isMenuOpen = !this.isMenuOpen;
 
    if (!this.isMenuOpen) {
      this.contentMargin = 70;
    } else {
      this.contentMargin = 240;
    }
  }
}
