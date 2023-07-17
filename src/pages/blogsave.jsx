import React from 'react'
import EduHeader from "../components/educationalLoan/eduHeader";
import SaveBlog from '../components/blog/saveBlog';
import Replies from '../components/replies';
import SemiFooter from '../components/personalPage/semiFooter';
import Footer from "../components/footer";

function Blogsave() {
  return (
    <div>
    <EduHeader />
    <SaveBlog />
    <Replies />
    <SemiFooter />
    <Footer />
   </div>
  );
}

export default Blogsave;