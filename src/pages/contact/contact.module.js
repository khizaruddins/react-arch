import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "./components/contact/contact.component";

function ContactModule() {
  return (
    <Routes>
      <Route path="/" element={<Contact />} />
    </Routes>
  );
}

export default ContactModule;
