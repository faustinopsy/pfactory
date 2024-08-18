# Padrão Factory em JavaScript Puro

## Visão Geral

O Padrão Factory é um padrão de design criacional que fornece uma maneira de criar objetos, abstraindo a lógica de instância do código do cliente. Em vez de instanciar objetos diretamente, o Padrão Factory utiliza uma função ou método de fábrica para criar instâncias de várias classes ou componentes, dependendo do tipo solicitado pelo cliente.

## Quando Usar o Padrão Factory

O Padrão Factory é especialmente útil em cenários onde:

- Você tem uma interface comum ou classe base, e deseja delegar a responsabilidade de criar instâncias para um componente separado.
- O tipo ou a configuração exata do objeto que precisa ser criado é determinada em tempo de execução.
- Você deseja simplificar o código do cliente removendo a lógica relacionada à criação de objetos.
- Você precisa criar diferentes tipos de objetos que compartilham uma estrutura semelhante, mas possuem variações na sua implementação.

### Exemplos do Mundo Real

1. **Biblioteca de Componentes de UI**: Ao desenvolver uma biblioteca de UI onde diferentes tipos de componentes (botões, inputs, checkboxes, etc.) precisam ser criados dinamicamente com base em entrada do usuário ou configuração.
2. **Desenvolvimento de Jogos**: Ao criar diferentes tipos de objetos de jogo (por exemplo, inimigos, itens, obstáculos) que compartilham comportamentos comuns, mas diferem em atributos ou métodos específicos.
3. **Parsers de Dados**: Ao processar dados em diferentes formatos (JSON, XML, CSV) e cada formato requer um objeto parser diferente.


O Padrão Factory é uma ferramenta poderosa no desenvolvimento de software que ajuda a desacoplar a lógica de criação de objetos da lógica principal da aplicação. Usando esse padrão, você pode facilmente estender sua aplicação para suportar novos tipos de componentes ou objetos sem alterar o código do cliente, promovendo a modularidade e a manutenibilidade.
