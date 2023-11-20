import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'; 
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

    sunriseSunset(latitude:string, longitude:string) {
    const baseUrl = 'https://api.sunrisesunset.io/json';
    const url = `${baseUrl}?lat=${latitude}&lng=${longitude}`;
    return this.http.get(url);
  }

  constructor(private http: HttpClient) { }

}

/* stiamo compilando il lin con link il link base più tutte le informazioni necessarie per arrivare alla parina prescelta 
  getApiInCategory(category:string){
    return this.http.get(this.baseUrl + '/?category='+ category + '&cc=it&l=italian').pipe(map((response)=>{
      console.log(response);
      return response as any;
    }))
  }

/* qui da i link da cliccare per entrare nelle specifiche 
  getMeteoCity(){
    return this.http.get(this.baseUrl + 'search/shows?q=girls' ).pipe(map((response)=>{
      console.log(response);
      return response as any;
    }))
  }
}
*/
/*

function getSunriseSunset(latitude, longitude) {
  const baseUrl = 'https://api.sunrisesunset.io/json';
  const url = `${baseUrl}?lat=${latitude}&lng=${longitude}`;

// Example usage:
const latitude = 38.907192;
const longitude = -77.036873;

getSunriseSunset(latitude, longitude)
  .then(data => {
    console.log('Sunrise and sunset data:', data);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });

*/