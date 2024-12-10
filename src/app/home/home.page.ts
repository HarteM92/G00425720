import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular'; 
import { FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router'; 
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true, 
  imports: [IonicModule, FormsModule, RouterModule], 
})
export class HomePage {
  searchTerm: string = ''; 

  constructor(private router: Router) {}

  search() {
    if (this.searchTerm.trim()) {
      console.log('Navigating to countries page with term:', this.searchTerm);
      this.router.navigate(['/countries'], { queryParams: { term: this.searchTerm } });
    } else {
      console.log('Search term is empty.');
    }
  }
}