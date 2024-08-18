export function Form(props) {
    const form = document.createElement('form');
    form.className = props.className || '';
    
    return form;
}
