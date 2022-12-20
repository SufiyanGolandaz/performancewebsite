import React from "react";
import appstyles from "../css/pages.module.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import core from "../images/core.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import consult from "../images/consult.png";
import specialized from "../images/specialized.png";
import industrialized from "../images/tune.png";

function Offerings() {
  const divStyles = {
    boxShadow: "1px 2px 9px #000000",
    margin: "4% 10%",
    padding: "1%",
    width: "80%",
  };

  return (
    <div className={appstyles.padtop}>
      {/* <Card style={divStyles}>
  <Card.Img variant="top" src="holder.js/100px180"  className=""/>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card> */}
      <Container className={appstyles.flex_container}>
        <Row>
          <Col>
            <Card style={divStyles}>
              <Card.Img
                variant="top"
                src={core}
                className={appstyles.img_card}
              />
              <Card.Body>
                <Card.Title>Core</Card.Title>
                <Card.Text>
                  <ul className={appstyles.offering_list}>
                    <li>Application Performance Testing</li>
                    <li>Performance Engineering</li>
                    <li>Monitoring & Dashboard Configuration</li>
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
                src={industrialized}
                className={appstyles.img_card}
              />
              <Card.Body>
                <Card.Title>Industrialized</Card.Title>
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
      <Container className={appstyles.flex_container}>
        <Row>
          <Col>
            <Card style={divStyles}>
              <Card.Img
                variant="top"
                src={specialized}
                className={appstyles.img_card}
              />{" "}
              <Card.Body>
                <Card.Title>Specialized</Card.Title>
                <Card.Text>
                  <ul className={appstyles.offering_list}>
                    <li>Resiliency & Reliability Engineering</li>
                    <li>Chaos Engineering</li>
                    <li>Observability Services for Cloud</li>
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
                src={consult}
                className={appstyles.img_card}
              />{" "}
              <Card.Body>
                <Card.Title>Consulting</Card.Title>
                <Card.Text>
                  <ul className={appstyles.offering_list}>
                    <li>Current State Maturity Assessment</li>
                    <li>Capacity Planning</li>
                    <li>Infrastructure Benchmarking</li>
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

export default Offerings;
