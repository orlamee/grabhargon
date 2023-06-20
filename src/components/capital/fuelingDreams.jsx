import { Fade } from "react-awesome-reveal";
import loan from "../../assets/capdash.png";
import fuel from "../../assets/fueltitle.svg";



export default function FuelDreams () {
  return (
    <section className='dreams-sec pe-0'>
      <div className='container-fluid'>
        <div className="row">
          <div className="col-lg-4 mb-3 offset-md-2 p-0">
            <Fade cascade>
              <img src={fuel} alt="Fueling dreams with small loans" className="img-fluid" />
              <p className="mt-5 w-75 text-black">Are you trying to start a business or keep it running? Our microlending options can help you by giving you small loans. These loans help fill the money gap and start your business on the way to success.</p>
            </Fade>
          </div>
          <div className="col-lg-5 offset-md-1 p-0">
            <img src={loan} alt="business-loans" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
    
  )
}
