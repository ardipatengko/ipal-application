import { Component, OnInit } from '@angular/core';
import { IpalDataService } from '../services/ipal-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IpalCategoryService } from '../services/ipal-category.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-content-table',
  templateUrl: './content-table.component.html',
  styleUrls: ['./content-table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class ContentTableComponent implements OnInit {
  latitude: number = 51.678418;
  longitude: number = 7.809007;

  private sub: any;
  private idCategory: Number;

  ipalDataColumns: string[] = ['address', 'ksmName', 'name'];
  ipalDataList;
  ipalCategoryList;

  constructor(
    private ipalDataService: IpalDataService,
    private ipalCategoryService: IpalCategoryService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.idCategory = +params['idIpalCategory'];
      this.getIpalDataByCategory(this.idCategory);
    })
  }

  // getIpalData(){
  //   this.ipalDataService.getIpalData().subscribe(
  //     ipalData => {
  //       this.ipalDataList = ipalData.json().data;
  //       // console.log(this.ipalDataList[0]);
  //     }
  //   );
  // }

  getIpalDataByCategory(idCategory){
    this.ipalDataService.getIpaldataByCategoryId(idCategory).subscribe(
      ipalData => {
        this.ipalDataList = ipalData.json().data;
        // console.log(this.ipalDataList);
      }
    );
  }

  showIpalDataList(idCategory){
    this.getIpalDataByCategory(idCategory);
  }

}
