import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetailPromise, cleanDetail, cleanPokemons } from "../../actions";
import { useEffect } from "react";
import noImage from "../../img/noImage.png";
import Loading from "../Loading/Loading";
import styles from "./Detail.module.css";

const Detail = (props) => {
  const dispatch = useDispatch();
  const myPokemon = useSelector((state) => state.pokeDetail);
  

  useEffect(() => {
    dispatch(getDetailPromise(props.match.params.id));
    return () => {
      dispatch(cleanDetail(dispatch), cleanPokemons(dispatch));
    };
  }, [dispatch, props.match.params.id]);
console.log(myPokemon);
  return (
    <div>
      {myPokemon ? (
        <div className={styles.container}>
          <div className={styles.card}>
            <h2 className={styles.h2}>{myPokemon.name}</h2>
            <p className={styles.p}>#{myPokemon.id}</p>
            <img
              src={myPokemon.img ? myPokemon.img : noImage}
              alt="img not found"
              height="150px"
              width="100px"
            />
            <div className={styles.types}>
              <h3>
                {myPokemon.types?.map((e, k) => {
                  return (
                    <div className={styles.types} key={k}>
                      <p className={styles.text}>{e.name}</p>
                    </div>
                  );
                })}{" "}
              </h3>
            </div>
            <div className={styles.div}>
              <div className={styles.divito}>
                <h5 className={styles.h5}>HP: {myPokemon.hp}</h5>
                <h5 className={styles.h5}>Attack: {myPokemon.strength}</h5>
                <h5 className={styles.h5}>Defense: {myPokemon.defense}</h5>
                <h5 className={styles.h5}>Speed: {myPokemon.speed}</h5>
              </div>
              <div className={styles.divito}>
                <h5 className={styles.h5}>Height: {myPokemon.height}</h5>
                <h5 className={styles.h5}>Weight: {myPokemon.weight}</h5>
                <h5 className={styles.h5}>
                  Types: {myPokemon.types?.map((t) => t + " ")}
                </h5>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <Loading />
        </div>
      )}
      <div>
        <Link to="/home">
          <button className={styles.btn}>Go back</button>
        </Link>
      </div>
    </div>
  );
};

export default Detail;
