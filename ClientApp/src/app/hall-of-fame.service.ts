import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HallOfFame } from './HallOfFame';

@Injectable({
  providedIn: 'root'
})
export class HallOfFameService {

  baseURL : string = "https://grandcircusco.github.io/demo-apis/computer-science-hall-of-fame.json";

  constructor(private httpClient : HttpClient) { }

  GetHallOfFame() : Observable<HallOfFame>
  {
    return this.httpClient.get<HallOfFame>(this.baseURL);
  }
}
