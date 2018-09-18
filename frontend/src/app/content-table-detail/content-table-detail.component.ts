import { Component, OnInit } from '@angular/core';
import { IpalDataService } from '../services/ipal-data.service';

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
  
  map: any;

  constructor(
    private ipalDataService: IpalDataService
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
  }

  getIpalDataAll(){
    this.ipalDataService.getIpalData().subscribe(
      ipalData => {
        this.ipalDataList = ipalData.json().data;
        console.log(this.ipalDataList);
      }
    );
  }
}
