import Simulator from './Simulator/Simulator';
import NormalHuman from './Humans/NormalHuman';

const simulator = new Simulator();

simulator.start();

simulator.addHuman(new NormalHuman());
