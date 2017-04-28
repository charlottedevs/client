import React from 'react';
import {
  Form,
  FormGroup,
  Button,
  Col,
  ControlLabel,
  FormControl,
} from 'react-bootstrap';
import Layout from '../../Layout';

const Account = () => (
  <Layout>
    <div className={'Account'}>
      <h1>
        Account
      </h1>

      <Form horizontal>
        <FormGroup controlId="formHorizontalResumeSiteUrl">
          <Col componentClass={ControlLabel} sm={2}>
            Resume Site Url
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="http://..." />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalLinkedInUrl">
          <Col componentClass={ControlLabel} sm={2}>
            LinkedIn Profile Url
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="https://linkedin.com/in/..." />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalStackOverflowUrl">
          <Col componentClass={ControlLabel} sm={2}>
            Stack Overflow Profile Url
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="https://stackoverflow.com/users/..." />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalTwitterHandle">
          <Col componentClass={ControlLabel} sm={2}>
            Twitter Handle
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="your twitter @handle" />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalGithubHandle">
          <Col componentClass={ControlLabel} sm={2}>
            GitHub Handle
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="your github @handle" />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalCodewarsHandle">
          <Col componentClass={ControlLabel} sm={2}>
            Codewars Handle
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="your codewars @handle" />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button type="submit">
              Save
            </Button>
          </Col>
        </FormGroup>
      </Form>
    </div>
  </Layout>
);

export default Account;
