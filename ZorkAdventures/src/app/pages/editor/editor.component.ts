import { Component, OnInit } from '@angular/core';
import { Map } from '../../../Models/Map';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})

export class EditorComponent implements OnInit {

	map: Map = new Map(16);

	constructor() {
		console.log(this.map.mapLayout[9][9]);
	}

	ngOnInit() {
		this.setup();
	}

  selectNewCell(x: number, y: number) {
    this.map.unclickAllCells();
    this.map.mapLayout[x][y].cellClicked = !this.map.mapLayout[x][y].cellClicked;
  }

	setup() {
		console.log("Setup HIT");
	}

}
