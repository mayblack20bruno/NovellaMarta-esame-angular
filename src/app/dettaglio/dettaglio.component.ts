import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
})
export class DettaglioComponent implements OnInit{
  id="";
  
  constructor(private activatedRoute:ActivatedRoute){};
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];}
  )
      console.log(this.id);
}

}
