import React, { useEffect, useState } from 'react';
import ListItems from '../ListItems/ListItems';
import data from "./fundingtype.json";

const FundingType = () => {

  const [fundingType, setFundingType] = useState([]);

  useEffect(() => {
    setFundingType(data.fundingType);
  }, []);


  return (
    <>
     <div className='funding-type-container pt-10'>
        <div className='heading text-4xl d-flex pl-9'>
          <h1 className='mr-3'>Explore By</h1> 
          <span className='font-semibold'>Funding Type</span>
        </div>

        <ListItems arr={fundingType} />
     </div>
    </>
  )
}

export default FundingType;