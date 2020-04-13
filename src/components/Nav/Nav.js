import React from 'react'
import { Navbar, Container } from 'react-bootstrap';
import NavForm from '../NavForm/NavForm';

export default function Nav() {
  return (
    <Navbar fixed="top" bg="light" expand="sm">
      <Container>
        <Navbar.Brand href="#home">My Pokedex</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <NavForm />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
