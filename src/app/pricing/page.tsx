import Banner from "@/components/Banner";
import Porfolio from "@/components/Porfolio";
import Pricing from "@/components/Pricing";
import Subcribe from "@/components/Subcribe";
import React from "react";

const PricingPage = () => {
  return (
    <>
      <Banner title="pricing" path="pricing" />

      <Pricing />
      <Porfolio />
      <Subcribe />
    </>
  );
};

export default PricingPage;
