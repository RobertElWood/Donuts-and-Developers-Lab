import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Donuts } from 'src/Donuts';
import { GCDonutsService } from '../gcdonuts.service';

@Component({
  selector: 'app-gcdonut-list',
  templateUrl: './gcdonut-list.component.html',
  styleUrls: ['./gcdonut-list.component.css']
})
export class GCDonutListComponent implements OnInit {

  donuts : Donuts[] = [];

  constructor(private donutsAPI : GCDonutsService, private route: ActivatedRoute) 
  { 
  }

  ngOnInit(): void {
    this.donutsAPI.GetDonutsList().subscribe((results : Donuts) => {this.donuts.push(results)});
  }

}
