import chalk from 'chalk';
import AHuman from './AHuman';
import Vector2 from '../utils/Vector2';

/**
 * A simple healthy human.
 */
export default class HealthyHumanEntity extends AHuman {
	position : Vector2;

	readonly sprite : string = chalk.hex('77ddff')('H');

	constructor(position? : Vector2) {
		super();
		this.position = position || new Vector2(1, 1);
	}

	draw() {
		return this.sprite;
	}
}
