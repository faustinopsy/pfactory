export default class ComponenteInterface {
    add(componente) {
        throw new Error('Este método deve ser sobrescrito!');
    }

    remove(componente) {
        throw new Error('Este método deve ser sobrescrito!');
    }

    render() {
        throw new Error('Este método deve ser sobrescrito!');
    }
}
