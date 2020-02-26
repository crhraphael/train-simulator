/* eslint-disable @typescript-eslint/no-unused-expressions */
import Simulator from './Simulator/Simulator';
import HealthyHumanEntity from './HumanEntity/HealthyHumanEntity';
import InputListener from './Simulator/InputListener';
import Transform from './Simulator/Transform';
import TerminalRenderer from './Simulator/TerminalRenderer';


export default {
	start() {
		const simulator = new Simulator(new InputListener());

		const human = [
			[' ', ' ', ' '],
			[' ', 'O', ' '],
			['/', 'T', '\\'],
			[' ', 'M', ' '],
			['/', ' ', '\\'],
		];
		simulator.addEntity(new HealthyHumanEntity(new Transform(8, 4), new TerminalRenderer(human)));
		simulator.start();

		'#if TERMINAL_BUILD';
		process.on('exit', (code) => {
			process.stdout.write('\u001b[?25h');
			console.clear();
		});
		'#endif;';

		simulator.start();
	},
};
// simulator.addHuman(new HealthyHumanEntity());
