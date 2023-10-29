import {
  Row,
  Col,
  Container,
  Image,
  ListGroup,
  Form,
  Button,
  Alert,
} from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import AddedToCartMessageComponent from "../components/AddedToCartMessageComponent";

import ImageZoom from "js-image-zoom";
import { useEffect } from "react";



const ProductDetailsPage = () => {

  var options = {
    scale: 1.5,
    offset: { vertical: 0, horizontal: 10 },
  }

  useEffect(() => {
    new ImageZoom(document.getElementById("first"),options)
    new ImageZoom(document.getElementById("second"),options)
    new ImageZoom(document.getElementById("third"),options)
    new ImageZoom(document.getElementById("fourth"),options)
  })
  return (
    <Container>
      <AddedToCartMessageComponent />
      <Row className="mt-5">
        <Col style={{zIndex: 1}} md={4}>
          <div id="first">
            <Image crossOrigin="anonymous" fluid src="images\categories\Abstract.png" />
          </div>
          <br />
          <div id="second">
            <Image crossOrigin="anonymous" fluid src="images\categories\Cars.png" />
          </div>
          <br />
          <div id="third">
            <Image crossOrigin="anonymous" fluid src="images\categories\Kids.png" />
          </div>
          <br />
          <div id="fourth">
            <Image crossOrigin="anonymous" fluid src="images\categories\Video_Games.png" />
          </div>
          <br />
        </Col>
        <Col md={8}>
          <Row>
            <Col md={8}>
              <ListGroup variant="flush">
                <ListGroup.Item><h1>Product Name</h1></ListGroup.Item>
                <ListGroup.Item>
                  <Rating readonly size={20} initialValue={5} /> (1)
                </ListGroup.Item>
                <ListGroup.Item><span className="fw-bold">Price: </span>$345</ListGroup.Item>
                <ListGroup.Item>Product Desciption Here. Product Desciption Here. Product Desciption Here. Product Desciption Here. </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={4}>
              <ListGroup>
                <ListGroup.Item><span className="fw-bold">Status: </span>In Stock</ListGroup.Item>
                <ListGroup.Item><span className="fw-bold">Price: </span>$345</ListGroup.Item>
                <ListGroup.Item>
                  <Form.Select size="lg" aria-label="Default select example">
                    <option>1</option>
                    <option value="1">2</option>
                    <option value="2">3</option>
                    <option value="3">4</option>
                  </Form.Select>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button variant="danger">Add To Cart</Button>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
          <Row>
            <Col className="mt-5">
              <h5>REVIEWS</h5>
              <ListGroup variant="flush">
                {Array.from({ length: 10 }).map((item, idx) => (
                <ListGroup.Item key={idx}>
                  John Doe <br />
                  <Rating readonly size={20} initialValue={5}/>
                  <br />
                  10/29/2023 <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
          </Row>
          <hr />
          <Alert variant="danger">Login first to write a review</Alert>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Write a review</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Select aria-label="Default select example">
              <option>Your rating</option>
              <option value="5">5 (Excellent!)</option>
              <option value="4">4 (Good) </option>
              <option value="3">3 (Average) </option>
              <option value="2">2 (Bad) </option>
              <option value="1">1 (Awful) </option>
            </Form.Select>
            <Button className="mb-3 mt-3" variant="primary">Send it!</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetailsPage;

