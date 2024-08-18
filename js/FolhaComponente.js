import ComponenteInterface from './ComponenteInterface.js'
import { criaComponente } from './Factory.js';
export class FolhaComponente extends ComponenteInterface {
    constructor(type, props) {
        super();
        this.element = criaComponente(type, props);
    }

    render() {
        return this.element;
    }
}
