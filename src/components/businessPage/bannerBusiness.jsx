import banner from "../../assets/static.png";
import why from "../../assets/growth.svg";
import nin from "../../assets/gobtn.svg";

export default function BannerBusiness() {
  return (
    <section className="personalbg">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 mb-3">
            <img src={why} alt="fueling your business growth through credit " className="img-fluid mt-4 mb-4 w-100" />
            <p className="w-75">
              Use Hargon’s flexible and reliable lending solutions to power up
              your business for success. Our lending solutions offer many
              options for your business to get ahead in an increasingly
              competitive industry.
            </p>
            <img src={nin} alt="get started" className="img-fluid mt-4 mb-4" />
          </div>
          <div className="col-sm-6">
            <img src={banner} alt="banner" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
  );
}
