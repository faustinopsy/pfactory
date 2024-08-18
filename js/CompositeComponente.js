import ComponenteInterface from './ComponenteInterface.js'
export class CompositeComponente extends ComponenteInterface {
    constructor() {
        super();
        this.children = [];
    }

    add(component) {
        this.children.push(component);
    }

    remove(component) {
        this.children = this.children.filter(child => child !== component);
    }

    render() {
        const fragment = document.createDocumentFragment();
        this.children.forEach(child => {
            fragment.appendChild(child.render());
        });
        return fragment;
    }
}
