import React from 'react';
import '../../App.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <>
      <Container>
        <Row>
          <Col sm={0} lg={3}></Col>
          <Col sm={12} lg={6}>
            <div className='sign-up-form'>
              <Row>
                <Col lg={{ span: 8 }} className="left-form">
                  <h4 style={{ textAlign: 'right'}}> Sign Up</h4>
                    <Form>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="username" placeholder="DogeSmirker_CoCo" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="CoCo@dogesmirker.com" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="D**esm****r" />
                      </Form.Group>
                    </Form>
                    <div className='text-center'>
                      <Button variant="custom"> Sign Up </Button>{' '}
                    </div>
                    <hr style={{ backgroundColor: "#00334f", height: 2, width: "100%" }}/>
                    <h4 style={{ textAlign: 'right'}}> Log In</h4>
                    <Form>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="CoCo@dogesmirker.com" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="D**esm****r" />
                      </Form.Group>
                    </Form>
                    <div className='text-center'>
                      <Button variant="custom"> Log In </Button>{' '}
                    </div>
                  </Col>
                  <Col lg={{ span: 4 }} className="right-form">
                    <br/>
                    <img src={require("../images/dogeLick.jpeg")} alt="Card image"/>  
                    <h4> Pretty, Not Function </h4>
                  </Col>
              </Row>
            </div>
          </Col>
          {/* <Col sm={0} lg={2}></Col> */}
          <Col sm={0} lg={3}></Col>
        </Row>
      </Container>
    </>
  );
}