import { DataService } from '../../services/data.service';
import { Component, Injectable, OnInit } from '@angular/core';
import { IStarship } from 'src/app/models/istarship';
import { Router } from '@angular/router';

@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.css']
})

export class StarshipComponent implements OnInit {
  starships: Array<IStarship> = [];
  starship!: IStarship;
  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.getStarships();
  }

  public getStarships() {
    this.dataService.getStarships().subscribe(
      (data: any) => {
        this.starships = data.results;
      }
    )
  }

  public getStarshipById(url: string) {
    this.dataService.getStarshipById(url).subscribe(
      (data: any) => {
        this.starship = data;
        this.dataService.subscribeTrigger.emit(this.starship);
      }

    )

    this.router.navigate(['starship'])

  }

  public getStarship() {
    return this.starship;
  }
}
