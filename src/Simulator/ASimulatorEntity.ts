import IDrawable from './IDrawable';
import IUpdatable from './IUpdatable';
import GlobalRenderer from './GlobalRenderer';
import ARenderer from './ARenderer';
import Transform from './Transform';

export default abstract class ASimulatorEntity implements IUpdatable, IDrawable {
	sprite : string = 'x';

	transform : Transform;

	frame : number = 0;

	renderer : ARenderer;

	constructor(transform : Transform) {
		this.transform = transform;
		this.renderer = GlobalRenderer.GetInstance().getRenderer();
	}

	update() {
		this.renderer.draw(this.transform);
	}
}
