import chalk from 'chalk';
import AHuman from './AHuman';
import Vector2 from '../utils/Vector2';
import Transform from '../Simulator/Transform';

/**
 * A simple healthy human.
 */
export default class HealthyHumanEntity extends AHuman {
	position : Vector2;

	readonly sprite : string = chalk.hex('77ddff')('H');


	constructor(transform : Transform) {
		super(transform);
		this.renderer
	}

	update() {
		super.update()
	}


	draw() {
		return this.sprite;
	}
}
