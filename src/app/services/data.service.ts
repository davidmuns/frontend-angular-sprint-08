import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl = environment.baseApi;
  constructor(private readonly http: HttpClient) { }

  public getStarShips(): Observable<any> {

    return this.http.get<any>(this.baseUrl)
  }
}
