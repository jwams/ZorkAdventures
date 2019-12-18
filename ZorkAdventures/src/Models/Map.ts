import { Cell } from './Cell';
//import * from './Cell';
//import Cell = require("Cell");

export class Map {

	public mapLayout: Object;

	idCounter: number = 0;
	size: Number;

	constructor(size) {

		this.size = size;

		this.mapLayout = [this.size];

		for(var i: number = 0; i < this.size; i++) {
        this.mapLayout[i] = [];
        for(var j: number = 0; j< this.size; j++) {
            this.mapLayout[i][j] = new Cell(this.idCounter, i, j);
						this.idCounter++;
        }
    }
	}

	unclickAllCells() {
		for(var i: number = 0; i < this.size; i++) {
        for(var j: number = 0; j< this.size; j++) {
            this.mapLayout[i][j].cellClicked = false;
        }
    }
	}



}
