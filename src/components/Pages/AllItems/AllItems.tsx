import React, { useEffect } from "react";
import { Header } from "../../Header/Header";
import { Contacts } from "../../Contacts/Contacts";
import { Footer } from "../../Footer/Footer";
import { AllItemsList } from "./AllItemsList";
import { Form } from "../../Form/Form";
export const AllItems: React.FC = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);
  return (
    <>
      <Header />
      <AllItemsList />
      <Form />
      <Contacts />
      <Footer />
    </>
  );
};
