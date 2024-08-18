function criaCss() {
    const style = document.createElement('style');
    style.setAttribute('type','text/css');

    const styles = `
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .form-login {
            max-width: 300px;
            margin: 10% auto;
            background: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .input-field, .password-field {
            width: 93%;
            padding: 10px;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }
        .btn-primary {
            width: 100%;
            padding: 10px;
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        .btn-primary:hover {
            background-color: #0056b3;
        }
        .checkbox-field {
            display: flex;
            align-items: center;
            gap: 10px;
        }
    `;

    style.appendChild(document.createTextNode(styles));
    document.head.appendChild(style);
}

export { criaCss };
