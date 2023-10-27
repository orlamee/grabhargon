import { useRef, useState, useEffect } from "react";
// import drop from "../assets/num.svg";
// import mp from "../assets/mp.svg";
// import card from "../assets/lend.svg";
// import secure from "../assets/daily.svg";
// import qbl from "../assets/qbl.svg";
import wch from "../assets/wch.svg";
// import sc from "../assets/sc.svg";
// import cre from "../assets/cre.svg";
import trans from "../assets/trans.svg";
import agent from "../assets/lagent.svg";
import client from "../assets/c.svg";
import CountUp from "react-countup";
import first from "../assets/why first.png";
import firstsmall from "../assets/first small.png";
import second from "../assets/second.png";
import secondsmall from "../assets/second small.png";
import third from "../assets/third.png";
import thirdsmall from "../assets/third small.png";
import fourth from "../assets/fourth.png";
import fourthsmall from "../assets/fourthsmall.png";
import fifth from "../assets/fifth.png";
import fifthsmall from "../assets/fifthsmall.png";
import sixth from "../assets/sixth.png";
import sixthsmall from "../assets/sixth small.png";

import "../styles/whychoose.css";
import { motion, useScroll } from "framer-motion";

export default function WhyChoose() {
  const containerRef = useRef(null);
  const [scrollY, setScrollY] = useState(window.scrollY);
  const [elementOffset, setElementOffset] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);
  const [elementScrollThrough, setElementScrollThrough] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["120px", "end end"],
  });

  useEffect(() => {
    window.addEventListener("scroll", () => setScrollY(window.scrollY));

    return window.removeEventListener("scroll", () =>
      setScrollY(window.scrollY)
    );
  }, [scrollY]);

  useEffect(() => {
    const container = document.getElementById("main-container");
    // if (container) {

    // }
    if (container) {
      setContainerHeight(container.scrollHeight);
      setElementOffset(container.offsetTop);
      window.addEventListener("resize", () =>
        setElementOffset(container.offsetTop)
      );
    }

    return window.removeEventListener("resize", () => {
      if (container) {
        setElementOffset(container.offsetTop);
        window.removeEventListener("resize", () =>
          setElementOffset(container.offsetTop)
        );
      }
    });
  }, [elementOffset]);

  useEffect(() => {
    if (scrollY >= elementOffset) {
      if (elementScrollThrough === containerHeight) return;
      setElementScrollThrough(scrollY - elementOffset);
    }
  }, [elementOffset, scrollY, elementScrollThrough, containerHeight]);

  return (
    <section className="main-container" ref={containerRef} id="main-container">
      <div className="content-wrapper">
        <div className="container ">
          <div className="tracker-container">
            <motion.div
              className="tracker"
              style={{ scaleY: scrollYProgress }}
            />
          </div>
          <div className="row justify-content-between mb-5">
            <div className="col-sm-6">
              <img src={wch} alt="why choose hargon" className="img-fluid" />
            </div>
            <div className="col-sm-5 mt-3">
              <div className="card-hero">
                <div className="row justify-content-center">
                  <div className="col trac-hero text-center mb-3">
                    <img src={trans} alt="trans" className="img-fluid mb-3" />
                    <h3 className="">
                      <span style={{ fontSize: "14px", lineHeight: "14px" }}>
                        ₦
                      </span>{" "}
                      <CountUp end={3} delay={3} duration="20" suffix="B+" />
                    </h3>
                  </div>
                  <div className="col trac-hero text-center mb-3">
                    <img src={client} alt="trans" className="img-fluid mb-3" />
                    <h3 className="">
                      <CountUp end={1000} delay={3} duration="20" suffix="+" />
                    </h3>
                  </div>
                  <div className="col text-center mb-3">
                    <img src={agent} alt="trans" className="img-fluid mb-3" />
                    <h3 className="">
                      <CountUp end={56} delay={3} duration="20" suffix="+" />
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`${
              elementScrollThrough < 1500
                ? "row justify-content-between"
                : "hide"
            }`}
          >
            <div className="col-sm-3 my-auto">
              <img
                src={firstsmall}
                alt=""
                className="img-fluid content-image"
              />
              <h1 className="content-title">Upfront Interest</h1>
              <p className="content-subtitle ">
                Make your money work for you. Enjoy upfront interests on all
                your long term savings or fixed deposits on Hargon.
              </p>
            </div>
            <div className="col-sm-5">
              <img src={first} alt="upfront interest" className="img-fluid" />
            </div>
          </div>

          <div
            className={`${
              elementScrollThrough >= 1500 && elementScrollThrough < 3000
                ? "row justify-content-between"
                : "hide"
            }`}
          >
            <div className="col-sm-3 my-auto">
              <img
                src={secondsmall}
                alt=""
                className="img-fluid content-image"
              />
              <h1 className="content-title">House of Bills</h1>
              <p className="content-subtitle">
                Take care of all your bills in one place. Never miss another
                bill payment.
              </p>
            </div>
            <div className="col-sm-5">
              <img src={second} alt="upfront interest" className="img-fluid" />
            </div>
          </div>

          <div
            className={`${
              elementScrollThrough >= 3000 && elementScrollThrough < 4500
                ? "row justify-content-between"
                : "hide"
            }`}
          >
            <div className="col-sm-3 my-auto">
              <img
                src={thirdsmall}
                alt=""
                className="img-fluid content-image"
              />
              <h1 className="content-title">Cashback Payment</h1>
              <p className="content-subtitle">
                Refer your contacts to Hargon for their credit solutions and
                earn amazing rewards from the platform.
              </p>
            </div>
            <div className="col-sm-5">
              <img src={third} alt="cash back" className="img-fluid" />
            </div>
          </div>
          <div
            className={`${
              elementScrollThrough >= 4500 && elementScrollThrough < 6000
                ? "row justify-content-between"
                : "hide"
            }`}
          >
            <div className="col-sm-3 my-auto">
              <img
                src={fourthsmall}
                alt="lend thorugh"
                className="img-fluid content-image"
              />
              <h1 className="content-title">Lend through Hargon</h1>
              <p className="content-subtitle">
                Lend and earn to family, friends, and colleagues using the
                Hargon platform.
              </p>
            </div>
            <div className="col-sm-5">
              <img src={fourth} alt="lend" className="img-fluid" />
            </div>
          </div>

          <div
            className={`${
              elementScrollThrough >= 6000 && elementScrollThrough < 7500
                ? "row justify-content-between"
                : "hide"
            }`}
          >
            <div className="col-sm-3 my-auto">
              <img
                src={fifthsmall}
                alt="quick loans"
                className="img-fluid content-image"
              />
              <h1 className="content-title">Quick Loans</h1>
              <p className="content-subtitle">
                Access quick loans and solutions for your business needs at very
                low interests
              </p>
            </div>
            <div className="col-sm-5">
              <img src={fifth} alt="quick loans" className="img-fluid" />
            </div>
          </div>

          <div
            className={`${
              elementScrollThrough >= 7500
                ? "row justify-content-between"
                : "hide"
            }`}
          >
            <div className="col-sm-3 my-auto">
              <img
                src={sixthsmall}
                alt="daily interest"
                className="img-fluid content-image"
              />
              <h1 className="content-title">Daily interest on Savings</h1>
              <p className="content-subtitle">
                You can earn passively by accumulating daily interests on every
                savings account you have on Hargon
              </p>
            </div>
            <div className="col-sm-5">
              <img src={sixth} alt="daily interest" className="img-fluid" />
            </div>
          </div>
        </div>

        {/* <div className="row justify-content-between mt-4">
          <div className="col-sm-6">
            <div className="mt-5">
              <div className="row justify-content-between">
                <div className="col-sm-5 mb-3">
                  <div className="mb-5 products-cards">
                    <img src={cre} alt="drop" className="img-fluid" />
                    <h6 className="mt-3">Credit for shopping</h6>
                  </div>
                  <div className="mb-5 products-cards">
                    <img src={sc} alt="drop" className="img-fluid" />
                    <h6 className="mt-3">Secure inter-app transfers</h6>
                  </div>
                  <div className="mb-5 products-cards">
                    <img src={qbl} alt="drop" className="img-fluid" />
                    <h6 className="mt-3">Quick Business Loans</h6>
                  </div>
                </div>
                <div className="col-sm-5">
                  <div className="mb-5 products-cards">
                    <img src={drop} alt="drop" className="img-fluid" />
                    <h6 className="mt-3">Numerous Credit options</h6>
                  </div>
                  <div className="mb-5 products-cards">
                    <img src={card} alt="drop" className="img-fluid" />
                    <h6 className="mt-3">Lend through Hargon</h6>
                  </div>
                  <div className="mb-5 products-cards">
                    <img src={secure} alt="drop" className="img-fluid" />
                    <h6 className="mt-3">Daily interest on Savings</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-5 mt-5">
            <img src={mp} alt="drop" className="img-fluid w-100" />
          </div>
        </div> */}
      </div>
    </section>
  );
}
