class Level {
    entities: any[] = [];
    
    update() {
        for (let entity of this.entities) {
            entity.update();
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

    render() {
        for (let entity of this.entities) {
            entity.render();
        }
    }
}