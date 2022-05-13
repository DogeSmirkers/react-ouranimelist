import React, { Component } from 'react';
import { useState, useEffect } from "react";
import '../App.css';
import {Form, Button, Container, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export default class SearchBar extends Component {

  constructor(props) {
    super(props)
    // Setting up functions
    this.onChangeSearchQuery = this.onChangeSearchQuery.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    // Setting up state
    this.state = {
      searchQuery: ''
    }
  }

  onChangeSearchQuery(e) {
    this.setState({ searchQuery: e.target.value })
    ////////////* Can't print data in terminal to verify if it's making api call */
    // const fetch = async () => {
    //   try {
    //     const res = await axios(`http://localhost:4000/search?${this.state.searchQuery}`);
    //     console.log(res.data.data[0].node);
    //   } catch (err) {
    //     console.error(err);
    //   }
    // };
    // fetch();
  }

  // not sure if onSubmit is working
  onSubmit(e) {
    e.preventDefault()
    ////////////* Can't print data in terminal to verify if it's making api call */
    // const fetch = async () => {
    //   try {
    //     const res = await axios(`http://localhost:4000/search?${this.state.searchQuery}`);
    //     console.log(res.data);
    //   } catch (err) {
    //     console.error(err);
    //   }
    // };
    // fetch();
    // axios.get(`http://localhost:4000/search?${this.state.searchQuery}`)
    //   .then(res => console.log(res))
    this.setState({ searchQuery: '' });
  };
  
  render(){
    return (
      <>
          <Container fluid className='searchBar'>
            <form  method="GET">
                {/* <input type="text" name="" placeholder="Search" value={this.state.searchQuery} onChange={this.onChangeSearchQuery}/> */}
                <input type="submit" formAction="/search" name="" value="Search"/>
            </form>
          </Container>
      </>
    );
}}