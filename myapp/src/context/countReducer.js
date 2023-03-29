export const countReducer = (state, action) => {
  switch (action.type) {
    case 'addOne':
      return state + 1;

    case 'addFive':
      return state + 5;

    case 'substractFive':
      if (state >= 5) {
        return state - 5;
      } else {
        alert('Goes under 0, not ok');
        return state;
      }

    case 'substractOne':
      if (state > 0) {
        return state - 1;
      } else {
        alert('Goes under 0, not ok');
        return state;
      }

    case 'reset':
      return 0;

    default:
      break;
  }
};
