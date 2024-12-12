import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, HttpClientModule],
})
export class NewsPage implements OnInit {
  news: any[] = [];
  countryCode: string = '';

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.countryCode = params['code'];
      if (this.countryCode) {
        this.fetchNews();
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

  fetchNews() {
    const apiKey = 'pub_619637a2a29b4dabf22475a2beabd2f26d0ef';
    const url = `https://newsdata.io/api/1/news?apikey=${apiKey}&country=${this.countryCode}`;
    
    console.log('Fetching news from', url);
    
    this.http.get(url).subscribe(
      (data: any) => {
        this.news = data.results || [];
        console.log('News API Response:', this.news);
      },
      (error) => {
        console.error('API Error:', error);
      }
    );
  }
}
