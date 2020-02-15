import Simulator from './Simulator/Simulator';
import HealthyHumanEntity from './HumanEntity/HealthyHumanEntity';
import InputListener from './Simulator/InputListener';

const simulator = new Simulator(new InputListener());

simulator.start();

simulator.addHuman(new HealthyHumanEntity());
