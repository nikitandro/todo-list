import arrowIMG from '../img/arrow.svg';
import trashIMG from '../img/trash_icon.svg';
import { observer } from 'mobx-react-lite';
import { todoListState } from '../store/todoListState';

interface TodoItemOperationsProps {
  todoItemId: string;
}

const TodoItemOperations = observer(
  ({ todoItemId }: TodoItemOperationsProps) => {
    const todoItem = todoListState.getTodoItemById(todoItemId);
    const toggleOpen = () => {
      todoListState.toggleOpenItem(todoItemId);
    };

    const remove = () => {
      todoListState.removeItem(todoItemId);
    };
    return (
      <div className='operations'>
        <button
          className={'open-todo ' + (todoItem?.isOpen ? 'open' : 'closed')}
          onClick={toggleOpen}
        >
          <img src={arrowIMG} alt='' />
        </button>
        <button onClick={remove}>
          <img src={trashIMG} alt='' />
        </button>
      </div>
    );
  }
);

export default TodoItemOperations;
