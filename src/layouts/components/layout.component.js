import React from "react";
import Footer from "../../core/footer/components/footer.component";
import Header from "../../core/header/components/header.component";
import PageContent from "../../pages/page.module";

function LayoutComponent() {
  return (
    <div>
      <Header></Header>
      <PageContent></PageContent>
      <Footer></Footer>
    </div>
  );
}

export default LayoutComponent;
