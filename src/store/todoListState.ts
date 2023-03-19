import { makeAutoObservable } from 'mobx';
import { v4 as uuidv4 } from 'uuid';

type TodoItem = {
  id: string;
  title: string;
  description: string;
  isOpen: boolean;
  isComplete: boolean;
};

class TodoListState {
  todoItems: TodoItem[];
  constructor() {
    makeAutoObservable(this);
    this.todoItems = [];
  }

  public getTodoItemById(id: string): TodoItem | null {
    const todoItemIndex = this.todoItems.findIndex((value) => {
      return value.id === id;
    });

    if (todoItemIndex !== -1) {
      return this.todoItems[todoItemIndex];
    }

    return null;
  }

  public appendItem(item: Omit<TodoItem, 'id' | 'isComplete' | 'isOpen'>) {
    this.todoItems.push({
      ...item,
      id: uuidv4(),
      isComplete: false,
      isOpen: false,
    });
  }

  public toggleOpenItem(id: string) {
    const itemIndex = this.findItemIndex(id);

    if (itemIndex === -1) {
      throw new Error('Invalid todo item id.');
    }
    this.todoItems[itemIndex].isOpen = !this.todoItems[itemIndex].isOpen;
  }

  public removeItem(id: string) {
    this.todoItems = this.todoItems.filter((item) => {
      return item.id !== id;
    });
  }

  public toggleCompleteItem(id: string) {
    const itemIndex = this.todoItems.findIndex((item) => {
      return item.id === id;
    });
    if (itemIndex !== -1)
      this.todoItems[itemIndex].isComplete =
        !this.todoItems[itemIndex].isComplete;
  }

  private findItemIndex(id: string) {
    return this.todoItems.findIndex((item) => {
      return item.id === id;
    });
  }
}

export const todoListState = new TodoListState();
