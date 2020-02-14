import chalk from 'chalk';
import Spawner from './Spawner';
import { ISimulatorObject } from './Human';

export default class World {
	width : number = 100;

	height : number = 100;

	objects : Array<ISimulatorObject> = [];

	frame : number = 0;

	addObject(obj : ISimulatorObject) {
		this.objects.push(obj);
	}

	update() {
		console.log(chalk.blue(`World Frame ${this.frame}`));
		console.log(chalk.blue(`Humans: ${this.objects.length}`));
		this.frame++;
	}
}
