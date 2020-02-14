import IWalkable from '../Simulator/IWalkable';
import ISimulatorEntity from '../Simulator/ISimulatorEntity';
import Vector2 from '../utils/Vector2';

export default abstract class AHuman implements IWalkable, ISimulatorEntity {
	position: Vector2;

	name: string;
}
