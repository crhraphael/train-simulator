import terminal, { Terminal } from 'terminal-kit'
import Transform from './Transform';

export default class ARenderer {
  window : any;
  constructor() {
    this.window = terminal.createTerminal({
      appId: 'TrainSimulatorWindow',
      appName: 'Train Simulator Window'
    })
  }

  draw(transform : Transform) {

  }
}