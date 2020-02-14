import { EventEmitter } from 'events';

export default interface IInputListener {
	eventEmitter : EventEmitter;
	onKeyPress(key, data) : void
}
