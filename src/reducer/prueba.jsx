import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getanimals } from "../reducer/prueba";



export default function Home() {

const dispatch = useDispatch();
  const animals = useSelector((state) => state.animals);

   useEffect(() => {
     dispatch(getanimals());
   }, [dispatch]);

console.log(animals);
  return (
    <div>
      <p>#{animals.id}</p>
      <h2>{animals.title}</h2>
      <h2>{animals.amount}</h2>
      <h2>{animals.species}</h2>
      <h2>{animals.location}</h2>
      <img src={animals.img} alt="img not found" height="150px" width="100px" />
      <img
        src={animals.image_detail}
        alt="img not found"
        height="150px"
        width="100px"
      />
    </div>
  );
      }