import { AfterViewInit, Component, ElementRef, Input, input, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from 'mapbox-gl';

@Component({
  selector: 'map-mini-map',
  templateUrl: './mini-map.component.html',
  styleUrl: './mini-map.component.css'

})
export class MiniMapComponent implements AfterViewInit {

  @Input() lngLat?: [number, number];
  @ViewChild('map') divMap?: ElementRef;
  public map?: Map;


  ngAfterViewInit(): void {
    if ( !this.divMap ) throw 'Element not found';
    if ( !this.lngLat ) throw 'Lat and Lng not provided';

    this.map = new Map({
      container: this.divMap?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lngLat, // starting position [lng, lat]
      zoom: 15, // starting zoom
      interactive: false,
    });

    new Marker()
    .setLngLat(this.lngLat)
    .addTo(this.map);

  }

}
