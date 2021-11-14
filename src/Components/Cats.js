import { useEffect, useState } from "react";
import axios from "axios";
import { Card, Row, Col, Container } from "react-bootstrap";
import { useContext } from "react";
import { catsContext } from "../context/Catsprovider";
import { useHistory } from "react-router";
function Cats() {
  let history = useHistory();
  const { cats, setCats } = useContext(catsContext);
  //   console.log(setCats)
  useEffect(() => {
    axios("https://api.thecatapi.com/v1/breeds").then((result) => {
      console.log(result.data);
      setCats(result.data);
    });
  }, []);

  const handleCats = (cats) => {
    console.log(cats.name);
    history.push(`/cat/${cats.name}`)
    // history.push("/cat/:nama-kucing")
  };
  return (
    <div>
      <Container fluid="md">
        <h4>Ini Cats</h4>
        <Row xs={1} md={4} className="g-4">
          {cats.map((item) => (
            <Col>
              <Card style={{ width: "100%", height: "100%" }}>
                <Card.Img
                  variant="top"
                  src={item.image?.url}
                  alt="cats"
                  style={{ width: "100%", height: "200px" }}
                  onClick={() => handleCats(item)}
                />
                <br />
                <Card.Body>
                  <Card.Title style={{ textAlign: "center", color: "red" }}>
                    {item.name}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Cats;
