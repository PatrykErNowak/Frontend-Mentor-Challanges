enum Operation {
  noOparation = 0,
  add,
  subtract,
  multiply,
  divide
}

class Calc {
  private score: number | null | "You can't divide by zero";
  private currentNumber: number | string = 0;
  private activeOperation: Operation = Operation.noOparation;
  private typedNumberKey = false;
  private screen = document.querySelector('[data-js="screen"]') as HTMLParagraphElement;
  private keypad = document.querySelector('[data-js="keypad"]') as HTMLDivElement;

  constructor() {
    this.score = null;
    this.displayResult();
    this.keypadHandler();
  }

  private clearScreen() {
    this.screen.textContent = '0';
  }
  private clearCurrentNumb() {
    this.currentNumber = 0;
  }

  private clearStuff() {
    this.clearCurrentNumb();
    this.score = null;
    this.activeOperation = Operation.noOparation;
  }

  private displayResult() {
    this.screen.textContent = this.score !== null ? String(this.score) : '0';
  }

  private typeNumber(numb: string) {
    if (numb === '.') this.currentNumber = '0';
    if (this.currentNumber === 0 || this.currentNumber === '0') this.currentNumber = '';
    this.currentNumber = String(this.currentNumber) + numb;
    this.screen.textContent = String(this.currentNumber);
    this.typedNumberKey = true;
  }

  private sumAction(clearOparation = false) {
    const operation = this.activeOperation;

    if (operation === Operation.add) this.addAction(false);
    if (operation === Operation.subtract) this.subtractAction(false);
    if (operation === Operation.multiply) this.multiplytAction(false);
    if (operation === Operation.divide) this.divideAction(false);

    if (clearOparation) this.activeOperation = Operation.noOparation;
  }

  private mathAction(operationType: Operation, fn: Function, addOperationType = true) {
    if (!this.typedNumberKey && !addOperationType) return;

    if (this.activeOperation === Operation.noOparation || this.activeOperation === operationType) {
      fn();
      this.displayResult();
      this.clearCurrentNumb();
      this.typedNumberKey = false;
    } else {
      this.sumAction(false);
    }

    if (addOperationType) this.activeOperation = operationType;
  }
  private addAction(addOperationType = true) {
    const mathAdding = () => {
      this.currentNumber = +this.currentNumber;
      if (typeof this.score === 'number') this.score = this.score + this.currentNumber;
      if (this.score === null) this.score = this.currentNumber;
    };

    this.mathAction(Operation.add, mathAdding, addOperationType);
  }

  private subtractAction(addOperationType = true) {
    const mathSubtract = () => {
      this.currentNumber = +this.currentNumber;
      if (typeof this.score === 'number') this.score = this.score - this.currentNumber;
      if (this.score === null) this.score = this.currentNumber;
    };

    this.mathAction(Operation.subtract, mathSubtract, addOperationType);
  }

  private multiplytAction(addOperationType = true) {
    const mathMultiply = () => {
      this.currentNumber = +this.currentNumber;
      if (typeof this.score === 'number') this.score = this.score * this.currentNumber;
      if (this.score === null) this.score = this.currentNumber;
    };

    this.mathAction(Operation.multiply, mathMultiply, addOperationType);
  }

  private divideAction(addOperationType = true) {
    const mathDivide = () => {
      this.currentNumber = +this.currentNumber;
      if (this.score !== 0 && this.score !== null && typeof this.score === 'number' && this.currentNumber !== 0) {
        this.score = this.score / this.currentNumber;
        return;
      }
      if (this.score !== 0 && this.score !== null && this.currentNumber === 0) {
        this.score = "You can't divide by zero";
        return;
      }
      if (this.score === 0 && this.currentNumber !== 0) {
        this.score = 0;
        return;
      }
      if (this.score === null) this.score = this.currentNumber;
    };
    this.mathAction(Operation.divide, mathDivide, addOperationType);
  }

  private deleteAction() {
    this.clearScreen();
    this.clearCurrentNumb();
  }

  private resetAction() {
    this.clearStuff();
    this.clearScreen();
  }

  private keypadHandler() {
    const handleKeypadAction = function (this: Calc, e: MouseEvent) {
      const { target } = e;

      if (target instanceof HTMLElement && target.hasAttribute('data-action')) {
        const actionType = target.dataset.action;

        if (actionType === 'delete') this.deleteAction();
        if (actionType === 'reset') this.resetAction();

        if (actionType === 'numb' || actionType === 'dot') this.typeNumber(target.textContent!);
        if (actionType === 'add') this.addAction();
        if (actionType === 'subtract') this.subtractAction();
        if (actionType === 'multiply') this.multiplytAction();
        if (actionType === 'divide') this.divideAction();

        if (actionType === 'sum') this.sumAction(true);
      }
    };

    this.keypad.addEventListener('click', handleKeypadAction.bind(this));
  }
}
new Calc();
