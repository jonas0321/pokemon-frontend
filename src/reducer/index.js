import { 
    GET_POKEMONS, 
    GET_ALL_TYPES, 
    FILTER_CREATED, 
    ORDER_NAME, 
    FILTER_TYPE,
    ORDER_STR,
    GET_POKEMON_NAME,
    POST_POKEMON,
    GET_DETAILS,
    CLEAN_DETAIL,
    CLEAN_POKEMONS
 } from "../actions";

const initialState = {
  pokemons: [],
  pokemonBackup: [],
  allPokemons: [],
  types: [],
  pokeDetail: [],
  searchPokemons: [],
};

const rootReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case GET_POKEMONS:
            return {
                ...state,
                pokemons: action.payload,
                allPokemons: action.payload
            };
        case CLEAN_POKEMONS:
            return {
                ...state,
                pokemons: action.payload
            }    
        case GET_ALL_TYPES:
            return {
                ...state,
                types: action.payload
            }; 
        case FILTER_CREATED:
            let copy = state.allPokemons;
            let createdFiltered;
            if (action.payload === 'created') {
                createdFiltered = copy.filter((e) => e.createInDb);
            } else if (action.payload === 'api') {
                createdFiltered = copy.filter((e) => !e.createInDb);
            } else {
                createdFiltered = copy;
            }
            return {
                ...state,
                pokemons: createdFiltered
            };
        case FILTER_TYPE:
            // let copyTwo = state.pokemonBackup;
            // let typeFiltered;
            
            //  if (action.payload === 'all'){
            //     typeFiltered=copyTwo
            //  } else{
            //     typeFiltered = copyTwo.filter((e) =>
            //       e.types?.includes(action.payload)
            //     );

            //  }
            
            // return {
            //     ...state,
            //     pokemons: typeFiltered
            // };
            // const allVideoGames = state.allPokemons;
            // const genresFiltered = action.payload === "all" ? allVideoGames : allVideoGames.filter(e => e.types?.includes(action.payload))
            // return{
            //     ...state,
            //     pokemons: genresFiltered,
            // }
            const allpoke= state.allPokemons;
             let typesFiltered;
            if (action.payload === "all" ){
                
                 typesFiltered = allpoke
            }
            else{
                  typesFiltered = allpoke.filter((e) => {
                     if (e.types.some((t) => t.name === action.payload)) {
                         return e.types.map((el) => el.name === action.payload);
                        } else {
                            return e.types.includes(action.payload);
                        }
                   });
            }
           
         
             return{
                ...state,
                pokemons:typesFiltered
            }
        case ORDER_NAME:
            let copy3 = state.pokemons;
            let sortedName = action.payload === 'asc' ?
                copy3.sort((a, b) => {
                    return a.name.toLowerCase().localeCompare(b.name.toLowerCase())
                }) :
                copy3.sort((a, b) => {
                    return b.name.toLowerCase().localeCompare(a.name.toLowerCase())
                })
            return {
                ...state,
                pokemons: sortedName
            };          
        case ORDER_STR:
            let copy4 = state.pokemons;
            let sortedStr =
              action.payload === "asc"
                ? copy4.sort((a, b) => a.strength - b.strength)
                : copy4.sort((a, b) => b.strength - a.strength);
            // console.table(sortedStr);    
            return {
                ...state,
                pokemons: sortedStr
            };
        case GET_POKEMON_NAME:
              const findPokemon = state.allPokemons.filter(
        (pokemon) => pokemon.id === action.payload.id
      );
      if (findPokemon.length) {
        return {
          ...state,
          pokemons: [action.payload],
         
        };
      } else {
        return {
          ...state,
          pokemons: [action.payload], // si hago get a un pokemon que no esté en el estado actual, lo guardo en un arreglo y luego lo paso al principal
          searchPokemons: [action.payload, ...state.searchPokemons],
          
        };
      }
        case GET_DETAILS:
            return {
                ...state,
                pokeDetail: action.payload
            }
        case CLEAN_DETAIL:
            return {
                ...state,
                pokeDetail: action.payload
            }
        case POST_POKEMON:
            return {
                ...state
            };
        default: 
            return {...state};
    };
    
};

export default rootReducer;