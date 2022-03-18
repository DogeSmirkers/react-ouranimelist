import React, { Component } from 'react';
import { Form, Container, Button } from 'react-bootstrap';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'

export default class SignUp extends Component {
  constructor(props) {
    super(props)
    // Setting up functions
    this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
    this.onChangeUserPassword = this.onChangeUserPassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    // Setting up state
    this.state = {
      email: '',
      password: ''
    }
  }
  onChangeUserEmail(e) {
    this.setState({ email: e.target.value })
  }
  onChangeUserPassword(e) {
    this.setState({ password: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()
    const userObject = {
      email: this.state.email,
      password: this.state.password
    };
    axios.post('http://localhost:3000/user/sign-up', userObject)
      .then(res => console.log(res.data));
    this.setState({ email: '', password: '' })
  }
  render() {
    return (
        <Container>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={this.state.email} onChange={this.onChangeUserEmail}/>
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={this.state.password} onChange={this.onChangeUserPassword}/>
            </Form.Group>

            <Button variant="primary" type="submit">
              Create User
            </Button>
          </Form>

        </Container>
    );
}
}