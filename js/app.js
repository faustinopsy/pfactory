import { criaComponente } from './Factory.js';
import { criaCss } from './criaStyles.js';
import MonitorDeRenderizacao from './MonitorDeRenderizacao.js';
export function App() {
    const monitora = new MonitorDeRenderizacao();
    criaCss();
    const root = document.getElementById('app');

    const inputs = [
        { type: 'input', placeholder: 'Insira seu nome', className: 'input-field' },
        { type: 'password', placeholder: 'Insira sua senha', className: 'password-field' },
        { type: 'button', label: 'Enviar', className: 'btn-primary', onClick: () => alert('Enviado com sucesso!') },
        { type: 'checkbox', label: 'Aceito os termos', className: 'checkbox-field', checked: true }
    ];
    const formulario = criaComponente('form', {className: 'form-login'});
    inputs.forEach(elemento => {
        const element = monitora.medirTempo(elemento.className, criaComponente(elemento.type, elemento));
        formulario.appendChild(element);
    });
    root.appendChild(formulario);
}
App();