
import cbk from "../assets/credgalore.svg";
import utility from "../assets/utility.svg";

export default function CreditGalore() {
  return (
    <section className="creditgalore">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <img src={cbk} alt="creditgalore" className="img-fluid" />
          </div>
          <div className="col-sm-6 text-center">
            <p className="text-white">Need a loan but not sure what exactly you want?<br/>Explore a world of credit options on Hargon. We are sure<br/>you can find the perfect credit option for you.</p>
            <img src={utility} alt="utility" className="img-fluid w-100 mt-4" />
          </div>
        </div>
      </div>
    </section>
  )
}

