import { Component, OnInit } from '@angular/core';
import { ApiService } from '../_services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  lat = '';
  lon = '';

  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    // this.apiService.getSunriseSunset().subscribe((response:any)=>{
    //   this.shows=response;
    // })
  }
}
