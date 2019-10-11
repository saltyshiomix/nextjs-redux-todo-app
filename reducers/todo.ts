import {
  TODO_ONCHANGE,
  TODO_ADD,
  TODO_DELETE,
} from '../constants/actionTypes';

export const initialState = {
  item: {
    value: '',
  },
  data: [],
};

export default (state = initialState, action) => {
  const {
    type,
    item,
  } = action;

  switch (type) {
    case TODO_ONCHANGE: {
      return Object.assign({}, state, {
        item,
      });
    }

    case TODO_ADD: {
      if (item.value === '') {
        return state;
      }

      return Object.assign({}, state, {
        item: {
          value: '',
        },
        data: [
          ...(state.data),
          item,
        ],
      });
    }

    case TODO_DELETE: {
      const { data, ...restState } = state;
      const updated = [...data].filter(_item => _item.value !== item.value);
      return Object.assign({}, restState, {
        data: updated,
      });
    }

    default: {
      return state;
    }
  }
};
