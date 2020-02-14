import AHuman, { Vector2, ISimulatorObject } from './Human';

export default class Spawner<AHuman extends ISimulatorObject> {
	objectToBeSpawned : AHuman;

	position : Vector2;

	constructor(obj : AHuman, position : Vector2) {
		this.objectToBeSpawned = obj;
	}

	spawn() : AHuman {
		return this.objectToBeSpawned;
	}
}
