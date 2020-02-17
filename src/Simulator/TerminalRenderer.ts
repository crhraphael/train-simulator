import chalk from 'chalk';
import ARenderer from './ARenderer';

export default class TerminalRenderer extends ARenderer {
	width : number = 0;

	height : number = 0;

	matrix : string[][] = [[]];

	constructor()

	constructor(sprite : string[][])

	constructor(width : number, height : number)

	constructor(width : any = process.stdout.columns, height = process.stdout.rows) {
		super();

		const sprite = (Array.isArray(width))
			? width
			: null;

		this.matrix = sprite || [[]];

		this.width = sprite ? sprite.length : height;
		this.height = sprite ? sprite[sprite.length - 1].length : width;

		if (this.matrix[this.matrix.length - 1].length === 0) {
			for (let row = 0; row < this.width; row++) {
				this.matrix[row] = [];
				for (let column = 0; column < this.height; column++) {
					this.matrix[row][column] = chalk.bgGreen(' ');
				}
			}
		}
	}

	draw() {
		let stdout = '';
		process.stdout.cursorTo(0, 0);

		for (let row = 0; row < this.width; row++) {
			for (let column = 0; column < this.height; column++) {
				stdout += this.matrix[row][column];
			}
			stdout += '\n';
		}
		stdout = stdout.substr(0, stdout.length - 1);

		process.stdout.write(stdout);
		process.stdout.write('\u001b[?25l');
	}
}
