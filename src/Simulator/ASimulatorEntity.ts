import ISimulatorEntity from './ISimulatorEntity';
import IDrawable from './IDrawable';
import Vector2 from '../utils/Vector2';

export default abstract class ASimulatorEntity implements IDrawable {
	sprite : string = 'x';

	position : Vector2;

	width : number = 3;

	height : number = 3;

	objects : Array<ISimulatorEntity> = [];

	frame : number = 0;

	matrix : string[][] = [
		[],
	];

	updateEverything() {
		this.draw();
		this.update();
		this.objects.forEach((obj) => {
			obj.update();
		});
	}

	update() {

	}

	draw() {

	}
}
