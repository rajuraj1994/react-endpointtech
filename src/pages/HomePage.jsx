import React from "react";
import Carousel from "../components/Carousel";
import { Helmet } from "react-helmet";
import CardContainer from "../components/CardContainer";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Ecommere All Kinds of product available</title>
        <meta name="description" content="Ecommerce React" />
      </Helmet>
      <Carousel />
      <CardContainer />
    </>
  );
};

export default HomePage;
