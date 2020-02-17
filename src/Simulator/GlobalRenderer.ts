import ARenderer from './ARenderer';
import TerminalRenderer from './TerminalRenderer';

/**
 * Renderizador do Simulador.
 */
export default class GlobalRenderer {
	private static instance : GlobalRenderer;

	private renderer : ARenderer;

	private constructor() {
		GlobalRenderer.instance = this;
		this.renderer = new TerminalRenderer(process.stdout.columns, process.stdout.rows);
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
