import IWalkable from '../Simulator/IWalkable';
import Vector2 from '../utils/Vector2';
import ASimulatorEntity from '../Simulator/ASimulatorEntity';

export default abstract class AHuman extends ASimulatorEntity implements IWalkable {
	position: Vector2;

	name: string;

	update() {

	}
}
