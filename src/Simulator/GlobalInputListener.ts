import readline from 'readline';
import { EventEmitter } from 'events';
import IInputListener from './IInputListener';

/**
 * Event Listener Global do Simulador.
 */
export default class GlobalInputListener implements IInputListener {
	private static instance : GlobalInputListener;

	eventEmitter : EventEmitter;

	simulatorInputListener : IInputListener;

	private constructor(inputListener : IInputListener) {
		this.simulatorInputListener = inputListener;

		readline.emitKeypressEvents(process.stdin);
		// process.stdin.setRawMode(true);

		process.stdin.on('keypress', this.onKeyPress);
		GlobalInputListener.instance = this;
	}

	static GetInstance(inputListener? : IInputListener) {
		if (!GlobalInputListener.instance) {
			GlobalInputListener.instance = new GlobalInputListener(inputListener);
		}

		return GlobalInputListener.instance;
	}

	onKeyPress(key, data) : void {
		GlobalInputListener.GetInstance().simulatorInputListener.eventEmitter.emit('keypress', data);
	}
}
