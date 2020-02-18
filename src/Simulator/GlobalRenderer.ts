import ARenderer from './ARenderer';
import TerminalRenderer from './TerminalRenderer';
import CanvasRenderer2D from './CanvasRenderer2D';

/**
 * Renderizador do Simulador.
 */
export default class GlobalRenderer {
	private static instance : GlobalRenderer;

	private renderer : ARenderer;

	private constructor() {
		GlobalRenderer.instance = this;
		this.renderer = new CanvasRenderer2D(512, 512);
	}

	static GetInstance() {
		if (!GlobalRenderer.instance) {
			GlobalRenderer.instance = new GlobalRenderer();
		}

		return GlobalRenderer.instance;
	}

	update() {
		if (this.renderer) {
			this.renderer.draw();
		}
	}

	getRenderer() : ARenderer {
		return this.renderer;
	}
}
