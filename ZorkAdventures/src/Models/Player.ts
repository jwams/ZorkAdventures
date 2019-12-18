import { Equipment } from './Equipment';
import { Inventory } from './Inventory';
import { Skills } from './Skills';

export class Player {

	id: number = 123;

	characterName: string = "";
	level: number = 1;

	inventory: Inventory;
	equipment: Equipment;
	skills: Skills;


	constructor(characterName: string) {
		this.id = this.getNewID();
	}

	// [TO-DO] Write actual ID feature
	getNewID() {
		return 123;
	}
}
