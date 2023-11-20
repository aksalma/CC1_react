import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Content from './Content/Content'
import ThemeContextProvider from './Context/ThemeContext';

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary fixed-top">
      <Container fluid>
        <Navbar.Toggle className='btnTog' aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="nav me-auto my-2 my-lg-0">
            <Nav.Link className='lien' as={Link} to="/">Home</Nav.Link>
            <Nav.Link className='lien' as={Link} to="/Calc">Calculator</Nav.Link>
            <Nav.Link className='lien' as={Link} to="/Slider">Slider</Nav.Link>
            <Nav.Link className='lien' as={Link} to="/Todo">TO DO List</Nav.Link>
            <Nav.Link className='lien' as={Link} to="/Api">Pagination</Nav.Link>
            <Nav.Link className='lien' as={Link} to="/Langs">MultiLanguage</Nav.Link>
            <Nav.Link className='lien' as={Link} to="/*">Others</Nav.Link>
            <Nav.Link className='lien'>
                
                <ThemeContextProvider>
        <Content />
      </ThemeContextProvider></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;

