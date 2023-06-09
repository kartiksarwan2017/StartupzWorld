import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BsPersonCircle} from "react-icons/bs";
import {AiOutlineRight} from "react-icons/ai";
import "./Header.scss";

const Header = () => {
  return (
    <>
  <div className='header-container'>
  <Navbar className='header'>
        <Container className='navbar-container'>
          <Navbar.Brand href="/">
            <img
              src="./logo.png"
              className="d-inline-block align-top nav-img"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Nav className="nav-links d-flex justify-center items-center tracking-wide font-semibold">
            <Nav.Link href="/home">HOME</Nav.Link>
            <Nav.Link href="/startup">STARTUP</Nav.Link>
            <Nav.Link href="/investor">INVESTOR</Nav.Link>
            <Nav.Link href="/about-us">ABOUT US</Nav.Link>
            <Nav.Link href="/login" className='d-flex ml-20 mr-8'>
              <BsPersonCircle className='mr-2 mt-1' />
              <span>LOG IN</span>
              </Nav.Link>
            <Nav.Link href="/register">
              <button className="rounded-full bg-rose-600 p-3 d-flex justify-center items-center text-slate-50 hover:bg-red-500">
                 <span>ADD LISTING</span>
                <AiOutlineRight  />
              </button>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  </div>
    </>
  )
}

export default Header;