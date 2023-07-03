
import { Link } from "react-router-dom";
import logo from "../assets/dwl-logo.svg";
import get from "../assets/gst.svg";
import download from "../assets/dwh.svg";
import scan from "../assets/scan.svg";
import rii from "../assets/rii.png";





function DownloadHargon () {
  return (
    <section className="grabhargon pb-0">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <Link to="/"><img src={logo} alt="logo" className="img-fluid" /></Link>
            <Link><img src={get} alt="get started" className="img-fluid float-end" /></Link>
          </div>
        </div>
        <div className="mt-9">
          <div className="row">
            <div className="col-sm-6">
              <img src={download} alt="download hargon" className="img-fluid" />
            </div>
          </div>
        </div>
        <div>
          <div className="row justify-content-between">
            <div className="col-sm-4 mb-3" style={{marginTop: "140px"}}>
              <img src={scan} alt="barcode" className="img-fluid"  />
              <p className="text-white mt-4 w-50 ms-3">Scan the QR code below with your phone camera to download the Hargon app</p>
            </div>
            <div className="col-sm-7">
              <img src={rii} alt="barcode" className="img-fluid w-100" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DownloadHargon;
