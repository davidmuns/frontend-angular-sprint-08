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
  pageNumber: number;
  isForwardBtnDisabled: boolean;
  isBackwardBtnDisables: boolean;
  constructor(private dataService: DataService, private router: Router) {
    this.isBackwardBtnDisables = false;
    this.isForwardBtnDisabled = false;
    this.pageNumber = 1;
    this.getStarships();
  }

  ngOnInit(): void {

  }

  public pageForward() {
    this.pageNumber++;
    if (this.pageNumber > 4) {
      this.isForwardBtnDisabled = true;
      this.pageNumber = 4;
    } else {
      this.isForwardBtnDisabled = false;
      this.isBackwardBtnDisables = false;
    }
    this.getStarships();
  }
  public pageBackward() {
    this.pageNumber--;
    if (this.pageNumber < 1) {
      this.isBackwardBtnDisables = true;
      this.pageNumber = 1;
    } else {
      this.isBackwardBtnDisables = false;
      this.isForwardBtnDisabled = false;
    }
    this.getStarships();
  }

  public getStarships() {
    this.dataService.getStarships(this.pageNumber).subscribe(
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
