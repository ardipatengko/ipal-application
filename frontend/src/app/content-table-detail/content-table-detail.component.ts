import { Component, OnInit } from '@angular/core';
import { IpalDataService } from '../services/ipal-data.service';
import { IpalCategoryService } from '../services/ipal-category.service';

declare var ol: any;

@Component({
  selector: 'app-content-table-detail',
  templateUrl: './content-table-detail.component.html',
  styleUrls: ['./content-table-detail.component.css']
})

export class ContentTableDetailComponent implements OnInit {

  latitude: number = -6.21462; //Jakarta
  longitude: number = 106.84513; //Jakarta

  ipalDataList;
  ipalCategoryList;
  
  map: any;

  constructor(
    private ipalDataService: IpalDataService,
    private ipalCategoryService: IpalCategoryService
  ) { }

  ngOnInit() {
    // this.map = new ol.Map({
    //   target: 'map',
    //   layers: [
    //     new ol.layer.Tile({
    //       source: new ol.source.OSM()
    //     })
    //   ],
    //   view: new ol.View({
    //     center: ol.proj.fromLonLat([this.longitude, this.latitude]),
    //     zoom: 8
    //   })
    // });
    this.getIpalDataAll();
    this.getIpalCategory();
  }

  getIpalCategory(){
    this.ipalCategoryService.getIpalCategory().subscribe(
      ipalCategory => {
        this.ipalCategoryList = ipalCategory.data;
      }
    );
  }

  getIpalDataAll(){
    this.ipalDataService.getIpalData().subscribe(
      ipalData => {
        this.ipalDataList = ipalData.data;
        console.log(this.ipalDataList);
      }
    );
  }

  onMouseOver(infoWindow, gm){
    if(gm.lastOpen != null){
      gm.lastOpen.close();
    }
    gm.lastOpen = infoWindow;
    infoWindow.open();
  }
}
