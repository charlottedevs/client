import React from 'react';
import {
  Form,
  FormGroup,
  Button,
  Col,
  ControlLabel,
  FormControl,
} from 'react-bootstrap';

const Account = () => (
  <div className={'Account'}>
    <div className="container">
      <div className="accountCard card">
        <h1>
          Account Settings
        </h1>

        <Form horizontal>
          <FormGroup controlId="formHorizontalResumeSiteUrl">
            <Col componentClass={ControlLabel} sm={10} md={6}>
              Resume Site Url
            </Col>
            <Col sm={10} md={6}>
              <FormControl type="text" placeholder="http://..." />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalLinkedInUrl">
            <Col componentClass={ControlLabel} sm={10} md={6}>
              LinkedIn Profile Url
            </Col>
            <Col sm={10} md={6}>
              <FormControl type="text" placeholder="https://linkedin.com/in/..." />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalStackOverflowUrl">
            <Col componentClass={ControlLabel} sm={10} md={6}>
              Stack Overflow Profile Url
            </Col>
            <Col sm={10} md={6}>
              <FormControl type="text" placeholder="https://stackoverflow.com/users/..." />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalTwitterHandle">
            <Col componentClass={ControlLabel} sm={10} md={6}>
              Twitter Handle
            </Col>
            <Col sm={10} md={6}>
              <FormControl type="text" placeholder="your twitter @handle" />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalGithubHandle">
            <Col componentClass={ControlLabel} sm={10} md={6}>
              GitHub Handle
            </Col>
            <Col sm={10} md={6}>
              <FormControl type="text" placeholder="your github @handle" />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalCodewarsHandle">
            <Col componentClass={ControlLabel} sm={10} md={6}>
              Codewars Handle
            </Col>
            <Col sm={10} md={6}>
              <FormControl type="text" placeholder="your codewars @handle" />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button className="btn-secondary" type="submit">
                Save
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </div>

    </div>
  </div>
);

export default Account;
