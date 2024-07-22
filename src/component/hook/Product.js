import React from 'react';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Row } from 'reactstrap';
import "./hook.css";
function Product(props) {
    const { pro } = props
    return (
     
       
<Col xl={3}>

           <Card
    
  color="dark"
  outline
  style={{
    width: '18rem',
    height: '29rem',  
    border:'none',
    boxShadow:'0px 0px 5px 1px gray'
  }}
>
  <img
    alt="Sample"
    src={pro.img}
  />
  <CardBody>
    <CardTitle tag="h5" className='text-muted'>
      {pro.category}
    </CardTitle>
    <CardSubtitle
      className="mb-2 "
      tag="h6"

    >
  {pro.title}
    </CardSubtitle>
    <CardText>

    </CardText>
    {pro.price}
  </CardBody>
</Card>

</Col>
    
    );
}

export default Product;