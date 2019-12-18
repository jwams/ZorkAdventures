import { Component, OnInit } from '@angular/core';
import { Map } from '../../../Models/Map';
import { Cell } from '../../../Models/Cell';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})

export class EditorComponent implements OnInit {

	map: Map = new Map(16);

  currentCellX: number;
  currentCellY: number;

  currentCell: Cell;

	constructor() {
		console.log(this.map.mapLayout[9][9]);
	}

	ngOnInit() {
		this.setup();
	}

  selectNewCell(x: number, y: number) {

    // Handle border
    this.map.unclickAllCells();
    this.map.mapLayout[x][y].cellClicked = !this.map.mapLayout[x][y].cellClicked;

    this.currentCellX = x;
    this.currentCellY = y;

    this.loadCell(this.currentCellX, this.currentCellY);
  }

  loadCell(x: number, y: number) {
    this.currentCell = this.map.mapLayout[x][y];
    this.currentCell.enterText = "Blah";
    this.saveCell(this.currentCell, x, y);

  }

  saveCell(cell: Cell, x: number, y: number) {
    this.map.mapLayout[x][y] = cell;

    // Unload the cell
    //this.currentCell = null;
  }

	setup() {
		console.log("Setup HIT");
	}

}
