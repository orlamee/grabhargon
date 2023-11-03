import React from "react";
import one from "../assets/mark1.svg";
import two from "../assets/mark2.svg";
import three from "../assets/mark3.svg";
import four from "../assets/mark4.svg";
import five from "../assets/mark5.svg";
import six from "../assets/mark6.svg";
import seven from "../assets/mark7.svg";
import eight from "../assets/mark8.svg";
import nine from "../assets/mark9.svg";
import ten from "../assets/mark10.svg";
import eleven from "../assets/mark11.svg";
import twelve from "../assets/mark12.svg";
import Marquee from "react-fast-marquee";

export default function CreditGalore() {
  return (
    <section className="">
      <div className="container-fluid creditgalore">
        <div className="row justify-content-center">
          <div className="col-sm-6 text-center pb-0">
            <h2>
              Credit <span style={{ color: "#23A323" }}>Galore</span>
            </h2>
            <p className="pt-3">We are putting the power back in your hand</p>
            <p className="pt-2 w-75 m-auto text-center ">
              Experience the power of a seamless credit platform where your
              needs are made a priority
            </p>
          </div>

          <Marquee  className="my-5 " style={{height: "300px"}}>
            <img src={one} alt="creditgalore" className=" max img-fluid mx-3" />
            <img src={two} alt="creditgalore" className=" max img-fluid mx-3" />
            <img src={three} alt="creditgalore" className="max img-fluid  mx-3" />
            <img src={four} alt="creditgalore" className=" max  img-fluid mx-3" />
            <img src={five} alt="creditgalore" className="max img-fluid mx-3" />
            <img src={six} alt="creditgalore" className=" max img-fluid mx-3" />
            <img src={seven} alt="creditgalore" className=" max img-fluid mx-3" />
            <img src={eight} alt="creditgalore" className=" max  img-fluid mx-3" />
            <img src={nine} alt="creditgalore" className=" max img-fluid mx-3" />
            <img src={ten} alt="creditgalore" className=" max  img-fluid mx-3" />
            <img src={eleven} alt="creditgalore" className=" max  mx-3" />
            <img src={twelve} alt="creditgalore" className=" max  mx-3" />
          </Marquee>
        </div>
      </div>

      <div className="bg-tape desktop">
        <div className="container-fluid"></div>
      </div>
      <div className="bg-tape-mobile mobile">
        <div className="container-fluid"></div>
      </div>
    </section>
  );
}
