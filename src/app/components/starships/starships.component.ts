import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { IStarship } from 'src/app/models/istarship';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {
  starships: Array<IStarship> = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getStarships();
  }

  public getStarships() {
    this.dataService.getStarShips().subscribe(
      (data: any) => {
        this.starships = data.results;
      }
    )
  }
}
