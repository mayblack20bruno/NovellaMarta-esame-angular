import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { map } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class CityService {

    baseUrl = '';

    constructor(private apiService:ApiService) { }

    getSunriseSunset(lat: string, lon: string){
        return this.apiService.sunriseSunset(lat,lon).pipe(
            map(
                (response: any)=>
                {
                    return response as any
                }
                )
            );
    }
}