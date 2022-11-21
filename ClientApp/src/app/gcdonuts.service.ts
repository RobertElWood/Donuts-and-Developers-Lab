import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Donuts } from 'src/Donuts';
import { Observable } from 'rxjs';
import { DonutDetail } from 'src/DonutDetail';

@Injectable({
  providedIn: 'root'
})
export class GCDonutsService {

  urlBase: string = "https://grandcircusco.github.io/demo-apis/donuts";

  constructor(private http: HttpClient) { }

  GetDonutsList() : Observable<Donuts>
  {
    return this.http.get<Donuts>(this.urlBase +".json");
  }

  GetSpecificDonut(id : number) : Observable<DonutDetail> 
  {
    return this.http.get<DonutDetail>(`${this.urlBase}/${id}.json`);
  }
}
