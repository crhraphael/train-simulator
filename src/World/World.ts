import chalk from 'chalk';
import ISimulatorEntity from '../Simulator/ISimulatorEntity';
import ASimulatorEntity from '../Simulator/ASimulatorEntity';

export default class World extends ASimulatorEntity {
	width : number = 100;

	height : number = 100;

	objects : Array<ISimulatorEntity> = [];

	frame : number = 0;

	matrix : Array<Array<number>> = [
		[],
	];

	constructor() {
		super();
		this.matrix = [];
	}

	addObject(obj : ISimulatorEntity) {
		this.objects.push(obj);
	}

	update() {
		console.log(chalk.blue(`World Frame ${this.frame}`));
		console.log(chalk.blue(`Humans: ${this.objects.length}`));
		this.frame++;
	}

	draw() {

	}
}
