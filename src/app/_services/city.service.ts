import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { map } from 'rxjs';
import { OggettoALbaTramont } from '../TipizzazioneMeteo';
import { OggettoDettaglioMeteo } from '../TipizzazioneDettagliMeteo';

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
                    return response.results as OggettoALbaTramont;
                }
                )
            );
    }

    getDettagliMeteo(latitudine:string, longitudine:string){
        return this.apiService.dettagliMeteo(latitudine,longitudine).pipe(
            map(
                (response: any)=>
                {
                    console.log(response.dataseries)
                    return response.dataseries as OggettoDettaglioMeteo[];
                }
            )
        );
    }
}