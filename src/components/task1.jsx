import React, { Component } from 'react';
import { Navbar, Nav, Container, Row, Button, Col, Card, Form } from 'react-bootstrap';
import Footer from './footer';
import './Task1.css'; 


class Task1 extends Component {
  state = {
    wishlistItems: [],
    foods: [
      { id: 1, image: './pizza1.jpg', rating: '⭐⭐⭐⭐', price: '$10', name: 'Pizza', buttonLabel: 'Add to cart' },
      { id: 2, image: './sanwich.jpg', rating: '⭐⭐⭐⭐', price: '$25', name: 'Sandwich', buttonLabel: 'Add to cart' },
      { id: 3, image: './fried chicken.jpg', rating: '⭐⭐⭐⭐', price: '$12', name: 'Fried chicken', buttonLabel: 'Add to cart' },
      { id: 4, image: './french fries.jpg', rating: '⭐⭐⭐⭐', price: '$20', name: 'French fries', buttonLabel: 'Add to cart' },
      { id: 5, image: './burger.jpg', rating: '⭐⭐⭐', price: '$10', name: 'Burger', buttonLabel: 'Add to cart' },
      { id: 6, image: './hot-dog.jpg', rating: '⭐⭐⭐⭐', price: '$15', name: 'Hot dog', buttonLabel: 'Add to cart' },
      { id: 7, image: './biryani.jpg', rating: '⭐⭐⭐⭐⭐', price: '$30', name: 'Biriyani', buttonLabel: 'Add to cart' },
      { id: 8, image: './fried fish.jpg', rating: '⭐⭐⭐', price: '$20', name: 'Fried fish', buttonLabel: 'Add to cart' },
    ],
    foods2: [ 
      { id: 9, image: './tiramisu.jpg', rating: '⭐⭐⭐⭐', price: '$20', name: 'Tiramisu', buttonLabel: 'Add to cart' },
      { id: 10, image: './raspberrycake.jpg', rating: '⭐⭐⭐⭐⭐', price: '$25', name: 'Raspberrycake', buttonLabel: 'Add to cart' },
      { id: 11, image: './chocolavacake.jpg', rating: '⭐⭐⭐⭐', price: '$22', name: 'Chocolava Cake', buttonLabel: 'Add to cart' },
      { id: 12, image: './brownie.jpg', rating: '⭐⭐⭐⭐', price: '$20', name: 'Brownie', buttonLabel: 'Add to cart' },
      { id: 13, image: './cannoli.jpg', rating: '⭐⭐', price: '$20', name: 'Cannoli', buttonLabel: 'Add to cart' },
      { id: 14, image: './cremebrulee.jpg', rating: '⭐⭐⭐', price: '$35', name: 'Cremebrulee', buttonLabel: 'Add to cart' },
      { id: 15, image: './carrot-cake.avif', rating: '⭐⭐⭐⭐⭐', price: '$20', name: 'CarrotCake', buttonLabel: 'Add to cart' },
      { id: 16, image: './icecream.jpg', rating: '⭐⭐⭐⭐', price: '$10', name: 'Icecream', buttonLabel: 'Add to cart' },
    ],
    
  };

  handleAddToCart = (id) => {
    this.setState(prevState => ({
      foods: prevState.foods.map(food =>
        food.id === id
          ? { ...food, buttonLabel: 'Added to cart' }
          : food
      )
    }));
  };

  AddToCarthandle = (id) => {
    this.setState(prevState => ({
      foods2: prevState.foods2.map(food =>
        food.id === id
          ? { ...food, buttonLabel: 'Added to cart' }
          : food
      )
    }));
  };

  

  render() {
    return (
      <div>
        <div className="header bg-danger text-white p-3 text-center">
          <a href="/" className="text-white text-decoration-none">
            <b>Shadow Restaurant</b>
          </a>
          <Button variant="link" className="text-white" >
            Call Us: +91 8734694523
          </Button>
        </div>

        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Home</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#callus" onClick={this.toggleFooter}>Call Us</Nav.Link>
            </Nav>
            <Form className="d-flex">
            <Form.Control type="search" placeholder="Search" className="mr-2" />
              
            </Form>
            <Nav>
              <Nav.Link href="#wishlist">❤️</Nav.Link>
              <Nav.Link href="#cart">🛒</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Container>
          <h2>Popular Dishes</h2>
          <Row className="my-3">
            {this.state.foods.map(food => (
              <Col sm={6} md={3} key={food.id} className="mb-3">
                <Card className="card-hover" style={this.outsetStyle}>
                  <Card.Img variant="top" src={food.image} />
                  <Card.Body>
                    <Card.Title className='text-center'>{food.name}</Card.Title>
                    <Card.Text>
                      Rating: {food.rating} <br />
                      Price: {food.price}
                    </Card.Text>
                    <div className="d-flex justify-content-between">
                      <Button
                        variant="success"
                        onClick={() => this.handleAddToCart(food.id)}>
                        {food.buttonLabel}
                      </Button>
                      <Button
                        variant="outline-danger">
                         Wishlist
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>

        <Container>
          <h1>Desserts</h1>
          <Row className="my-3">
            {this.state.foods2.map(food => (
              <Col sm={6} md={3} key={food.id} className="mb-3">
                <Card className="card-hover" style={this.outsetStyle}>
                  <Card.Img variant="top" src={food.image} />
                  <Card.Body>
                    <Card.Title className='text-center'>{food.name}</Card.Title>
                    <Card.Text>
                      Rating: {food.rating} <br />
                      Price: {food.price}
                    </Card.Text>
                    <div className="d-flex justify-content-between">
                      <Button
                        variant="success"
                        onClick={() => this.AddToCarthandle(food.id)}>
                        {food.buttonLabel}
                      </Button>
                      <Button
                        variant="outline-danger">
                         Wishlist
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>

        <Footer />
      </div>
    );
  }
}

export default Task1;