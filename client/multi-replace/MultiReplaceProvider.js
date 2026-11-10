const POPUP_ID = 'multi-element-replace';

const TASK_TYPES = [
  'bpmn:Task',
  'bpmn:SendTask',
  'bpmn:ReceiveTask',
  'bpmn:UserTask',
  'bpmn:ManualTask',
  'bpmn:BusinessRuleTask',
  'bpmn:ServiceTask',
  'bpmn:ScriptTask'
];

function isTask(element) {
  return !!element.businessObject &&
    TASK_TYPES.includes(element.businessObject.$type) &&
    element.type === element.businessObject.$type;
}

export default function MultiReplaceProvider(
    contextPad, popupMenu, replaceMenuProvider, selection, translate
) {
  this._popupMenu = popupMenu;
  this._replaceMenuProvider = replaceMenuProvider;
  this._selection = selection;
  this._translate = translate;

  contextPad.registerProvider(500, this);
  popupMenu.registerProvider(POPUP_ID, this);
}

MultiReplaceProvider.$inject = [
  'contextPad',
  'popupMenu',
  'replaceMenuProvider',
  'selection',
  'translate'
];

/**
 * Elements the change applies to:
 * - at least one task selected: the tasks only;
 * - otherwise, all elements of the same type;
 * - otherwise (mixed types, no task): none.
 */
MultiReplaceProvider.prototype._getScope = function(elements) {
  const tasks = elements.filter(isTask);

  if (tasks.length) {
    return tasks;
  }

  const sameType = elements.every(el => el.type === elements[0].type);

  return sameType ? elements : [];
};

MultiReplaceProvider.prototype._getEntriesPerElement = function(scope) {
  return scope.map(el => this._replaceMenuProvider.getPopupMenuEntries(el));
};

MultiReplaceProvider.prototype.getMultiElementContextPadEntries = function(elements) {
  const { _popupMenu: popupMenu, _translate: translate } = this;

  const scope = this._getScope(elements);

  if (!scope.length) {
    return {};
  }

  const hasEntries = this._getEntriesPerElement(scope)
    .some(entries => Object.keys(entries).length);

  if (!hasEntries) {
    return {};
  }

  return {
    'replace-multiple': {
      group: 'edit',
      className: 'bpmn-icon-screw-wrench',
      title: translate('Change element'),
      action: {
        click(event, target) {
          const rect = (event.delegateTarget || event.target).getBoundingClientRect();

          popupMenu.open(target, POPUP_ID, {
            x: rect.left,
            y: rect.bottom + 8,
            cursor: { x: event.x, y: event.y }
          }, {
            title: translate('Change element'),
            width: 'var(--bpmn-replace-popup-width, 300px)',
            search: true
          });
        }
      }
    }
  };
};

MultiReplaceProvider.prototype.getPopupMenuEntries = function(elements) {
  const scope = this._getScope(elements);
  const perElement = this._getEntriesPerElement(scope);

  // union of options; each element runs its own entry, so elements
  // already of the target type are skipped
  const entries = {};

  perElement.forEach(elementEntries => {
    Object.keys(elementEntries).forEach(key => {
      if (entries[key]) {
        return;
      }

      entries[key] = {
        label: elementEntries[key].label,
        className: elementEntries[key].className,
        action: () => this._applyAll(key, scope, perElement, elements)
      };
    });
  });

  return entries;
};

MultiReplaceProvider.prototype._applyAll = function(key, scope, perElement, selected) {
  const results = scope.map((el, index) => {
    const entry = perElement[index][key];

    if (!entry) {
      return el;
    }

    const result = entry.action();

    return result && result.id ? result : el;
  });

  const others = selected.filter(el => !scope.includes(el));

  this._selection.select(results.concat(others));
};
