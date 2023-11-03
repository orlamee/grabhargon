import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logo.svg";
import globe from "../../assets/globe.svg";
import { Link, useNavigate } from "react-router-dom";
import DropDownSolution from "../personalPage/dropdownSolution";
import DropDownCompany from "../dropdownCompany";
import { Button } from "react-bootstrap";
import ComingSoonDropDown from "../ComingSoonDropDown";

function EduHeader() {
  const navigate = useNavigate();
  return (
    <Navbar bg="white" expand="lg" className="py-3 header sticky-top">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="stackivy" className="img-fluid" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto p-b">
            <li className="nav-item">
              <a className="nav-link" href="/personal">
                Personal
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link ms-0" href="/business">
                Business
              </a>
            </li>
          </Nav>
          <Nav className="mx-auto">
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Solution
              </Link>
              <DropDownSolution />
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Coming Soon
              </Link>
              <ComingSoonDropDown />
            </li>

            {/* <Nav.Link href="/">Partnership <span className='p-cs'>Coming Soon</span></Nav.Link>
            <Nav.Link href="/auction">Auction</Nav.Link> */}
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Company
              </Link>
              <DropDownCompany />
            </li>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="/">
              <img src={globe} alt="stackivy" className="img-fluid globe" />
            </Nav.Link>
            <Nav.Link>
              <Button
                className="btn btn-main rounded-pill px-5 py-3"
                onClick={() => navigate("/grabhargon")}
              >
                Get Started
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default EduHeader;
