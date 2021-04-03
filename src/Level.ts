import { ProgramInfo, preRender } from "./Render";
import { Entity } from "./Entity";

class Level {
    entities: Entity[] = [];

    // constructor() {}

    spawn(entity: Entity, x: number, y: number) {
        entity.pos = {x, y};
        this.entities.push(entity);
    }
    
    update(delta: number) {
        for (let entity of this.entities) {
            // entity.update(delta);
            entity.update();
        }

        for (let entity of this.entities) {
            for (let other of this.entities) {
                // if (entity === other || !entity.isColliding(other)) {
                if (entity === other) {
                    continue;
                }
                // entity.onCollision(other);
                entity.onCollision();
            }
        }
    }

    render(program_info: ProgramInfo) {
        preRender(program_info);
        for (let entity of this.entities) {
            entity.render(program_info);
        }
    }
}

export { Level };