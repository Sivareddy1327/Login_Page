import axios from "axios";

export const startGetdata = () => {
  return (dispatch) => {
    axios.get("https://www.reddit.com/users/.json").then((response) => {
      const result = response.data.data.children;
      dispatch(data_backend(result));
    });
  };
};

export const data_backend = (data) => {
  return {
    type: "ADD_DATA",
    payload: data,
  };
};
