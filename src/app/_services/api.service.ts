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

/* qui da i link da cliccare per entrare nelle specifiche 
  getMeteoCity(){
    return this.http.get(this.baseUrl + 'search/shows?q=girls' ).pipe(map((response)=>{
      console.log(response);
      return response as any;
    }))
  }
}
*/