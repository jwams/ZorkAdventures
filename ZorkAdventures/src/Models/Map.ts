require('./Cell.ts');

export class Map {
	
	private mapLayout: Cell[][];
	size: int;
	
	get mapLayout(): Cell[][] {
		return this.mapLayout;
	}
	
	set mapLayout(size: int) {
		console.log("HIT");
		console.log(size);
		this.mapLayout = [this.size];

        for(var i: number = 0; i < this.size; i++) {
            this.mapLayout[i] = [];
            for(var j: number = 0; j< this.size; j++) {
                this.mapLayout[i][j] = new Cell();
            }
        }
	}
	
	constructor(size) {
		this.size = size;
		this.mapLayout = 16;
	}
}