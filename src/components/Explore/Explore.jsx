import React from 'react';
import Category from "./Category/Category.jsx";
import BusinessModel from "./BusinessModel/BusinessModel.jsx";
import Interested from "./Interested/Interested.jsx";
import Stage from "./Stage/Stage.jsx";
import FundingType from "./FundingType/FundingType.jsx";
import BusinessNature from "./BusinessNature/BusinessNature.jsx";
import InvestmentNature from "./InvestmentNature/InvestmentNature.jsx";

const Explore = () => {
  return (
    <div>
      <Category />
      <BusinessModel />
      <Interested />
      <Stage />
      <FundingType />
      <BusinessNature />
      <InvestmentNature />
    </div>
  )
}

export default Explore;