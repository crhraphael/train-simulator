import Vector2 from "../utils/Vector2";

export default class Transform {
  position : Vector2;

  setPosition(position: Vector2)
  setPosition(x: number, y : number)
  setPosition(x: any, y? : number) {
    const position : Vector2 = (x.constructor.name === 'Vector2') ? x : null;

    if(position) {
      this.position = position
    } else {
      this.position.x = x;
      this.position.y = y;
    }
  }
}