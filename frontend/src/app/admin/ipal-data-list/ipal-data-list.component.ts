import { Component, OnInit, ViewChild } from '@angular/core';
import { IpalDataService } from '../../services/ipal-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IpalCategoryService } from '../../services/ipal-category.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatTableDataSource, MatPaginator} from '@angular/material';

@Component({
  selector: 'app-ipal-data-list',
  templateUrl: './ipal-data-list.component.html',
  styleUrls: ['./ipal-data-list.component.css']
})
export class IpalDataListComponent implements OnInit {

  ipalDataColumns: string[] = ['idIpalData', 'name', 'address', 'longitude', 'latitude', 'action'];
  ipalDataList = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator : MatPaginator;

  constructor(
    private ipalDataService: IpalDataService
  ) { }

  ngOnInit() {
    this.getIpalDataList();
  }

  getIpalDataList(){
    this.ipalDataService.getIpalData().subscribe(
      ipalData => {
        this.ipalDataList = ipalData.json().data;
        this.ipalDataList.paginator = this.paginator;
      }
    );
  }

  applyFilter(filterValue: String){
    this.ipalDataList.filter = filterValue.trim().toLowerCase();
  }

  delete(ipalData){
    console.log(ipalData);
  }

  viewDetail(ipalData){
    console.log(ipalData);
  }
}
