import Simulator from './Simulator/Simulator';
import NormalHuman from './Humans/NormalHuman';
import InputListener from './Simulator/InputListener';

const simulator = new Simulator(new InputListener());

simulator.start();

simulator.addHuman(new NormalHuman());
