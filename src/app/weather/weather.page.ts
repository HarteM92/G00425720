import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { CountriesPage } from '../countries/countries.page';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, HttpClientModule,],
})
export class WeatherPage implements OnInit {
  weather: any = null;
  countryName: string = '';
  cityName: string = '';
  latitude: string = '';
  longitude: string = '';
  units: string = 'metric'; 

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.countryName = params['name'];
      this.cityName = params['city'];
      this.latitude = params['lat'];
      this.longitude = params['lon'];

      const savedUnits = localStorage.getItem('unitPreference');

      this.units = savedUnits || 'metric'; 

      if (this.latitude && this.longitude) {
        this.fetchWeather();
      }
    });

    setTimeout(() => {
      const ionPage = this.elementRef.nativeElement.closest('.ion-page');
      if (ionPage) {
        this.renderer.setAttribute(ionPage, 'tabindex', '-1');
        ionPage.focus();
      }
    });
  }

  fetchWeather() {
    const apiKey = '469fe55a1aee66e01edea2a5309997bf'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${this.latitude}&lon=${this.longitude}&units=${this.units}&appid=${apiKey}`;
    
    console.log('Fetching weather from', url);
    
    this.http.get(url).subscribe(
      (data: any) => {
        this.weather = data;
        console.log('Weather API Response:', this.weather);
      },
      (error) => {
        console.error('API Error:', error);
      }
    );
  }
}
