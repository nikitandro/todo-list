import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { todoProducerState } from '../store/todoProducerState';
import plus_icon from '../img/plus_icon.svg';
import { Button } from './UI/Button';
import { todoListState } from '../store/todoListState';

const TodoProducer: React.FunctionComponent = observer(() => {
  return (
    <>
      {todoProducerState.isOpen ? <TodoProducerOpen /> : <TodoProducerClosed />}
    </>
  );
});

const TodoProducerOpen: React.FunctionComponent = observer(() => {
  const onCloseClick = () => {
    todoProducerState.toggleIsOpen();
  };

  const [heading, setHeading] = useState<string>('');
  const [content, setContent] = useState<string>('');

  return (
    <div className='todo-producer open'>
      <div className='content'>
        <div className='wrapper'>
          <div className='cont-1'>
            <button onClick={onCloseClick}>
              <img src={plus_icon} alt='' />
            </button>
            <div className='inputs'>
              <div className='input-todo-heading'>
                <textarea
                  value={heading}
                  onChange={(e) => setHeading(e.target.value)}
                  placeholder='Заголовок'
                />
              </div>
              <div className='input-todo-content'>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder='Содержание'
                />
              </div>
            </div>
          </div>
          <div className='cont-2'>
            <Button
              onClick={() => {
                todoListState.appendItem({
                  title: heading,
                  description: content,
                });
              }}
            >
              Добавить
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
});

const TodoProducerClosed: React.FunctionComponent = observer(() => {
  const onClick = () => {
    todoProducerState.toggleIsOpen();
  };

  const onButtonFocus = () => {};

  return (
    <div className='todo-producer closed'>
      <div className='content'>
        <div className='preview'>
          <button onClick={onClick}>
            <img src={plus_icon} alt='' />
          </button>
          <span>Новая заметка</span>
        </div>
      </div>
    </div>
  );
});

export default TodoProducer;
