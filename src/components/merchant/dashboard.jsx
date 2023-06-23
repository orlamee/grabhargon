import { Slide } from "react-awesome-reveal";
import dashboard from "../../assets/dashboard.svg";



export default function Dashboard () {
  return (
    <section className='pcc pb-0'>
      <div className='container'>
        <div className="row">
          <div className="col-sm-12">
            <Slide direction="right">
              <img src={dashboard} alt="hargon dashboard" className="img-fluid w-100" />
            </Slide>
          </div>
        </div>
      </div>
    </section>
    
  )
}
