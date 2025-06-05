// YearbookSearch.jsx
import React from 'react';
import './yearbook.css';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import SearchIcon from '@mui/icons-material/Search';

const YearbookSearch = () => {
  return (
    <div className="wrapper">
      <div className="yearbook-container">
        <h2 className="title">Year - Book <hr style={{border: '2px solid white',position:'relative',margin:'auto', width: '50%',marginTop:'5px',opacity: 1}}/></h2>
        <Container className="search-box shadow-lg">
          {/* Search Section */}
          <h4 className="search-heading">SEARCH</h4>
          <p className="subtext">From 0 Registered Alumni</p>

          {/* Search Input */}
          <Form className="search-form d-flex justify-content-center align-items-center">
            <Form.Control
              type="text"
              placeholder="Enter your Roll No., Name or Reg No."
              className="search-input"
            />
            <Button  className="search-btn"><SearchIcon/></Button>
          </Form>

          {/* Filter Buttons */}
          <Row className="mt-3 d-flex justify-content-center">
            {['Batch', 'Programme', 'Branch', 'City', 'Company/In'].map((filter, index) => (
              <Col key={index} xs="auto" className="mb-2">
                <Button variant="outline-secondary" className="filter-btn">
                  {filter}
                </Button>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default YearbookSearch;
