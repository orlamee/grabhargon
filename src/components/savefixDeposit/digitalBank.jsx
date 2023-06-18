import bank from "../../assets/bank.png";
import lower from "../../assets/left.svg";



export default function DigitalBank () {
  return (
    <section className='digi pb-0'>
      <div className='container-fluid'>
        <div className="row">
          <div className="col-lg-4 mb-3 offset-md-2 p-0 mt-5">
            <h2 className="mb-4">Digital Banking</h2>
            <p className="w-75 mb-5">Hargon facilitates your bill payments and savings, while helping you analyze spending habits, suggesting areas to cut, and potentially increasing your saving without much sacrifice.</p>
            <img src={lower} alt="lower" className="img-fluid" />
          </div>
          <div className="col-lg-5 offset-md-1 p-0">
            <img src={bank} alt="digital bank" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
    
  )
}
