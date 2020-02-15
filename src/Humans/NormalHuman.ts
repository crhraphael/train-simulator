import HealthyHuman from './HealthyHuman';
import Vector2 from '../utils/Vector2';

export default class NormalHuman extends HealthyHuman {
	position : Vector2;

	constructor(position? : Vector2) {
		super();
		this.position = position || new Vector2(1, 1);
	}
}
