import React, { useEffect, useState } from 'react';
import ListItems from '../ListItems/ListItems';
import data from "./Interested.json";

const Interested = () => {

  const [interestedIn, setInterestedIn] = useState([]);

  useEffect(() => {
    setInterestedIn(data.InterestedIn);
  }, []);

  return (
    <>
     <div className='interested-container pt-10'>
      <div className='heading text-4xl d-flex pl-9'>
            <h1 className='mr-3'>Explore By</h1> 
            <span className='font-semibold'>Interested In</span>
      </div>

      <ListItems arr={interestedIn} />
     </div>
    </>
  )
}

export default Interested;