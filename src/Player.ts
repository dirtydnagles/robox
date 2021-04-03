import { Sprite } from "./Sprite"
import { Entity } from "./Entity"

export class Player extends Entity {
    name: String

    constructor(name: String, pos: {x: number, y: number}, vel: {x: number, y: number}, sprite: Sprite ){
        super(pos, vel, sprite)
        this.name = name
    }

}