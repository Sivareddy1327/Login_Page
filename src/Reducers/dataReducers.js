const InitialState = [];

const dataReducers = (state = InitialState, action) => {
  switch (action.type) {
    case "ADD_DATA": {
      return [...action.payload];
    }
    default: {
      return [...state];
    }
  }
};
export default dataReducers;
