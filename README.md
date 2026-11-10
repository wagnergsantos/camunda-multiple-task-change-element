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

When does the button appear, and what does it change?

| What you selected | Button | What gets changed |
|---|---|---|
| 3 tasks | ✅ Shown | The 3 tasks |
| 3 tasks + 2 connectors | ✅ Shown | **Only the 3 tasks** (connectors are untouched) |
| 2 tasks + 1 gateway | ✅ Shown | **Only the 2 tasks** (gateway is untouched) |
| 3 sequence flows (no task) | ✅ Shown | The 3 sequence flows |
| 2 gateways (no task) | ✅ Shown | The 2 gateways |
| 1 gateway + 1 connector (no task) | ❌ Not shown | Nothing |

In short: **if there is at least one task in the selection, only the tasks are changed.** Without tasks, the elements must all be of the same type.

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

Quando o botão aparece e o que ele altera?

| O que você selecionou | Botão | O que é alterado |
|---|---|---|
| 3 tasks | ✅ Aparece | As 3 tasks |
| 3 tasks + 2 conectores | ✅ Aparece | **Somente as 3 tasks** (conectores não mudam) |
| 2 tasks + 1 gateway | ✅ Aparece | **Somente as 2 tasks** (o gateway não muda) |
| 3 fluxos de sequência (sem task) | ✅ Aparece | Os 3 fluxos de sequência |
| 2 gateways (sem task) | ✅ Aparece | Os 2 gateways |
| 1 gateway + 1 conector (sem task) | ❌ Não aparece | Nada |

Resumindo: **se houver pelo menos uma task na seleção, só as tasks são alteradas.** Sem tasks, os elementos precisam ser todos do mesmo tipo.

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
