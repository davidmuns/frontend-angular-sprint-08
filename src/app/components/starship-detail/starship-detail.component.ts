import { IStarship } from 'src/app/models/istarship';
import { StarshipComponent } from './../starship/starship.component';
import { DataService } from './../../services/data.service';
import { Component, Injectable, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-starship-detail',
  templateUrl: './starship-detail.component.html',
  styleUrls: ['./starship-detail.component.css']
})
export class StarshipDetailComponent implements OnInit {
  starship!: IStarship;
  id!: string;
  img: string = '';
  constructor(private dataService: DataService) {
    this.id = this.dataService.starshipId;
    this.img = `https://starwars-visualguide.com/assets/img/starships/${this.id}.jpg`;

    alert(this.img);
    this.dataService.subscribeTrigger.subscribe(
      data => {
        this.starship = data;
      }
    )
  }

  ngOnInit(): void {
    // this.id = this.dataService.starshipId;
    // this.img = `https://starwars-visualguide.com/assets/img/starships/${this.id}.jpg`;

    // alert(this.img);
    // this.dataService.subscribeTrigger.subscribe(
    //   data => {
    //     this.starship = data;
    //   }
    // )
  }
}
