export function Button(props) {
    const button = document.createElement('button');
    button.textContent = props.label;
    button.className = props.className || '';
    
    if (props.onClick) {
        button.addEventListener('click', props.onClick);
    }
    
    return button;
}