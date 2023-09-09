import React from 'react'
import Footer from "../components/footer";
import Shophero from '../components/shopNew/shophero';
import Header from "../components/navbar";
import Shoppers from '../components/shopNew/shoppers';
import Benefits from '../components/shopNew/benefits';
import Reachmore from '../components/shopNew/reachmore';
import SemiFooter from "../components/personalPage/semiFooter";
import { Description, Title } from "react-head-meta";




function Shop() {
  return (
    <div>
        <div>
        <Title title="   Experience shopping on credit " />
        <Description
          description="
          Experience the wonders of a  shopping platform powered by credit. Buy, sell, and earn all on credit.
 "
        />
      </div>
      <Header/>
      <Shophero />
      <Shoppers />
      <Reachmore />
      <Benefits />
      <SemiFooter/>
      <Footer/>
    </div>
    
  );
}

export default Shop;