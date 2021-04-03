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

    // render(){
    //     this.sprite.render(this.pos);
    // }

    onCollision(){

    }

    constructor(pos: {x: number, y: number}, vel: {x: number, y: number}, sprite: Sprite){
        this.pos = pos
        this.vel = vel
        this.sprite = sprite
    }
}