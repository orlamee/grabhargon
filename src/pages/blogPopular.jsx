import React from 'react'
import EduHeader from "../components/educationalLoan/eduHeader";
import PopularContent from '../components/blog/popularContent';
import Replies from '../components/replies';
import SemiFooter from '../components/personalPage/semiFooter';
import Footer from "../components/footer";

function BlogPopular() {
  return (
    <div>
     <EduHeader />
     <PopularContent/>
     <Replies />
     <SemiFooter />
     <Footer />
    </div>
  )
}

export default BlogPopular;