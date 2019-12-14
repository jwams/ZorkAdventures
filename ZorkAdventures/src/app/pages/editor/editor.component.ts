import { Component, OnInit } from '@angular/core';

import { Map } from '../../../Models/Map';
//import * from '../../../Models/Map';
//import Map = require('../../../Models/Map');

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
	
	map: Map = new Map(10);
	
	index: Number = 1;
	check: boolean = false;
	
	constructor() {
		console.log(this.map.mapLayout[9][9]);
	}

	ngOnInit() {
		this.setup();
	}
	
	
	setup() {
		console.log("Setup HIT");
	}

}
