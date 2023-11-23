import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  sunriseSunset(latitude: string, longitude: string) {
    const baseUrl = 'https://api.sunrisesunset.io/json';
    const url = `${baseUrl}?lat=${latitude}&lng=${longitude}`;
    return this.http.get(url);
  }

  dettagliMeteo(latitudine: string, longitude: string) {
    const baseUrl =
      'https://www.7timer.info/bin/astro.php?lon=' +
      longitude +
      '&lat= ' +
      latitudine +
      '&ac=0&unit=metric&output=json&tzshift=0';
    return this.http.get(baseUrl);
  }
}
