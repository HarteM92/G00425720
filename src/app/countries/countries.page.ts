import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.page.html',
  styleUrls: ['./countries.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterModule, HttpClientModule, CommonModule], 
})
export class CountriesPage implements OnInit {
  countries: any[] = [];
  searchTerm: string = '';

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      console.log('Received term:', params['term']);
      this.searchTerm = params['term'];
      if (this.searchTerm) {
        this.fetchCountries();
      }
    });
  }

  fetchCountries() {
    console.log('Making API call with term:', this.searchTerm); 
    this.http
      .get(`https://restcountries.com/v3.1/name/${this.searchTerm}`)
      .subscribe(
        (data: any) => {
          this.countries = data;
          console.log('API Response:', this.countries); 
        },
        (error) => {
          console.error('API Error:', error); 
        }
      );
  }
}
