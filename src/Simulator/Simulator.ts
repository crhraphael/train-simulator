import World from '../World/World';
import AHuman from '../Humans/AHuman';
import IInputListener from './IInputListener';
import InputListener from './InputListener';
import GlobalInputListener from './GlobalInputListener';

export default class Simulator {
	timestep : number = 1000;

	humans : Array<AHuman> = [];

	world : World;

	private globalInputListener : GlobalInputListener;

	inputListener : IInputListener;

	constructor(inputListener : IInputListener) {
		this.world = new World();
		this.inputListener = inputListener;
		this.globalInputListener = GlobalInputListener.GetInstance(this.inputListener);
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
			// this.world.spawner = new Spawner<NormalHuman>(new NormalHuman(), new Vector2(1, 1));
		}, this.timestep);
	}
}
