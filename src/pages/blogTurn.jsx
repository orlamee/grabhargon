import React from "react";
import EduHeader from "../components/educationalLoan/eduHeader";
import TurnSave from "../components/blog/turnSave";
import Replies from "../components/replies";
import SemiFooter from "../components/personalPage/semiFooter";
import Footer from "../components/footer";
import { Description, Title } from "react-head-meta";

function BlogTurn() {
  return (
    <div>
      <div>
        <Title
          title=" Turn savings into an Investment.

  "
        />
        <Description
          description="   learn how to turn your savings into an investment. Explore the benefits of savings and the type of investments you can channel them into.


 "
        />
      </div>
      <EduHeader />
      <TurnSave />
      <Replies />
      <SemiFooter />
      <Footer />
    </div>
  );
}

export default BlogTurn;
