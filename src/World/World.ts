import chalk from 'chalk';
import ASimulatorEntity from '../Simulator/ASimulatorEntity';
import Transform from '../Simulator/Transform';
// import Mathf from '../utils/Mathf';

export default class World extends ASimulatorEntity {
	objects : Array<ASimulatorEntity> = [];

	width : number = 3;

	height : number = 3;

	matrix : string[][] = [[]];

	constructor(transform : Transform) {
		super(transform);
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
		super.update();
		// console.log(chalk.blue(`World Frame ${this.frame}`));
		// console.log(chalk.blue(`Humans: ${this.objects.length}`));

		this.objects.forEach((obj) => {
			if (obj.update) {
				obj.update();
			}
		});
		this.frame++;
	}

	draw() {
		process.stdout.write('\n');

		// for (let line = 0; line <= this.height; line++) {
		// 	for (let column = 0; column <= this.width; column++) {
		// 		// const previousLine = Mathf.clamp(line - 1, 0, line);
		// 		// const previousColumn = Mathf.clamp(column - 1, 0, column);

		// 		let char = chalk.greenBright('o');
		// 		// process.stdout.cursorTo(previousLine, previousColumn);
		// 		// process.stdout.write(char);

		// 		process.stdout.cursorTo(line, column);

		// 		const objectsInPosition = this.objects.filter((obj) => obj.transform.position.x === line && obj.transform.position.y === column);
		// 		if (objectsInPosition.length) {
		// 			const firstObject = objectsInPosition[0];
		// 			char = firstObject.sprite
		// 				? firstObject.sprite
		// 				: char;
		// 		}
		// 		process.stdout.write(char);
		// 	}
		// }
	}
}
