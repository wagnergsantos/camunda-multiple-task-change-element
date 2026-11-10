# Camunda Modeler – Multiple Task Change Element

![Compatible with Camunda Modeler version 5](https://img.shields.io/badge/Modeler_Version-5.0.0+-blue.svg) [![Plugin Type](https://img.shields.io/badge/Plugin_Type-BPMN_(Camunda_Platform_7)-orange.svg)](#)

🇬🇧 English | [🇧🇷 Português](#português)

## English

A plugin for [Camunda Modeler](https://camunda.com/download/modeler/) that shows the **Change element** button in the context pad when **multiple tasks** are selected, so you can change the type of all of them at once.

By default, the Modeler only shows this menu when a single element is selected.

### Usage

1. Select two or more tasks (Shift + click or area selection).
2. Click the wrench icon (**Change element**) in the floating context pad.
3. Pick the new type: Task, User, Service, Send, Receive, Manual, Business Rule or Script.

The button appears when the selection contains at least one task; connectors and other elements in the selection are ignored (only the tasks are changed). Call Activity and Subprocess are not supported.

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

Plugin para o [Camunda Modeler](https://camunda.com/download/modeler/) que exibe o botão **Change element** na paleta de contexto quando **várias tasks** estão selecionadas, permitindo alterar o tipo de todas de uma só vez.

Por padrão, o Modeler só mostra esse menu com um único elemento selecionado.

### Uso

1. Selecione duas ou mais tasks (Shift + clique ou seleção por área).
2. Clique no ícone de chave inglesa (**Change element**) na paleta flutuante.
3. Escolha o novo tipo: Task, User, Service, Send, Receive, Manual, Business Rule ou Script.

O botão aparece quando a seleção contém pelo menos uma task; conectores e outros elementos selecionados são ignorados (apenas as tasks são alteradas). Call Activity e Subprocess não são suportados.

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
