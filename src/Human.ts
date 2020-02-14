export default abstract class AHuman implements IWalkable, IHuman, ISimulatorObject {
	position: Vector2;

	name: string;
}

export class Vector2 {
	x : number;

	y : number;

	constructor(x : number, y : number) {
		this.x = x;
		this.y = y;
	}
}

export abstract class HealthyHuman extends AHuman {}

export class NormalHuman extends HealthyHuman {}

export interface IWalkable {}

export interface IMovable {
	velocity : number
	force : Vector2
}

export interface IHuman {
	name : string
}

export interface IDrawable {
	sprite : any
}

export interface ISimulatorObject {
	position : Vector2
}
