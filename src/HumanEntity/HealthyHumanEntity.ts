import chalk from 'chalk';
import AHuman from './AHuman';
import Vector2 from '../utils/Vector2';
import Transform from '../Simulator/Transform';
import TerminalRenderer from '../Simulator/TerminalRenderer';
import InputListener from '../Simulator/InputListener';
import ARenderer from '../Simulator/ARenderer';

/**
 * A simple healthy human.
 */
export default class HealthyHumanEntity extends AHuman {
	position : Vector2;

	il : InputListener;

	constructor(transform : Transform, renderer : ARenderer) {
		super(transform, renderer);
		this.il = new InputListener();
	}

	update() {
		this.transform.position.x += 1;
	}
}
