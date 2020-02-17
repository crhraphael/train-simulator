import ARenderer from "./ARenderer";
import chalk from "chalk";
import Transform from "./Transform";

export default class TerminalRenderer extends ARenderer {
	width : number = 0;

	height : number = 0;

	matrix : string[][] = [[]];

  constructor() {
    super()
		for (let i = 0; i < this.width; i++) {
			this.matrix[i] = [];
			for (let j = 0; j < this.height; j++) {
				this.matrix[i][j] = chalk.bgGreen(' ');
			}
		}
  }

  createTemplate(string) {

  }

  draw() {
  }
}