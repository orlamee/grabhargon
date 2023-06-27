
import cbk from "../assets/credgalore.svg";

export default function CreditGalore() {
  return (
    <section className="creditgalore">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-7 text-center">
            <img src={cbk} alt="cbk" className="img-fluid" />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-5 text-center">
            <p className="text-white mt-9">Need a loan but not sure what exactly you want? Explore a world of credit options on Hargon. We are sure you can find the perfect credit option for you.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

