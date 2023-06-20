import desktop from "../../assets/desktop.png";
import { Fade } from "react-awesome-reveal";



export default function Personalized () {
  return (
    <section className='p-sec pb-0'>
      <div className='container'>
        <div className="row justify-content-center">
          <div className="col-sm-9 text-center">
            <Fade cascade>
              <h2>Personalized support</h2>
            </Fade>
          </div>
        </div>
        <div className="row justify-content-center mt-4">
          <div className="col-sm-4 text-center">
            <Fade cascade>
              <p className="">With Hargon, you will enjoy all the benefits of a dedicated account manager, helping you streamline your business and connect with more borrowers</p>
            </Fade>
          </div>
        </div>
        <div className="row justify-content-center" style={{marginTop: "70px"}}>
          <div className="col-sm-12">
            <img src={desktop} alt="dashboard" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
    
  )
}
