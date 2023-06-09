import React, { useEffect, useState } from 'react';
import ListItems from '../ListItems/ListItems';
import data from "./investmentNature.json";


const InvestmentNature = () => {

  const [investmentNature, setInvestmentNature] = useState([]);

  useEffect(() => {
    setInvestmentNature(data.investmentNature);
  }, []);

  return (
    <>
     <div className='investment-nature-container pt-10'>
      <div className='heading text-4xl d-flex pl-9'>
          <h1 className='mr-3'>Explore By</h1> 
          <span className='font-semibold'>Investment Nature</span>
        </div>

        <ListItems arr={investmentNature} />  
     </div>
    </>
  )
}

export default InvestmentNature;