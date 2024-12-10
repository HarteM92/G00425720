import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule],
})
export class SettingsPage {
  selectedUnit: string = 'metric';

  constructor() {}

  saveSettings() {
    console.log('Selected unit:', this.selectedUnit); 
  }
}
