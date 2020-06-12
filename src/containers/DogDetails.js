import React from "react";
import dogs from "../dogsdata";

const DogDetails = (props) => {
  const kopekid = props.match.params.kopekid;
  const dog = dogs.find((dog) => dog.id === kopekid);
  return (
    <div className="">
      <img src={dog.image} alt={dog.name} />
      <h1>Ad: {dog.name}</h1>
      <h2>Tür: {dog.breed}</h2>
      <h2>Yaş: {dog.age}</h2>
      <p>{dog.description}</p>
    </div>
  );
};

export default DogDetails;