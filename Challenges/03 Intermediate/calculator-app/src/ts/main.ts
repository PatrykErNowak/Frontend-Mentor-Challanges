enum Operation {
  noOparation = 0,
  add = 'add',
  subtract = 'subtract',
  multiply = 'multiply',
  divide = 'divide'
}

class Calc {
  private score: number;
  private currentNumber: number = 0;
  private activeOperation: Operation = Operation.noOparation;
  private typedNumberKey = false;
  private screen = document.querySelector('[data-js="screen"]') as HTMLParagraphElement;
  private keypad = document.querySelector('[data-js="keypad"]') as HTMLDivElement;

  constructor() {
    this.score = 0;
    this.displayResult();
    this.keypadHandler();
  }

  clearScreen() {
    this.screen.textContent = '0';
  }
  clearCurrentNumb() {
    this.currentNumber = 0;
  }
  clearScore() {
    this.score = 0;
  }
  clearStuff() {
    this.clearCurrentNumb();
    this.clearScore();
    this.activeOperation = Operation.noOparation;
  }

  displayResult() {
    this.screen.textContent = String(this.score);
  }

  typeNumber(numb: string) {
    this.currentNumber = +(String(this.currentNumber || 0) + numb);
    this.screen.textContent = String(this.currentNumber);
    this.typedNumberKey = true;
  }

  sumAction(clearOparation = false) {
    const operation = this.activeOperation;

    if (operation === Operation.add) this.addAction(false);
    if (operation === Operation.subtract) this.subtractAction(false);
    if (operation === Operation.multiply) this.multiplytAction(false);
    if (operation === Operation.divide) this.divideAction(false);

    if (clearOparation) this.activeOperation = Operation.noOparation;
    // if (clear) this.clearStuff();
  }

  // mathAction(operation: Operation, fn: Function, addOperationType = true) {
  //   if (!this.typedNumberKey && !addOperationType) return;

  //   if (this.activeOperation === Operation.noOparation || this.activeOperation === operation) {
  //     fn();

  //     this.displayResult();
  //     this.clearCurrentNumb();
  //     this.typedNumberKey = false;
  //   } else {
  //     this.sumAction(false);
  //   }

  //   if (addOperationType) this.activeOperation = operation;
  // }
  // addAction(addOperationType = true) {
  //   const add = () => {
  //     this.score = this.score + this.currentNumber;
  //   };

  //   this.mathAction(Operation.add, add, addOperationType);
  // }

  addAction(addOperationType = true) {
    if (!this.typedNumberKey && !addOperationType) return;

    if (this.activeOperation === Operation.noOparation || this.activeOperation === Operation.add) {
      this.score = this.score + this.currentNumber;

      this.displayResult();
      this.clearCurrentNumb();
      this.typedNumberKey = false;
    } else {
      this.sumAction(false);
    }

    if (addOperationType) this.activeOperation = Operation.add;
  }

  subtractAction(addOperationType = true) {
    if (!this.typedNumberKey && !addOperationType) return;

    if (this.activeOperation === Operation.noOparation || this.activeOperation === Operation.subtract) {
      this.score = this.score === 0 ? this.currentNumber : this.score - this.currentNumber;
      this.displayResult();
      this.clearCurrentNumb();
      this.typedNumberKey = false;
    } else {
      this.sumAction(false);
    }

    if (addOperationType) this.activeOperation = Operation.subtract;
  }

  multiplytAction(addOperationType = true) {
    if (!this.typedNumberKey && !addOperationType) return;

    if (this.activeOperation === Operation.noOparation || this.activeOperation === Operation.multiply) {
      this.currentNumber = this.currentNumber === 0 ? 1 : this.currentNumber;
      this.score = this.score === 0 ? this.currentNumber : this.score * this.currentNumber;
      this.displayResult();
      this.clearCurrentNumb();
      this.typedNumberKey = false;
    } else {
      this.sumAction(false);
    }

    if (addOperationType) this.activeOperation = Operation.multiply;
  }

  divideAction(addOperationType = true) {
    if (!this.typedNumberKey && !addOperationType) return;

    if (this.activeOperation === Operation.noOparation || this.activeOperation === Operation.divide) {
      this.currentNumber = this.currentNumber === 0 ? 1 : this.currentNumber;
      this.score = this.score === 0 ? this.currentNumber : this.score / this.currentNumber;
      this.displayResult();
      this.clearCurrentNumb();
      this.typedNumberKey = false;
    } else {
      this.sumAction(false);
    }

    if (addOperationType) this.activeOperation = Operation.divide;
  }

  deleteAction() {
    this.clearScreen();
    this.clearCurrentNumb();
  }

  resetAction() {
    this.clearStuff();
    this.clearScreen();
  }

  keypadHandler() {
    const handleKeypadAction = function (this: Calc, e: MouseEvent) {
      const { target } = e;

      if (target instanceof HTMLElement && target.hasAttribute('data-action')) {
        const actionType = target.dataset.action;

        if (actionType === 'delete') this.deleteAction();
        if (actionType === 'reset') this.resetAction();

        if (actionType === 'numb') this.typeNumber(target.textContent!);
        if (actionType === 'add') this.addAction();
        if (actionType === 'subtract') this.subtractAction();
        if (actionType === 'multiply') this.multiplytAction();
        if (actionType === 'divide') this.divideAction();

        if (actionType === 'sum') this.sumAction(true);
        console.log(this);
      }
    };

    this.keypad.addEventListener('click', handleKeypadAction.bind(this));
  }
}
new Calc();
