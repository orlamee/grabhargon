import React from 'react'
import EduHeader from "../components/educationalLoan/eduHeader";
import Unlocking from '../components/blog/unlocking';
import Replies from '../components/replies';
import SemiFooter from '../components/personalPage/semiFooter';
import Footer from "../components/footer";

function BlogUnlock() {
  return (
    <div>
     <EduHeader />
     <Unlocking/>
     <Replies />
     <SemiFooter />
     <Footer />
    </div>
  );
}

export default BlogUnlock;