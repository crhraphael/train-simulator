import chalk from 'chalk';
import ISimulatorEntity from '../Simulator/ISimulatorEntity';
import ASimulatorEntity from '../Simulator/ASimulatorEntity';

export default class World extends ASimulatorEntity {
	constructor() {
		super();
		for (let i = 0; i < this.width; i++) {
			this.matrix[i] = [];
			for (let j = 0; j < this.height; j++) {
				this.matrix[i][j] = 'o';
			}
		}
	}

	addObject(obj : ASimulatorEntity) {
		this.objects.push(obj);
	}

	update() {
		console.log(chalk.blue(`World Frame ${this.frame}`));
		console.log(chalk.blue(`Humans: ${this.objects.length}`));
		this.frame++;
	}

	draw() {
		console.clear();

		process.stdout.write('\n');
		process.stdout.write('\n');

		this.matrix.map((l, line) => {
			l.map((tile, column) => {
				const char = (this.objects.filter((obj) => obj.position.x === line && obj.position.y === column)).length > 0
					? 'x'
					: 'o';
				process.stdout.write(char);
				return null;
			});
			process.stdout.write('\n');
			return null;
		});
	}
}
