import IDrawable from './IDrawable';
import IUpdatable from './IUpdatable';
import Vector2 from '../utils/Vector2';

export default abstract class ASimulatorEntity implements IUpdatable, IDrawable {
	sprite : string = 'x';

	position : Vector2;

	width : number = 3;

	height : number = 3;

	frame : number = 0;

	matrix : string[][] = [
		[],
	];

	updateEverything() {
		this.draw();
		this.update();
	}

	update() {

	}

	draw() {

	}
}
