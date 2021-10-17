import { createStore, combineReducers, applyMiddleware } from "redux";
import dataReducers from "../Reducers/dataReducers";
import Thunk from "redux-thunk";

const ConfigurationStore = (props) => {
  const store = createStore(
    combineReducers({
      data: dataReducers,
    }),
    applyMiddleware(Thunk)
  );
  return store;
};
export default ConfigurationStore;
