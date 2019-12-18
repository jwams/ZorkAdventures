import { Item } from './Item';
import { Actions } from './Actions'

export class Cell {

	id: Number;
	x: Number;
	y: Number

	enterText: String = "";
	items:Item[];
	options:Actions;

	cellUp: Cell;
	cellDown: Cell;
	cellLeft: Cell;
	cellRight: Cell;

	cellClicked: boolean = false;

	constructor(id: Number, x: Number, y:Number) {
		this.id = id;
		this.x = x;
		this.y = y;
	}
}
