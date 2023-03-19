import { makeAutoObservable } from 'mobx';

class TodoProducerState {
  private _isOpen = false;
  constructor() {
    makeAutoObservable(this);
  }

  get isOpen(): boolean {
    return this._isOpen;
  }

  toggleIsOpen() {
    this._isOpen = !this._isOpen;
  }
}

export const todoProducerState = new TodoProducerState();
