import Vector2 from './utils/Vector2';
import ISimulatorEntity from './Simulator/ISimulatorEntity';

export default class Spawner<SimulatorEntity extends ISimulatorEntity> {
	objectToBeSpawned : SimulatorEntity;

	position : Vector2;

	constructor(obj : SimulatorEntity, position : Vector2) {
		this.objectToBeSpawned = obj;
	}

	spawn() : SimulatorEntity {
		return this.objectToBeSpawned;
	}
}
