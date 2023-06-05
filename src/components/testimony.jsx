
import whatusers from "../assets/whatusers.svg";
import props from "../assets/test.svg";
import q from "../assets/q.svg";

export default function Testimony() {
  return (
    <section className="testimony">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-6 text-center">
            <img src={whatusers} alt="What Our Users Say" className="img-fluid" />
          </div>
        </div>
        <div className="row mt-9 justify-content-between">
          <div className="col-sm-5 mb-3">
            <div className="test-card">
              <div className="row justify-content-center">
                <div className="col-sm-8">
                  <div className="text-center">
                    <img src={q} alt="q" className="img-fluid mb-3"/>
                    <h6>“Hargon has transformed my finances through quick and accessible loans”</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <img src={props} alt="testimonial" className="img-fluid w-100" />
          </div>
        </div>
       
      </div>
    </section>
  )
}

