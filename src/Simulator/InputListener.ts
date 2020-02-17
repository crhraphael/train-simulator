import { EventEmitter } from 'events';
import IInputListener from './IInputListener';

/**
 * Input Listener personalizado da aplicação.
 */
export default class InputListener implements IInputListener {
	eventEmitter : EventEmitter;

	constructor() {
		this.eventEmitter = new EventEmitter();

		this.eventEmitter.on('keypress', this.onKeyPress);
	}

	onKeyPress(data) : void {
		if (data.ctrl && data.name === 't') {
			process.exit(0);
		} else {
			process.stdout.write(JSON.stringify(data));
		}
	}
}
