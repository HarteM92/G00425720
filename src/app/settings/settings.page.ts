import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule],
})
export class SettingsPage {
  selectedUnit: string = 'metric';

  constructor(private router: Router) {}

  saveSettings() {
    localStorage.setItem('unitPreference',this.selectedUnit);
    console.log('Selected unit:', this.selectedUnit); 
    this.router.navigate(['/']);
  }
}
