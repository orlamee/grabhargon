import { Link } from "react-router-dom";
import al from "../assets/career.svg";
import cc from "../assets/about.svg";



function DropDownCompany() {
  return (
    <div className="dropdown-menu company-menu sol-menu">
      <div className="row">
        <div className="col-sm-12">
          <Link to="/about-us" className="d-flex flex-row mb-4">
            <img src={cc} alt="About" className="img-fluid me-3" />
            <h6 className="mt-2">About us</h6>
          </Link>
          <Link to="/" className="d-flex flex-row mb-4">
            <img src={al} alt="Career" className="img-fluid me-3" />
            <h6 className="mt-2">Career page</h6>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DropDownCompany;