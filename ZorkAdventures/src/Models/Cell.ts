import { Item } from './Item';
import { Actions } from './Actions'

export class Cell {

	id: number;
	x: number;
	y: number

	enterText: String = "";
	items:Item[];
	options:Actions;

	cellUp: Cell;
	cellDown: Cell;
	cellLeft: Cell;
	cellRight: Cell;

	cellClicked: boolean = false;

	constructor(id: number, x: number, y: number) {
		this.id = id;
		this.x = x;
		this.y = y;
	}
}
