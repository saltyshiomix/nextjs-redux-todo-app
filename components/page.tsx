import React from 'react';
import { compose } from 'recompose';
import Todo from './todo';
import { IndexPageProps } from '../interfaces';

const Page: React.FC<IndexPageProps> = (props) => {
  return <Todo {...props} />;
};

export default compose()(Page);
