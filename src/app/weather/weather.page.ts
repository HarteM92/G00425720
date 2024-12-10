import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, HttpClientModule],
})
export class WeatherPage implements OnInit {
  weather: any = null;
  cityName: string = '';

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.cityName = params['city'];
      if (this.cityName) {
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
    const apiKey = 'b3ae19eaf011ee17ef116a2145af5876';
    const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${this.cityName}`;
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
