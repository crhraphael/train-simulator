import chalk from 'chalk';
import ISimulatorEntity from '../Simulator/ISimulatorEntity';

export default class World {
	width : number = 100;

	height : number = 100;

	objects : Array<ISimulatorEntity> = [];

	frame : number = 0;

	matrix : Array<Array<number>> = [
		[],
	];

	constructor() {
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
