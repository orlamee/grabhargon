import React from 'react'
import EduHeader from "../components/educationalLoan/eduHeader";
import DefaultLoan from '../components/blog/defaultLoan';
import Replies from '../components/replies';
import SemiFooter from '../components/personalPage/semiFooter';
import Footer from "../components/footer";
import { Description, Title } from "react-head-meta";

function BlogDefault() {
  return (
    <div>
         <div>
        <Title
          title=" The Consequences of Defaulting on Loans





  "
        />
        <Description
          description="  Defaulting on loans causes financial problems, so avoiding it is your best bet. Learn the consequences of defaulting on loans and how to rebuild if you have defaulted.






 "
        />
      </div>
     <EduHeader />
     <DefaultLoan/>
     <Replies />
     <SemiFooter />
     <Footer />
    </div>
  );
}

export default BlogDefault;