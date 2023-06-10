import React, {useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import data from "./startup.json";
import "./StartUps.scss";

const StartUps = () => {

    const [startupdetails, setStartUpDetails] = useState([]);

    useEffect(() => {
        setStartUpDetails(data.startUp);
    }, []);

  return (
    <>
     <div className='startup-container'>
        <div className='heading-container'>
            <h1>STARTUPS</h1>
            <p>Starting a business can be a challenging and rewarding experience, but it can also be a lonely one. That's why we created our platform, to provide a community for startups to connect, collaborate, and grow.</p>
        </div>

        <section className='details-container ml-10'>
           {
            startupdetails.map((item, index) => {
                return (
                <Card key={index} style={{ width: '18rem'}} className="startup-details">
                    <Card.Body>
                      <Card.Title classname="card-number" style={{fontSize: 50, color: "grey", fontWeight: "bolder"}}>{item.number}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted card-sub-title">{item.title}</Card.Subtitle>
                      <Card.Text className="card-description"> 
                      {item.description}
                      </Card.Text>
                    </Card.Body>
                </Card>            
                )
            })
           }
        </section>


        <section className="additional-details">
        <p>
           In addition to these benefits, we also offer a variety of tools and resources designed to help you manage and grow your business. From legal and financial advice to marketing and PR support, we've got everything you need to take your business to the next level.
          
        </p>
        <p>
        So if you're a startup looking for a supportive community, access to funding and resources, and the opportunity to connect with like-minded entrepreneurs, register with us today and start reaping the benefits of our platform!
        </p>

    <Card className='additional-details-card'>
    <Card.Body className="d-flex gap-x-20">
  <div>
  <Card.Title className="text-4xl">20,956,732</Card.Title>
        <Card.Text className='text-xl text-zinc-700 font-semibold'>
           Registed Startups
        </Card.Text>
  </div>
        <div>
        <Card.Title className="text-4xl">9,050,656</Card.Title>
        <Card.Text className='text-xl text-zinc-700 font-semibold'>
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

export default StartUps;