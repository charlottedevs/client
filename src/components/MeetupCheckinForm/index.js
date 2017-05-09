import React from 'react';
import {
  Form,
  FormGroup,
  Button,
  Col,
  ControlLabel,
  FormControl,
} from 'react-bootstrap';

const MeetupCheckinForm = ({ ip, handleChange, verificationCode, handleSubmit }) => (
  <div>
    <h2>Your IP address</h2>
    <p>{ip}</p>
    <Form horizontal>
      <FormGroup controlId="formHorizontalMeetupCheckinCode">
        <Col componentClass={ControlLabel} sm={10} md={12}>
          Checkin Code
        </Col>
        <Col sm={10} md={12}>
          <FormControl
            type="text"
            onChange={e => handleChange(e)}
            value={verificationCode}
          />
        </Col>
      </FormGroup>

      <FormGroup>
        <Col smOffset={2} sm={10}>
          <Button
            onClick={() => handleSubmit()}
            className="btn-primary"
          >
            Save
          </Button>
        </Col>
      </FormGroup>
    </Form>
  </div>
);

MeetupCheckinForm.propTypes = {
  ip: React.PropTypes.string,
  handleChange: React.PropTypes.func.isRequired,
  handleSubmit: React.PropTypes.func.isRequired,
  verificationCode: React.PropTypes.string.isRequired,
};

MeetupCheckinForm.defaultProps = {
  ip: '',
};

export default MeetupCheckinForm;
