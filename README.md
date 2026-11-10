# Camunda Modeler – Multiple Task Change Element

![Compatible with Camunda Modeler version 5](https://img.shields.io/badge/Modeler_Version-5.0.0+-blue.svg) [![Plugin Type](https://img.shields.io/badge/Plugin_Type-BPMN_(Camunda_Platform_7)-orange.svg)](#)

🇬🇧 English | [🇧🇷 Português](#português)

## English

A plugin for [Camunda Modeler](https://camunda.com/download/modeler/) that shows the **Change element** button in the context pad when **multiple elements** are selected, so you can change the type of all of them at once.

By default, the Modeler only shows this menu when a single element is selected.

### Usage

1. Select two or more elements (Shift + click or area selection).
2. Click the wrench icon (**Change element**) in the floating context pad.
3. Pick the new type from the menu (the same options the Modeler offers for a single element).

The button follows these rules:

- If the selection contains at least one task, the menu works as the task's **Change element** menu and applies **only to the tasks**. Everything else in the selection (connectors, gateways, events...) is ignored and left unchanged. Example: selecting 3 tasks and 2 connectors lets you change the 3 tasks.
- If there are no tasks and all selected elements are of the same type (e.g. several sequence flows or gateways), they are all changed.
- If there are mixed types and no task, the button is not shown.

### Compatibility

- **BPMN – Camunda Platform 7** diagrams.
- Tested on Camunda Modeler **5.46.0**.
- Camunda 8 (Zeebe): not tested.

### Installation

1. Build the bundle (see below) or download it from a release.
2. Copy `index.js` and the `client` folder (with `client-bundle.js`) to:

   ```
   %APPDATA%\camunda-modeler\plugins\camunda-multiple-task-change-element\
   ```

3. Restart Camunda Modeler (or press `Ctrl+R`).

### Development

Requires Node.js and npm.

```bash
npm install
npx webpack      # generates client/client-bundle.js
```

Structure:

- `index.js` – plugin manifest
- `client/client.js` – registers the module in bpmn-js
- `client/multi-replace/MultiReplaceProvider.js` – context pad entry and replace menu

### License

MIT

---

## Português

Plugin para o [Camunda Modeler](https://camunda.com/download/modeler/) que exibe o botão **Change element** na paleta de contexto quando **vários elementos** estão selecionados, permitindo alterar o tipo de todas de uma só vez.

Por padrão, o Modeler só mostra esse menu com um único elemento selecionado.

### Uso

1. Selecione dois ou mais elementos (Shift + clique ou seleção por área).
2. Clique no ícone de chave inglesa (**Change element**) na paleta flutuante.
3. Escolha o novo tipo no menu (as mesmas opções que o Modeler oferece para um único elemento).

O botão segue estas regras:

- Se a seleção contém pelo menos uma task, o menu funciona como o **Change element** da task e se aplica **somente às tasks**. O restante da seleção (conectores, gateways, eventos...) é ignorado e permanece inalterado. Exemplo: ao selecionar 3 tasks e 2 conectores, você altera as 3 tasks.
- Se não há tasks e todos os elementos selecionados são do mesmo tipo (ex.: vários fluxos de sequência ou gateways), todos são alterados.
- Se há tipos misturados e nenhuma task, o botão não é exibido.

### Compatibilidade

- Diagramas **BPMN – Camunda Platform 7**.
- Testado no Camunda Modeler **5.46.0**.
- Camunda 8 (Zeebe): não testado.

### Instalação

1. Gere o bundle (veja abaixo) ou baixe-o de uma release.
2. Copie `index.js` e a pasta `client` (com `client-bundle.js`) para:

   ```
   %APPDATA%\camunda-modeler\plugins\camunda-multiple-task-change-element\
   ```

3. Reinicie o Camunda Modeler (ou use `Ctrl+R`).

### Desenvolvimento

Requer Node.js e npm.

```bash
npm install
npx webpack      # gera client/client-bundle.js
```

Estrutura:

- `index.js` – manifesto do plugin
- `client/client.js` – registra o módulo no bpmn-js
- `client/multi-replace/MultiReplaceProvider.js` – entrada na paleta de contexto e menu de troca

### Licença

MIT
