import ARenderer from './ARenderer';

export default class CanvasRenderer2D extends ARenderer {
	width : number = 0;

	height : number = 0;

	constructor(width : number, height : number) {
		super();
		this.width = width;
		this.height = height;
	}
}
