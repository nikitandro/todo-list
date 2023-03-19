import Checkbox from './UI/Checkbox';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { todoListState } from '../store/todoListState';

type TodoItemStateProps = {
  todoItemId: string;
};

const TodoItemState: React.FunctionComponent<TodoItemStateProps> = observer(
  ({ todoItemId }: TodoItemStateProps) => {
    const todoItem = todoListState.getTodoItemById(todoItemId);

    const toggleComplete = () => todoListState.toggleCompleteItem(todoItemId);
    return (
      <div className='state'>
        <Checkbox isChecked={todoItem?.isComplete} onClick={toggleComplete} />
        <div className='text'>
          <h2 className='todo-item__title'>{todoItem?.title}</h2>
          {todoItem?.isOpen ? (
            <p className='todo-item__content'>{todoItem?.description}</p>
          ) : (
            <></>
          )}
        </div>
      </div>
    );
  }
);
export default TodoItemState;
