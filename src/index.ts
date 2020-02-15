import Simulator from './Simulator/Simulator';
import NormalHumanEntity from './HumanEntity/NormalHumanEntity';
import InputListener from './Simulator/InputListener';

const simulator = new Simulator(new InputListener());

simulator.start();

simulator.addHuman(new NormalHumanEntity());
