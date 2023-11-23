import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CityService } from '../_services/city.service';
import { OggettoALbaTramont } from '../TipizzazioneMeteo';
import { OggettoDettaglioMeteo } from '../TipizzazioneDettagliMeteo';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
})
export class DettaglioComponent implements OnInit {
  sunRS!: OggettoALbaTramont;
  dettagliMeteo: OggettoDettaglioMeteo[] = [];
  lat = '';
  lon = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private cityService: CityService
  ) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.lat = params['lat'];
      this.lon = params['lon'];

      this.cityService
        .getSunriseSunset(this.lat, this.lon)
        .subscribe((response) => {
          this.sunRS = response;
        });
      this.cityService
        .getDettagliMeteo(this.lat, this.lon)
        .subscribe((response) => {
          this.dettagliMeteo = response;
        });
    });
  }
}
