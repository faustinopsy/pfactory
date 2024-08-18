export default class MonitorDeRenderizacao {
    constructor() {
      this.resultados = [];
    }
  
    medirTempo(nomeComponente, metodoRenderizacao) {
      console.time(`Renderização do componente: ${nomeComponente}`);
      const resultado = metodoRenderizacao;
      console.timeEnd(`Renderização do componente: ${nomeComponente}`);
      return resultado;
    }
  }