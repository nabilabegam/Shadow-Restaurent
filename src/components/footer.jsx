import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer bg-light text-center p-5">
      <Container>
        <Row>
          
          <Col sm={6} md={4} className="mb-4">
            <h5>Contact Us</h5>
            <p>
              Call Us: +91 8734694523<br />
              100, PKP Main Road,<br />
              Thambaram,<br/>
              Chennai.
            </p>
            <p>
              Email: <a href="mailto:Shadowrestaurant@.com">Shadowrestaurant@.com</a><br />
              Website: <a href="https://www.Shadowrestaurant.com" target="_blank" rel="noopener noreferrer">www.Shadowrestaurant.com</a>
            </p>
          </Col>

          
          <Col sm={6} md={4} className="mb-4">
            <h5>Follow Us</h5>
            <div className="d-flex justify-content-center">
              <Button variant="link" className="text-dark">
                <FaFacebookF />
              </Button>
              <Button variant="link" className="text-dark">
                <FaTwitter />
              </Button>
              <Button variant="link" className="text-dark">
                <FaInstagram />
              </Button>
              <Button variant="link" className="text-dark">
                <FaWhatsapp />
              </Button>
            </div>
          </Col>

          
          <Col sm={6} md={4} className="mb-4">
            <h5>Login or Signup</h5>
            <Form>
              <Form.Group controlId="formNewsletterEmail">
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  className="mb-2"
                />
                <Button variant="success" type="submit">
                  Login
                </Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>

        <Row>
          
          <Col>
            <div className="pt-3">
              <a href="/about" className="mx-2">About Us</a>
              <a href="/menu" className="mx-2">Menu</a>
              <a href="/contact" className="mx-2">Contact</a>
              <a href="/privacy" className="mx-2">Privacy Policy</a>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="text-center pt-3">
        <p className="mb-0">Shadow Restaurant . All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
