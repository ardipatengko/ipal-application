import { Component, OnInit } from '@angular/core';

declare var ol: any;

@Component({
  selector: 'app-content-table-detail',
  templateUrl: './content-table-detail.component.html',
  styleUrls: ['./content-table-detail.component.css']
})

export class ContentTableDetailComponent implements OnInit {

  latitude: number = 51.678418;
  longitude: number = 7.809007;
  
  map: any;

  constructor() { }

  ngOnInit() {
    this.map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([this.longitude, this.latitude]),
        zoom: 8
      })
    });
  }

}
