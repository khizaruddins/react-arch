import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const HomeModule = React.lazy(() => import("./home/home.module"));
const ContactModule = React.lazy(() => import("./contact/contact.module"));

function PageContent() {
  return (
    <Suspense fallback={<div></div>}>
      <Routes>
        <Route path="/contact//*" element={<ContactModule />}></Route>
        <Route path="*" element={<HomeModule />}></Route>
      </Routes>
    </Suspense>
  );
}

export default PageContent;
