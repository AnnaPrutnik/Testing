const initialState = [];

function msgReducer(state = initialState, action) {
  switch (action.type) {
    case 'addMsg':
      console.log('add');
      return [...state, action.payload];
    case 'deleteMsg':
      console.log(state);

      return state.filter((msg) => String(msg.id) !== String(action.payload));
    default:
      return state;
  }
}

export default msgReducer;
