import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../assets/logo.svg";
import globe from "../../assets/globe.svg";
import { Link } from 'react-router-dom';
import DropDownFeatures from './dropDownFeatures';
import DropDownCompany from '../dropdownCompany';



function BusinessHeader () {
  return (
    <Navbar bg="white" expand="lg" className='py-3 header sticky-top'>
      <Container>
        <Navbar.Brand href="/"><img src={logo} alt="stackivy" className='img-fluid' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href='/personal'>Personal</Nav.Link>
            <Nav.Link href='/business'>Business</Nav.Link>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Features
              </Link>
              <DropDownFeatures/>
            </li>
            <Nav.Link href="/">Invest</Nav.Link>
            <Nav.Link href="/">Auction</Nav.Link>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Company
              </Link>
              <DropDownCompany/>
            </li>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="/"><img src={globe} alt="stackivy" className='img-fluid globe' /></Nav.Link>
            <Nav.Link>
              <a
                className="btn btn-primary btn-main rounded-pill px-5 py-3"
                href="#!"
              >
                Get Started
              </a>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  )
}


export default BusinessHeader