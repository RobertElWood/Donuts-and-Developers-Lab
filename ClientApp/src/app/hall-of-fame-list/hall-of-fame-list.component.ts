import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { HallOfFameService } from '../hall-of-fame.service';
import { HallOfFame } from '../HallOfFame';

@Component({
  selector: 'app-hall-of-fame-list',
  templateUrl: './hall-of-fame-list.component.html',
  styleUrls: ['./hall-of-fame-list.component.css']
})
export class HallOfFameListComponent implements OnInit {

  @Input() gcHall : HallOfFame = {} as HallOfFame;

  constructor(private hofAPI : HallOfFameService) { }

  ngOnInit(): void {
    this.hofAPI.GetHallOfFame().subscribe((results : HallOfFame) => {this.gcHall = results})
  }

}
