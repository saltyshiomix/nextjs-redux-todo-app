import React from 'react';
import { compose } from 'recompose';

const Todo= (props) => {
  const {
    item,
    data,
    onChangeTodo,
    addTodo,
    deleteTodo,
  } = props;

  return (
    <React.Fragment>
      <h1>TODO</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        addTodo({
          value: item.value,
        });
      }}>
        <input
          type="text"
          value={item.value}
          onChange={e => onChangeTodo({
            value: e.target.value,
          })}
        />
        <br />
        <input
          type="submit"
          value="SUBMIT"
          style={{
            display: 'none',
          }}
        />
      </form>
      <hr />
      {data.map((item, index) => (
        <p key={index}>
          {item.value}
          {' '}
          <button onClick={() => deleteTodo(item)}>
            DELETE
          </button>
        </p>
      ))}
    </React.Fragment>
  );
};

export default compose()(Todo);
