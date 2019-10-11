import React from 'react';
import { compose } from 'recompose';
import Todo from './todo';

const Page = (props) => {
  return <Todo {...props} />;
};

export default compose()(Page);
