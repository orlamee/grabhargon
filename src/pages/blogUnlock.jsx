import React from "react";
import EduHeader from "../components/educationalLoan/eduHeader";
import Unlocking from "../components/blog/unlocking";
import Replies from "../components/replies";
import SemiFooter from "../components/personalPage/semiFooter";
import Footer from "../components/footer";
import { Description, Title } from "react-head-meta";

function BlogUnlock() {
  return (
    <div>
      <div>
        <Title
          title=" Unlocking Financial Success in Nigeria
  "
        />
        <Description
          description="  Despite the worldwide economic downturn, financial success is possible, especially in Nigeria. 





 "
        />
      </div>
      <EduHeader />
      <Unlocking />
      <Replies />
      <SemiFooter />
      <Footer />
    </div>
  );
}

export default BlogUnlock;
