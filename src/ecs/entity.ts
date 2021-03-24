import {Component} from './component'

export abstract class Entity {
    protected _components: Component[] = [] // tracks components attached to this entity.

    //get full list of components
    public get Components(): Component[] {
        return this._components
    }

    //need to be able to add components
    public addComponent(component: Component): void {
        this._components.push(component)
        component.Entity = this  //attach entity to component on component side. *** 
    }

    // need to be able to get specific component
    public getComponent(component: Component): Component {
        // search for component in array
    }
}