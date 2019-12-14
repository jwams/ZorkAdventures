import { Cell } from './Cell';
//import * from './Cell';
//import Cell = require("Cell");

export class Map {
	
	public mapLayout: Object;
	
	constructor(size) {
		this.mapLayout = [size];
		
		for(var i: number = 0; i < size; i++) {
            this.mapLayout[i] = [];
            for(var j: number = 0; j< size; j++) {
                this.mapLayout[i][j] = new Cell();
            }
        }
	}
}