import { Component, OnInit } from '@angular/core';
import { IpalCategoryService } from '../services/ipal-category.service';
import { IpalDataService } from '../services/ipal-data.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {

  ipalDataList;
  ipalCategoryList;

  constructor(
    private ipalDataService: IpalDataService,
    private ipalCategoryService: IpalCategoryService
  ) { }

  ngOnInit() {
    this.getIpalCategory();
  }

  getIpalCategory(){
    this.ipalCategoryService.getIpalCategory().subscribe(
      ipalCategory => {
        this.ipalCategoryList = ipalCategory.json().data;
        console.log(this.ipalCategoryList[0]);
      }
    );
  }

  getIpalDataByCategory(idCategory){
    this.ipalDataService.getIpaldataByCategoryId(idCategory).subscribe(
      ipalData => {
        this.ipalDataList = ipalData.json().data;
        console.log(this.ipalDataList);
      }
    );
  }

  showIpalDataList(idCategory){
    this.getIpalDataByCategory(idCategory);
  }

}
