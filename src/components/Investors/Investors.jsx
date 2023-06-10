import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import {AiFillCheckCircle} from "react-icons/ai";
import data from "./investor.json";
import "./Investors.scss";

const Investors = () => {

    const [list, setList] = useState([]);

    useEffect(() => { 
        setList(data.investorDetails);
    }, []);

  return (

   <>

    <div className='investor-container'>
        <div className='heading-container'>
            <h1>Investors</h1>
        </div>


        <div className='investor-details'>
            <p>
            Welcome to our platform, where we connect innovative startups with savvy investors. Our goal is to make the investment process as seamless and efficient as possible. We understand that as an investor, you are looking for opportunities to grow your portfolio and generate returns. That's why we've created a platform that streamlines the process of finding, researching, and investing in startups.
            </p>
            <p>
            Our platform offers a wide range of startups across various industries and stages of development, providing investors with a diverse range of investment opportunities.
            </p>
        </div>

        <section className='investment-opportunities'>
            {
                list.map((item, index) => {
                    return (
                       <div key={index} className='d-flex p-2 ml-20 items-center'>
                        <AiFillCheckCircle style={{color: "green", fontSize: 20}} className='mr-2' />
                         <p className='text-xl'>{item.title}</p>
                       </div>
                    )
                })
            }
        </section>

        <section className="additional-details">
        <p>
        By joining our platform, you'll have access to a diverse range of investment opportunities and the support you need to make informed decisions. Let's work together to build your portfolio and achieve your financial goals.
        </p>

    <Card className='additional-details-card'>
    <Card.Body className="d-flex gap-x-20">
  <div>
  <Card.Title className="text-4xl">20,956,732</Card.Title>
        <Card.Text className='text-xl text-zinc-700 font-semibold relative right-20'>
           Registed Startups
        </Card.Text>
   </div>
        <div>
        <Card.Title className="text-4xl">9,050,656</Card.Title>
        <Card.Text className='text-xl text-zinc-700 font-semibold relative right-20'>
          Investors
        </Card.Text>
        </div>
      </Card.Body>
    </Card>

    </section>

    </div>

   </>

  )
}

export default Investors;