import React, { useEffect, useState } from 'react';
import "./BusinessModel.scss";
import ListItems from '../ListItems/ListItems';
import data from "./businessModel.json";

const BusinessModel = () => {

  const [businessModel, setBusinessModel] = useState([]);

  useEffect(() => {
    setBusinessModel(data.businessModel);
  }, []);


  return (
    <>
    <div className='business-model-container pt-10'>
        <div className='heading text-4xl d-flex pl-9'>
          <h1 className='mr-3'>Explore By</h1> 
          <span className='font-semibold'>Business Model</span>
        </div>

        <ListItems arr={businessModel} />
    </div>
    </>
  )
}

export default BusinessModel;