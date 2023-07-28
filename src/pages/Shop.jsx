import React from 'react'
import Footer from "../components/footer";
import Shophero from '../components/shopNew/shophero';
import EduHeader from "../components/educationalLoan/eduHeader";
import Shoppers from '../components/shopNew/shoppers';
import Benefits from '../components/shopNew/benefits';
import Reachmore from '../components/shopNew/reachmore';
import SemiFooter from "../components/personalPage/semiFooter";



function Shop() {
  return (
    <div>
      <EduHeader/>
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