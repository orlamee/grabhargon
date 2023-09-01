import banner from "../../assets/activeuse.png";
import nin from "../../assets/gobtn.svg";

export default function Banner() {
  return (
    <section className="personalbk">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 mb-3">
            <h2 className="mt-4 mb-4">
              Empowering your{" "}
              <span style={{ color: "#228B22" }}> Financial Dreams!</span>{" "}
              Anywhere, Anytime.
            </h2>
            <p className="w-75">
              {" "}
              At Hargon, we're dedicated to being more than just a lending
              platform, Whether you're looking to turn your dreams into reality,
              manage unexpected expenses, or simply make smart investments,
              we're here to make it happen.
            </p>
            <img src={nin} alt="get started" className="img-fluid mt-4" />
          </div>
          <div className="col-sm-6">
            <img src={banner} alt="banner" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
  );
}
