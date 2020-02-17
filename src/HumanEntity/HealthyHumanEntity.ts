import chalk from 'chalk';
import AHuman from './AHuman';
import Vector2 from '../utils/Vector2';
import Transform from '../Simulator/Transform';
import TerminalRenderer from '../Simulator/TerminalRenderer';

/**
 * A simple healthy human.
 */
export default class HealthyHumanEntity extends AHuman {
	position : Vector2;
}
