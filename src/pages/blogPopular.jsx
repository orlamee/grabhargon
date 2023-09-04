import React from 'react'
import EduHeader from "../components/educationalLoan/eduHeader";
import PopularContent from '../components/blog/popularContent';
import Replies from '../components/replies';
import SemiFooter from '../components/personalPage/semiFooter';
import Footer from "../components/footer";
import { Description, Title } from "react-head-meta";

function BlogPopular() {
  return (
    <div>
      <div>
        <Title title=" Popular Loan Terms and Their Meaning  " />
        <Description
          description=" Loan terms are important if you want to make the most out of your credit facility, and in this article, we review some of the most important loan terms to help you get started.

 "
        />
      </div>
     <EduHeader />
     <PopularContent/>
     <Replies />
     <SemiFooter />
     <Footer />
    </div>
  )
}

export default BlogPopular;