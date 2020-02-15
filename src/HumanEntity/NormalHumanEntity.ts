import AHealthyHuman from './AHealthyHuman';
import Vector2 from '../utils/Vector2';

export default class NormalHumanEntity extends AHealthyHuman {
	position : Vector2;

	constructor(position? : Vector2) {
		super();
		this.position = position || new Vector2(1, 1);
	}
}
