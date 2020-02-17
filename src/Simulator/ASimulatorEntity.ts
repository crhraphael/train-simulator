import IDrawable from './IDrawable';
import IUpdatable from './IUpdatable';
import ARenderer from './ARenderer';
import Transform from './Transform';

export default abstract class ASimulatorEntity implements IUpdatable, IDrawable {
	sprite : string[][] = [[]];

	transform : Transform;

	frame : number = 0;

	renderer : ARenderer;

	constructor(transform : Transform, renderer? : ARenderer) {
		this.transform = transform;
		this.renderer = renderer;
	}

	update() {}
}
