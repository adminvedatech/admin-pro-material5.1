import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.sass']
})
export class PrincipalComponent implements OnInit {

   // title = 'admin-pro-material2';

 // title = 'admin-pro-material2';

 title = 'AngularMaterialGettingStarted';

 isMenuOpen = true;
 contentMargin = 240;
//  private route: ActivatedRoute;
 private location: Location;

ngOnInit() {
  
}

 constructor(public route: ActivatedRoute
) {
  
  console.log('Activated route ', this.route.root);
  
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
 // sidenavEvents(str) {
 //   console.log(str);
 // }

}
