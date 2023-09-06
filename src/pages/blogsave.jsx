import React from 'react'
import EduHeader from "../components/educationalLoan/eduHeader";
import SaveBlog from '../components/blog/saveBlog';
import Replies from '../components/replies';
import SemiFooter from '../components/personalPage/semiFooter';
import Footer from "../components/footer";
import { Description, Title } from "react-head-meta";

function Blogsave() {
  return (
    <div>
        <div>
        <Title
          title=" Tips for Saving and Investing For beginners







  "
        />
        <Description
          description="   Discover essential tips for saving and investing as a beginner. Learn the practical strategies to build a strong financial foundation, make smart investment choices, and grow your wealth over time.










 "
        />
      </div>
    <EduHeader />
    <SaveBlog />
    <Replies />
    <SemiFooter />
    <Footer />
   </div>
  );
}

export default Blogsave;