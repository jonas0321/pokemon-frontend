import axios from "axios";

export const GET_POKEMONS = "GET_POKEMONS";
export const GET_ALL_TYPES = "GET_ALL_TYPES";
export const FILTER_CREATED = "FILTER_CREATED";
export const ORDER_NAME = "ORDER_NAME";
export const FILTER_TYPE = "FILTER_TYPE";
export const ORDER_STR = "FILTER_STR";
export const GET_POKEMON_NAME = "GET_POKEMON_NAME";
export const POST_POKEMON = "POST_POKEMON";
export const GET_DETAILS = "GET_DETAILS";
export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const CLEAN_POKEMONS = "CLEAN_POKEMONS";

export const getPokemons = () => {
  return async (dispatch) => {
    try {
      let url = "http://localhost:3001/pokemons";
      let json = await axios.get(url);
      return dispatch({
        type: GET_POKEMONS,
        payload: json.data,
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export const cleanPokemons = (dispatch) => {
  return dispatch({
    type: CLEAN_POKEMONS,
    payload: [],
  });
};

export const getAlltypes = () => {
  return async (dispatch) => {
    try {
      let url = "http://localhost:3001/types";
      let json = await axios.get(url);
      return dispatch({
        type: GET_ALL_TYPES,
        payload: json.data,
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export const filterCreated = (create) => {
  return {
    type: FILTER_CREATED,
    payload: create,
  };
};

export const orderName = (name) => {
  return {
    type: ORDER_NAME,
    payload: name,
  };
};

export const filterType = (types) => {
  return {
    type: FILTER_TYPE,
    payload: types,
  };
  // return async (dispatch) => {
  //   try {
  //     var json = await axios.get(`http://localhost:3001/types`);

  //     console.log(json);
  //     return dispatch({
  //       type: FILTER_TYPE,
  //       payload: json.data,
  //     });
  //   } catch (e) {
  //     alert("type not found");

  //     console.log(e);
  //   }
  // };
};

export const filterStr = (str) => {
  return {
    type: ORDER_STR,
    payload: str,
  };
};

export const getPokemonByName = (name) => {
  return async (dispatch) => {
        try {
            let json = await axios.get(`http://localhost:3001/pokemons?name=${name}`)

            
           return dispatch({
                type: GET_POKEMON_NAME,
                payload: json.data
            })
        } catch (e) {
            //alert('Pokemon not found');
            //window.location.href = "http://localhost:3000/home";
            console.log(e);
        };
    };
 
};

export function getDetailPromise(id) {
  return function (dispatch) {
    axios
      .get(`http://localhost:3001/pokemons/${id}`)
      .then((res) => res.data)
      .then((res) =>
        dispatch({
          type: GET_DETAILS,
          payload: res,
        })
      )
      .catch((err) => console.log(err));
  };
}

export const cleanDetail = (dispatch) => {
  return dispatch({
    type: CLEAN_DETAIL,
    payload: [],
  });
};

export const postPokemon = (payload) => {
  return async () => {
    try {
      var createPoke = await axios.post(
        "http://localhost:3001/pokemons",
        payload
      );
      console.log(createPoke);
      alert("New pokemón is created!");
      return createPoke;
    } catch (e) {
      alert("Pokemon name already exist");
      console.log(e);
    }
  };
};
