import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../assets/logo.svg";
import globe from "../assets/globe.svg";



function Header () {
  return (
    <Navbar bg="white" expand="lg" className='py-3 header sticky-top'>
      <Container>
        <Navbar.Brand href="/"><img src={logo} alt="stackivy" className='img-fluid' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/">Personal   |   Business</Nav.Link>
            <Nav.Link href="/">Shop</Nav.Link>
            <Nav.Link href="/">Invest</Nav.Link>
            <Nav.Link href="/">Company</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="/pricing"><img src={globe} alt="stackivy" className='img-fluid globe' /></Nav.Link>
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


export default Header