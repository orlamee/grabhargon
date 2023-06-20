import { Link } from "react-router-dom";
import sa from "../../assets/sa.svg";
import al from "../../assets/la.svg";
import gl from "../../assets/bl.svg";
import fd from "../../assets/ms.svg";
import ma from "../../assets/ml.svg";
import m from "../../assets/i.svg";
import cc from "../../assets/cc.svg";
import s from "../../assets/lpo.svg";



function DropDownFeatures() {
  return (
    <div className="dropdown-menu solution-menu sol-menu">
      <div className="row">
        <div className="col-sm-6">
          <Link to="/" className="d-flex flex-row mb-4">
            <img src={cc} alt="Credit" className="img-fluid me-3" />
            <h6 className="mt-2">Credit card</h6>
          </Link>
          <Link to="/business/loan-agency" className="d-flex flex-row mb-4">
            <img src={al} alt="Auto loan" className="img-fluid me-3" />
            <h6 className="mt-2">Loan Agency</h6>
          </Link>
          <Link to="/business/salary-loan" className="d-flex flex-row mb-4">
            <img src={sa} alt="Salary Advance" className="img-fluid me-3" />
            <h6 className="mt-2">Salary Loan</h6>
          </Link>
          <Link to="/business/business-loan" className="d-flex flex-row mb-4">
            <img src={gl} alt="Group loan" className="img-fluid me-3" />
            <h6 className="mt-2">Business Loan</h6>
          </Link>
        </div>
        <div className="col-sm-6">
          <Link to="/" className="d-flex flex-row mb-4">
            <img src={fd} alt="Fixed" className="img-fluid me-3" />
            <h6 className="mt-2">Merchant store</h6>
          </Link>
          <Link to="/" className="d-flex flex-row mb-4">
            <img src={s} alt="LPO Financing" className="img-fluid me-3" />
            <h6 className="mt-2">LPO Financing</h6>
          </Link>
          <Link to="" className="d-flex flex-row mb-4">
            <img src={m} alt="Invest" className="img-fluid me-3" />
            <h6 className="mt-2">Invest</h6>
          </Link>
          <Link to="" className="d-flex flex-row mb-4">
            <img src={ma} alt="Microlending" className="img-fluid me-3" />
            <h6 className="mt-2">Microlending</h6>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DropDownFeatures;