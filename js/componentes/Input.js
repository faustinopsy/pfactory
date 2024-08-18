export function Input(props) {
    const input = document.createElement('input');
    input.type = props.type || 'text';
    input.placeholder = props.placeholder || '';
    input.className = props.className || '';

    if (props.value) {
        input.value = props.value;
    }
    
    return input;
}
