import axios from "axios";
export const GET_ANIMALS = "GET_ANIMALS";

export const getanimals = () => {
  return async (dispatch) => {
    try {
      let url = "http://localhost:3000/api/v1/animals";
      let json = await axios.get(url);
      return dispatch({
        type: GET_ANIMALS,
        payload: json.data,
      });
    } catch (e) {
      console.log(e);
    }
  };
};
const initialState = {
  animals: [],
 allanimals:[]
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ANIMALS:
      return {
        ...state,
        animals: action.payload,
        allanimals: action.payload,
      };
    
    
    default:
      return { ...state };
  }
};

export default rootReducer;