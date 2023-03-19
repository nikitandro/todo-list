import React from 'react';
import { observer } from 'mobx-react-lite';
import { todoListState } from '../store/todoListState';
import TodoItem from './TodoItem';

const TodoList = observer(() => {
  return (
    <div className='todo-list'>
      {todoListState.todoItems.map((item) => {
        return <TodoItem id={item.id} key={item.id} />;
      })}
    </div>
  );
});
export default TodoList;
