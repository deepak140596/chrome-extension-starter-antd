const initialState = {
  count: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_COUNT':
      return {
        ...state,
        count: state.count + (action.payload || 1),
      }
    default:
      return state;
  }
};
