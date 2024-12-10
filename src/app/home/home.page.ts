import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular'; 
import { FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true, 
  imports: [IonicModule, FormsModule, RouterModule], 
})
export class HomePage {
  searchTerm: string = ''; 

  constructor() {}

  search() {
    console.log('Search term:', this.searchTerm);
  }
}
