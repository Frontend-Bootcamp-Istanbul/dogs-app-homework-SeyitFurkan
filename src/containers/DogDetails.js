import React from "react";
import {Container,Row,Col} from "reactstrap";
import dogs from "../dogsdata";

const DogDetails = (props) => {
  const dogId = props.match.params.kopekid;
  const dog = dogs.find((dog) => dog.id === dogId);
  return (
    <Container>
      <Row>
          <Col xs="3">
              <img src={dog.image} width="250" height="250"/>
          </Col>
          <Col xs="6">
              <h1>
                  {dog.name}
              </h1>
              <p>
                  <b>Açıklama: </b> {dog.description}
              </p>
              <p>
                  <b>Yaş: </b> {dog.age}
              </p>
              <p>
                  <b>Cinsi: </b> {dog.breed}
              </p>
          </Col>
      </Row>
    </Container>
  );
};

export default DogDetails;