import { Component, OnInit } from '@angular/core';
import { IpalDataService } from '../../services/ipal-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IpalCategoryService } from '../../services/ipal-category.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-ipal-data-list',
  templateUrl: './ipal-data-list.component.html',
  styleUrls: ['./ipal-data-list.component.css']
})
export class IpalDataListComponent implements OnInit {

  ipalDataColumns: string[] = ['address', 'ksmName', 'name'];
  ipalDataList = new MatTableDataSource();

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
      }
    );
  }

  applyFilter(filterValue: String){
    this.ipalDataList.filter = filterValue.trim().toLowerCase();
  }
}
