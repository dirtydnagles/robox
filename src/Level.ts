import { ProgramInfo, preRender } from "./Render";

class Level {
    entities: any[] = [];

    // constructor() {}
    
    update(delta: number) {
        for (let entity of this.entities) {
            entity.update(delta);
        }

        for (let entity of this.entities) {
            for (let other of this.entities) {
                if (entity === other || !entity.isColliding(other)) {
                    continue;
                }
                entity.onCollision(other);
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