import React from 'react';
import TodoItemOperations from './TodoItemOperations';
import TodoItemState from './TodoItemState';

interface ITodoItemProps {
  id: string;
}

export default function TodoItem({ id }: ITodoItemProps) {
  return (
    <div className='todo-item'>
      <div className='content'>
        <TodoItemState todoItemId={id} />
        <TodoItemOperations todoItemId={id} />
      </div>
    </div>
  );
}
