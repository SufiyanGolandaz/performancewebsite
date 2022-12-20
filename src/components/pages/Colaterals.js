import React from "react";
import appstyles from "../css/pages.module.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import banking from "../images/banking.png";
import insurance from "../images/insurance.png";

function Colaterals() {
  const divStyles = {
    boxShadow: "1px 2px 9px #000000",
    margin: "4% 10%",
    padding: "1%",
    width: "80%",
  };

  return (
    <div className={appstyles.padtop}>
      <Container className={appstyles.flex_container}>
        <Row>
          <Col>
            <Card style={divStyles}>
              <Card.Img
                variant="top"
                src={banking}
                className={appstyles.img_card}
              />
              <Card.Body>
                <Card.Title>Banking</Card.Title>
                <Card.Text>
                  <ul className={appstyles.offering_list}>
                    <li>Performance Test CoE setup</li>
                    <li>Managed Performance Testing</li>
                    <li>Application Performance Tuning</li>
                  </ul>
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card style={divStyles}>
              <Card.Img
                variant="top"
                src={insurance}
                className={appstyles.img_card}
              />
              <Card.Body>
                <Card.Title>Insurance</Card.Title>
                <Card.Text>
                  <ul className={appstyles.offering_list}>
                    <li>Performance Test CoE setup</li>
                    <li>Managed Performance Testing</li>
                    <li>Application Performance Tuning</li>
                  </ul>
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Colaterals;
