import { Equipment } from './Equipment';
import { Inventory } from './Inventory';
import { Skills } from './Skills';

export class Player {

	id: Number = 123;

	characterName: String = "";
	level: Number = 1;

	inventory: Inventory;
	equipment: Equipment;
	skills: Skills;


	constructor(characterName: String) {
		this.id = this.getNewID();
	}


	getNewID() {
		return 123;
	}
}
