import React from 'react';
import {
  Form,
  FormGroup,
  Button,
  Col,
  ControlLabel,
  FormControl,
} from 'react-bootstrap';

const Account = ({ account, updateField, updateAccount, isUpdate }) => {
  const resumeSiteUrl = account.resume_site_url;
  const linkedinUrl = account.linked_in_url;
  const stackoverflowUrl = account.stackoverflow_url;
  const twitterHandle = account.twitter_handle;
  const githubHandle = account.github_handle;
  const codewarsHandle = account.codewars_handle;

  const handleChange = (field, event) => {
    updateField(field, event.target.value);
  };

  const handleSubmit = () => {
    const params = {
      resume_site_url: resumeSiteUrl,
      linkedin_url: linkedinUrl,
      stackoverflow_url: stackoverflowUrl,
      twitter_handle: twitterHandle,
      github_handle: githubHandle,
      codewars_handle: codewarsHandle,
    };

    updateAccount(params);
  };

  return (
    <div className={'Account'}>
      <div className="container">
        <div className="accountCard card">
          <h1>
            Account Settings
          </h1>

          {
            isUpdate && <span>Updated successfully</span>
          }

          <Form horizontal>
            <FormGroup controlId="formHorizontalResumeSiteUrl">
              <Col componentClass={ControlLabel} sm={10} md={6}>
                Resume Site Url
              </Col>
              <Col sm={10} md={6}>
                <FormControl
                  type="text"
                  onChange={e => handleChange('resume_site_url', e)}
                  placeholder="http://..."
                  value={resumeSiteUrl}
                />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalLinkedInUrl">
              <Col componentClass={ControlLabel} sm={10} md={6}>
                LinkedIn Profile Url
              </Col>
              <Col sm={10} md={6}>
                <FormControl
                  type="text"
                  placeholder="https://linkedin.com/in/..."
                  value={linkedinUrl}
                  onChange={e => handleChange('linkedin_url', e)}
                />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalStackOverflowUrl">
              <Col componentClass={ControlLabel} sm={10} md={6}>
                Stack Overflow Profile Url
              </Col>
              <Col sm={10} md={6}>
                <FormControl
                  type="text"
                  placeholder="https://stackoverflow.com/users/..."
                  value={stackoverflowUrl}
                  onChange={e => handleChange('stackoverflow_url', e)}
                />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalTwitterHandle">
              <Col componentClass={ControlLabel} sm={10} md={6}>
                Twitter Handle
              </Col>
              <Col sm={10} md={6}>
                <FormControl
                  type="text"
                  placeholder="your twitter @handle"
                  value={twitterHandle}
                  onChange={e => handleChange('twitter_handle', e)}
                />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalGithubHandle">
              <Col componentClass={ControlLabel} sm={10} md={6}>
                GitHub Handle
              </Col>
              <Col sm={10} md={6}>
                <FormControl
                  type="text"
                  placeholder="your github @handle"
                  value={githubHandle}
                  onChange={e => handleChange('github_handle', e)}
                />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalCodewarsHandle">
              <Col componentClass={ControlLabel} sm={10} md={6}>
                Codewars Handle
              </Col>
              <Col sm={10} md={6}>
                <FormControl
                  type="text"
                  placeholder="your codewars @handle"
                  value={codewarsHandle}
                  onChange={e => handleChange('codewars_handle', e)}
                />
              </Col>
            </FormGroup>

            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Button
                  onClick={() => handleSubmit()}
                  className="btn-secondary"
                >
                  Save
                </Button>
              </Col>
            </FormGroup>
          </Form>
        </div>
      </div>
    </div>
  );
};

Account.propTypes = {
  isUpdate: React.PropTypes.bool.isRequired,
  updateField: React.PropTypes.func.isRequired,
  updateAccount: React.PropTypes.func.isRequired,
  account: React.PropTypes.shape({
    linkedin_url: React.PropTypes.string,
    resume_site_url: React.PropTypes.string,
  }).isRequired,
};

export default Account;
