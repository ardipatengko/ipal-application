import { Component, OnInit } from '@angular/core';
import { IpalDataService } from '../services/ipal-data.service';
import { IpalData } from '../models/ipal-data-model';
import { Observable } from 'rxjs';

export interface PeriodicElement{
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-content-table',
  templateUrl: './content-table.component.html',
  styleUrls: ['./content-table.component.css']
})
export class ContentTableComponent implements OnInit {
  ipalDataColumns: string[] = ['bkmName', 'district', 'province', 'category'];
  ipalDataList;

  constructor(
    private ipalDataService: IpalDataService
  ) { }

  ngOnInit() {
    this.getIpalData();
  }

  getIpalData(){
    this.ipalDataService.getIpalData().subscribe(
      ipalData => {
        this.ipalDataList = ipalData.json().data;
        // console.log(this.ipalDataList[0]);
      }
    );
  }

}
