import AHuman, { NormalHuman, Vector2, IHuman } from './Human';
import World from './World';
import Spawner from './Spawner';

export default class Simulator {
	timestep : number = 1000;

	humans : Array<AHuman> = [];

	world : World;

	constructor() {
		this.world = new World();
	}

	addHuman(human : AHuman) {
		this.humans.push(human);
	}

	start() {
		setInterval(() => {
			this.world.update();
			if (this.humans.length > 0) {
				this.world.addObject(this.humans.shift());
			}
			// this.world.spawner = new Spawner<NormalHuman>(new NormalHuman(), new Vector2(1, 1));
		}, this.timestep);
	}
}
