import ISimulatorEntity from './ISimulatorEntity';
import IDrawable from './IDrawable';
import Vector2 from '../utils/Vector2';

export default abstract class ASimulatorEntity implements ISimulatorEntity, IDrawable {
	sprite : string = 'x';

	position : Vector2;

	updateEverything() {
		this.update();
		this.draw();
	}

	update() {

	}

	draw() {

	}
}
