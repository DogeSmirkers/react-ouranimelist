import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'

export default class Search extends Component {
    constructor(props) {
      super(props)
      // Setting up functions
      this.onChangeSearchQuery = this.onChangeSearchQuery.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      // Setting up state
      this.state = {
        query: ''
      }
    }
    onChangeSearchQuery(e) {
      this.setState({ query: e.target.value })
    }
    onSubmit(e) {
      e.preventDefault()
      const searchQuery = {
        query: this.state.query
      };
      axios.get('http://localhost:4000/search?odd taxi')
        .then(res => console.log(res.data));
      this.setState({ query: '' })
    }
    render() {
      return (
          <Container>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Search</Form.Label>
                <Form.Control type="text" placeholder="Enter anime title" value={this.state.query} onChange={this.onChangeSearchQuery}/>
              </Form.Group>
              <Button variant="primary" type="submit">
                Search
              </Button>
            </Form>

          </Container>
      );
  }
}