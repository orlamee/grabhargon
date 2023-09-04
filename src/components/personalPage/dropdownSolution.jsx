import { Link } from "react-router-dom";
import qc from "../../assets/qc.svg";
import sa from "../../assets/sa.svg";
import al from "../../assets/al.svg";
import gl from "../../assets/gl.svg";
import p from "../../assets/p.svg";
import sl from "../../assets/sl.svg";
import fd from "../../assets/bills.svg";
import ma from "../../assets/ma.svg";
import m from "../../assets/m.svg";
import t from "../../assets/t.svg";
import cc from "../../assets/cc.svg";
import s from "../../assets/s.svg";



function DropDownSolution() {
  return (
    <div className="dropdown-menu solution-menu sol-menu">
      <div className="row">
        <div className="col-sm-6">
          <Link to="/personal/quickcredit" className="d-flex flex-row mb-4">
            <img src={qc} alt="quickcredit" className="img-fluid me-3" />
            <h6 className="mt-2">Quick Credit</h6>
          </Link>
          <Link to="/personal/pay-day" className="d-flex flex-row mb-4">
            <img src={sa} alt="Pay Day" className="img-fluid me-3" />
            <h6 className="mt-2">PayDay</h6>
          </Link>
          <Link to="/personal/auto" className="d-flex flex-row mb-4">
            <img src={al} alt="Auto loan" className="img-fluid me-3" />
            <h6 className="mt-2">Auto</h6>
          </Link>
          <Link to="/personal/community" className="d-flex flex-row mb-4">
            <img src={gl} alt="Group loan" className="img-fluid me-3" />
            <h6 className="mt-2">Community</h6>
          </Link>
          <Link to="/personal/student" className="d-flex flex-row mb-4">
            <img src={sl} alt="Student" className="img-fluid me-3" />
            <h6 className="mt-2">Student</h6>
          </Link>
          <Link to="/personal/pawn" className="d-flex flex-row mb-4">
            <img src={p} alt="Pawn" className="img-fluid me-3" />
            <h6 className="mt-2">Pawn</h6>
          </Link>
        </div>
        <div className="col-sm-6">
          <Link to="/personal/bills" className="d-flex flex-row mb-4">
            <img src={fd} alt="bills" className="img-fluid me-3" />
            <h6 className="mt-2">Bills</h6>
          </Link>
          <Link to="/personal/savings" className="d-flex flex-row mb-4">
            <img src={s} alt="Savings" className="img-fluid me-3" />
            <h6 className="mt-2">Savings</h6>
          </Link>
          <Link to="/personal/mortgage" className="d-flex flex-row mb-4">
            <img src={m} alt="mortgage" className="img-fluid me-3" />
            <h6 className="mt-2">Mortgage</h6>
          </Link>
          <Link to="/personal/market-place" className="d-flex flex-row mb-4">
            <img src={ma} alt="Marketplace" className="img-fluid me-3" />
            <h6 className="mt-2">Marketplace</h6>
          </Link>
          <Link to="/personal/tourism" className="d-flex flex-row mb-4">
            <img src={t} alt="Tourism" className="img-fluid me-3" />
            <h6 className="mt-2">Tourism</h6>
          </Link>
          <Link to="/personal/credit-card" className="d-flex flex-row mb-4">
            <img src={cc} alt="Credit" className="img-fluid me-3" />
            <h6 className="mt-2">Credit card</h6>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DropDownSolution;