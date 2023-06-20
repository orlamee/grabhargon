import loan from "../../assets/lowinterest.png";
import int from "../../assets/int.svg";
import { Fade } from "react-awesome-reveal";



export default function Interest () {
  return (
    <section className='agency-hero'>
      <div className='container'>
        <div className="row">
          <div className="col-sm-5 mt-5">
            <img src={int} alt="Interests and repayment options" className="img-fluid mb-5" />
            <Fade cascade>
              <p>Thrive with Hargon</p>
              <p className="mt-3 w-87">Enjoy the flex of low-interest credit and attractive payment terms on our platform, empowering you to serve more customers and stand out</p>
            </Fade>
          </div>
          <div className="col-sm-7">
            <Fade>
              <img src={loan} alt="low interest" className="img-fluid w-100" />
            </Fade>
          </div>
        </div>
      </div>
    </section>
    
  )
}
