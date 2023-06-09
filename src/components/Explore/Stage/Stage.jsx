import React, { useEffect, useState } from 'react';
import ListItems from '../ListItems/ListItems';
import data from "./stage.json";

const Stage = () => {

  
  const [state, setStage] = useState([]);

  useEffect(() => {
    setStage(data.stage);
  }, []);

  return (
    <>
     <div className="stage-container pt-10">
        <div className='heading text-4xl d-flex pl-9'>
          <h1 className='mr-3'>Explore By</h1> 
          <span className='font-semibold'>Stage</span>
        </div>

        <ListItems arr={state} /> 
     </div>
    </>
  )
}

export default Stage;