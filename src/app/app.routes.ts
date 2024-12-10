import { Routes } from '@angular/router';
import { HomePage } from './home/home.page';

export const routes: Routes = [
  {
    path: '',
    component: HomePage, 
  },
  {
    path: 'settings',
    loadComponent: () => import('./settings/settings.page').then((m) => m.SettingsPage)
  },
  {
    path: 'countries',
    loadComponent: () => import('./countries/countries.page').then((m) => m.CountriesPage)
  },
  {
    path: 'news',
    loadComponent: () => import('./news/news.page').then((m) => m.NewsPage)
  },
  {
    path: 'weather',
    loadComponent: () => import('./weather/weather.page').then((m) => m.WeatherPage)
  },
  
    
];
