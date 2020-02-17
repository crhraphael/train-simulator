import IInputListener from './IInputListener';
import GlobalInputListener from './GlobalInputListener';
import ASimulatorEntity from './ASimulatorEntity';
import GlobalRenderer from './GlobalRenderer';

/**
 * Estrutura principal do simulador.
 */
export default class Simulator {
	timestep : number = 1000;

	entities : Array<ASimulatorEntity> = []

	renderer : any;

	inputListener : IInputListener;

	constructor(inputListener : IInputListener) {
		console.clear();
		console.log('simulation started')

		this.inputListener = inputListener;

		GlobalRenderer.GetInstance()

		/**
		 * Initialize Singleton GlobalInputListener
		 */
		GlobalInputListener.GetInstance(this.inputListener);
	}

	addEntity(entity : ASimulatorEntity) {
		this.entities.push(entity);
	}

	start() {
		setInterval(() => {
			this.update()

		}, this.timestep);
	}

	update() {
		this.entities.forEach((entity) => {
			entity.update()
		})
	}
}
