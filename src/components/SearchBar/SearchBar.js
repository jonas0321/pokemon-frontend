import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonByName, cleanPokemons } from '../../actions';
import styles from './SearchBar.module.css'

const SearchBar = () => {
    
    const dispatch = useDispatch();
    const [name, setName] = useState({name:''});
    
    const handleInputChange = (e) => {
       e.preventDefault();
        setName({
          ...name,
          [e.target.name]:e.target.value
        });
        console.log(name);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        //dispatch(cleanPokemons(dispatch));
        dispatch(getPokemonByName(name.name));
        setName({ name: "" });
        e.target.reset();
    }

    return (
      <form className={styles.search} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          name="name"
          onChange={ handleInputChange}
          placeholder="Buscar..."
          autoComplete="off"
        />
        <button type="submit" className={styles.btn} >
          Buscar
        </button>
      </form>
    );
}
 
export default SearchBar;