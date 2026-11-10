import { TASK } from 'bpmn-js/lib/features/replace/ReplaceOptions';

const POPUP_ID = 'multi-task-replace';

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

const REPLACE_OPTIONS = TASK.filter(option =>
  TASK_TYPES.includes(option.target.type)
);

function isTask(element) {
  return !!element.businessObject &&
    TASK_TYPES.includes(element.businessObject.$type) &&
    element.type === element.businessObject.$type;
}

export default function MultiReplaceProvider(
    contextPad, popupMenu, bpmnReplace, selection, translate
) {
  this._popupMenu = popupMenu;
  this._bpmnReplace = bpmnReplace;
  this._selection = selection;
  this._translate = translate;

  contextPad.registerProvider(500, this);
  popupMenu.registerProvider(POPUP_ID, this);
}

MultiReplaceProvider.$inject = [
  'contextPad',
  'popupMenu',
  'bpmnReplace',
  'selection',
  'translate'
];

MultiReplaceProvider.prototype.getMultiElementContextPadEntries = function(elements) {
  const { _popupMenu: popupMenu, _translate: translate } = this;

  if (!elements.length || !elements.every(isTask)) {
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
  const entries = {};

  REPLACE_OPTIONS.forEach(option => {
    const allSame = elements.every(el => el.type === option.target.type);

    if (allSame) {
      return;
    }

    const label = typeof option.label === 'function' ? option.label(elements[0]) : option.label;

    entries[option.actionName] = {
      label: this._translate(label),
      className: option.className,
      action: () => this._replaceAll(elements, option.target)
    };
  });

  return entries;
};

MultiReplaceProvider.prototype._replaceAll = function(elements, target) {
  const replaced = elements
    .filter(el => el.type !== target.type)
    .map(el => this._bpmnReplace.replaceElement(el, target));

  this._selection.select(replaced);
};
