import { CompositeComponente } from './CompositeComponente.js';
import { FolhaComponente } from './FolhaComponente.js';
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
    const formulario = new CompositeComponente(); 
    inputs.forEach(elemento => {
        const folha = new FolhaComponente(elemento.type, elemento);
        const monitoredLeaf = monitora.medirTempo(elemento.className, folha); 
        formulario.add(monitoredLeaf);
    });
    root.appendChild(formulario.render());
}
App();