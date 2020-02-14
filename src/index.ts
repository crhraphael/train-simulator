import Simulator from './Simulator';
import { NormalHuman } from './Human';

const simulator = new Simulator();

simulator.start();

simulator.addHuman(new NormalHuman());
