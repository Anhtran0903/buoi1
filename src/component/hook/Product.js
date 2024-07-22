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
    border:'none',
    boxShadow:'0px 0px 5px 1px gray'
  }}
>
  <img
    alt="Sample"
    src={pro.img}
  />
  <CardBody>
    <CardTitle tag="h5">
      {pro.category}
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
  {pro.title}
    </CardSubtitle>
    <CardText>
      Some quick example text to build on the card title and make up the bulk of the card‘s content.
    </CardText>
    {pro.price}
  </CardBody>
</Card>

</Col>
    
    );
}

export default Product;