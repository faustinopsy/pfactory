import { Button } from './componentes/Button.js';
import { Input } from './componentes/Input.js';
import { Password } from './componentes/Password.js';
import { Checkbox } from './componentes/Checkbox.js';
import { Form } from './componentes/Form.js';

export function criaComponente(type, props) {
    const componente = {
        form: Form(props),
        button: Button(props),
        input:  Input(props),
        password:  Password(props),
        checkbox: Checkbox(props),
    }

    return componente[type]
}
