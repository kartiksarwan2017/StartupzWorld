import React, {useState, useEffect} from 'react';
import ListItems from '../ListItems/ListItems';
import data from "./businessnature.json";

const BusinessNature = () => {

  const [businessNature, setbusinessNature] = useState([]);

  useEffect(() => {
    setbusinessNature(data.businessNature);
  }, []);

  console.log("businessNature", businessNature)
  return (
    <>
     <div className='business-nature-container pt-10'> 
        <div className='heading text-4xl d-flex pl-9'>
          <h1 className='mr-3'>Explore By</h1> 
          <span className='font-semibold'>Business Nature</span>
        </div>

        <ListItems arr={businessNature} />
     </div>
    </>
  )
}

export default BusinessNature;