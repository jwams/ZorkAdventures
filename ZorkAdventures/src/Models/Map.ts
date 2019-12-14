import { Cell } from './Cell';
//import * from './Cell';
//import Cell = require("Cell");

export class Map {
	
	private _mapLayout: Cell[][];
	size: Number;
	
	get mapLayout(): Cell[][] {
		return this.mapLayout;
	}
	
	set mapLayout(cell: Cell[][]) {
		console.log("HIT");
		console.log(this.size);
		//this.mapLayout = [this.size];

        for(var i: number = 0; i < this.size; i++) {
            //this.mapLayout[i] = [];
            for(var j: number = 0; j< this.size; j++) {
                this.mapLayout[i][j] = new Cell();
            }
        }
	}
	
	constructor(size) {
		this.size = size;
	}
}