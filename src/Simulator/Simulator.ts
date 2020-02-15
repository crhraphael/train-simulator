import World from '../World/World';
import AHuman from '../HumanEntity/AHuman';
import IInputListener from './IInputListener';
import GlobalInputListener from './GlobalInputListener';

export default class Simulator {
	timestep : number = 1000;

	humans : Array<AHuman> = [];

	world : World;

	inputListener : IInputListener;

	constructor(inputListener : IInputListener) {
		this.world = new World();
		this.inputListener = inputListener;

		/**
		 * Initialize Singleton GlobalInputListener
		 */
		GlobalInputListener.GetInstance(this.inputListener);
	}

	addHuman(human : AHuman) {
		this.humans.push(human);
	}

	start() {
		setInterval(() => {
			this.world.updateEverything();
			if (this.humans.length > 0) {
				this.world.addObject(this.humans.shift());
			}
		}, this.timestep);
	}
}
