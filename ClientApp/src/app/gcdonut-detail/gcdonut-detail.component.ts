import { Component, OnInit, OnDestroy, Input} from '@angular/core';
import { DonutDetail } from 'src/DonutDetail';
import { Router, ActivatedRoute } from '@angular/router';
import { GCDonutsService } from '../gcdonuts.service';

@Component({
  selector: 'app-gcdonut-detail',
  templateUrl: './gcdonut-detail.component.html',
  styleUrls: ['./gcdonut-detail.component.css']
})
export class GCDonutDetailComponent implements OnInit 
{
    searchID : any;

   @Input() donut : DonutDetail = {} as DonutDetail;

    constructor(private donutsAPI : GCDonutsService, private route : ActivatedRoute, private router : Router)  { } 

    sub : any;

    ngOnInit(): void 
    {
      this. sub = this.route.paramMap.subscribe((params) => {
      this.searchID = params.get('id');
      console.log(this.searchID);
      this.donutsAPI.GetSpecificDonut(this.searchID).subscribe((results : DonutDetail) => {this.donut = results});
    });
  }

    ngOnDestroy() 
    {
      if (this.sub) this.sub.unsubscribe();
    }

    onBack(): void 
    {
      this.router.navigate(['gcdonut-list']);
    }
  }
