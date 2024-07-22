import React, { useState } from 'react';
import Product from './Product';
import { Button, Card, CardText, CardTitle, Col, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';

import classnames from 'classnames';

function Products() {
    const listTour =  [
        {
            id: 1,
            title: "Three Temples Bangkok City Tour Must Visit",
            category: "New York",
            price: 149.99,
            img: "https://react-bootstrap-lovat.vercel.app/img/tour-1.png",
        },
        {
            id: 2,
            title: "Essence of Vietnam South to North",
            category: "New York",
            price: 167.19,
            img: "https://react-bootstrap-lovat.vercel.app/img/tour-2.png",
        },
        {
            id: 3,
            title: "Osa Peninsula to Dominical City Tour",
            category: "New York",
            price: 134.99,
            img: "https://react-bootstrap-lovat.vercel.app/img/tour-3.png",
special:true
        },
        {
            id: 4,
            title: "Mt Fuji, Hakone, Lake Ashi Cruise",
            category: "New York",
            price: 50.15,
            img: "https://react-bootstrap-lovat.vercel.app/img/tour-4.png",
        },
        {
            id: 5,
            title: "Three Temples Bangkok City Tour Must Visit",
            category: "London",
            price: 149.99,
            img: "https://react-bootstrap-lovat.vercel.app/img/tour-5.png",
        },
        {
            id: 6,
            title: "Essence of Vietnam South to North",
            category: "London",
            price: 167.19,
            img: "https://react-bootstrap-lovat.vercel.app/img/tour-6.png",
special:true
        },
        {
            id: 7,
            title: "Osa Peninsula to Dominical City Tour",
            category: "London",
            price: 134.99,
            img: "https://react-bootstrap-lovat.vercel.app/img/tour-7.png",
        },
        {
            id: 8,
            title: "Mt Fuji, Hakone, Lake Ashi Cruise",
            category: "London",
            price: 50.15,
            img: "https://react-bootstrap-lovat.vercel.app/img/tour-8.png",
        },
        {
            id: 9,
            title: "Three Temples Bangkok City Tour Must Visit",
            category: "Tokyo",
            price: 149.99,
            img: "https://react-bootstrap-lovat.vercel.app/img/tour-9.png",
special:true
        },
        {
            id: 10,
            title: "Essence of Vietnam South to North",
            category: "Tokyo",
            price: 117.19,
            img: "https://react-bootstrap-lovat.vercel.app/img/tour-10.png",
        },
        {
            id: 11,
            title: "Osa Peninsula to Dominical City Tour",
            category: "Tokyo",
            price: 134.99,
            img: "https://react-bootstrap-lovat.vercel.app/img/tour-11.png",
        },
        {
            id: 12,
            title: "Mt Fuji, Hakone, Lake Ashi Cruise",
            category: "Tokyo",
            price: 50.15,
            img: "https://react-bootstrap-lovat.vercel.app/img/tour-12.png",
special:true
        },
        {
            id: 13,
            title: "Three Temples Bangkok City Tour Must Visit",
            category: "Los Angeles",
            price: 149.99,
            img: "https://react-bootstrap-lovat.vercel.app/img/tour-13.png",
        },
        {
            id: 14,
            title: "Essence of Vietnam South to North",
            category: "Los Angeles",
            price: 117.19,
            img: "https://react-bootstrap-lovat.vercel.app/img/tour-14.png",
        },
        {
            id: 15,
            title: "Osa Peninsula to Dominical City Tour",
            category: "Los Angeles",
            price: 134.99,
            img: "https://react-bootstrap-lovat.vercel.app/img/tour-15.png",
        },
        {
            id: 16,
            title: "Mt Fuji, Hakone, Lake Ashi Cruise",
            category: "Los Angeles",
            price: 50.15,
            img: "https://react-bootstrap-lovat.vercel.app/img/tour-16.png",
        },
    ];

   

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
      if (activeTab !== tab) setActiveTab(tab);
    };

    return (
        <div>

            <div className='container'>

            <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
           New York
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
         Tokyo
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}
          >
           London
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '4' })}
            onClick={() => { toggle('4'); }}
          >
           Los Angeles
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
        <Row>
            {
                    
                
                    listTour.filter(name =>name.category=='New York').map((items,index)  => (
                    <Product key={index}  pro={items} />
                )
                )
                
                
                }






                </Row>
        </TabPane>
        <TabPane tabId="2">
        <Row>
            {
                    
                
                    listTour.filter(name =>name.category=='Tokyo').map((items,index)  => (
                    <Product key={index}  pro={items} />
                )
                )
                
                
                }

                </Row>
        </TabPane>
        <TabPane tabId="3">
        <Row>
            {
                    
                
                    listTour.filter(name =>name.category=='London').map((items,index)  => (
                    <Product key={index}  pro={items} />
                )
                )
                
                
                }

                </Row>
        </TabPane>
        <TabPane tabId="4">
        <Row>
            {
                    
                
                    listTour.filter(name =>name.category=='Los Angeles').map((items,index)  => (
                    <Product key={index}  pro={items} />
                )
                )
                
                
                }

                </Row>
        </TabPane>
      </TabContent>

            
            </div>
        </div>
    );
}

export default Products;