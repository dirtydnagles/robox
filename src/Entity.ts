import { ProgramInfo } from "./Render";
import { Sprite } from "./Sprite" 

export class Entity {
    sprite: Sprite
    pos: {
        x: number;
        y: number;
    }
    vel: {
        x: number;
        y: number;
    }

    update() {
        
    }

    render(program_info: ProgramInfo) {
        this.sprite.render(program_info, this.pos.x, this.pos.y);
    }

    onCollision() {

    }

    constructor(pos: {x: number, y: number}, vel: {x: number, y: number}, sprite: Sprite){
        this.pos = pos
        this.vel = vel
        this.sprite = sprite
    }
}