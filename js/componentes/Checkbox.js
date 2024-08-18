export function Checkbox(props) {
    const label = document.createElement('label');
    label.className = props.className || '';
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    
    if (props.checked !== undefined) {
        checkbox.checked = props.checked;
    }
    
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(props.label));
    
    return label;
}
