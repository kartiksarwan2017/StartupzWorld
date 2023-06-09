import React from 'react';
import Card from 'react-bootstrap/Card';
import "./ListItems.scss";

const ListItems = ({arr}) => {

  return (
    <>
    <div className='list-container'>
        {
            arr.map((item, index) => {
                return(
                    <Card key={index} style={{ width: '18rem' }} className="card-container">
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                        </Card.Body>
                </Card>
                )
            })
        }
    </div>
    </>
  )
}

export default ListItems;
