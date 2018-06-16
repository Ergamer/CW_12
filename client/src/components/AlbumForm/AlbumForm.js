import React, {Component} from 'react';
import {Button, Col, Form, FormGroup} from "react-bootstrap";
import FormElement from "../UI/Form/FormElement";

class AlbumForm extends Component {
  state = {
    title: '',
    image: '',
  };

  submitFormHandler = event => {
    event.preventDefault();

    const formData = new FormData();
    Object.keys(this.state).forEach(key => {
      formData.append(key, this.state[key]);
    });

    console.log(this.props.user.token)

    this.props.createAlbum(formData, this.props.user.token);
  };

  inputChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  fileChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.files[0]
    });
  };

  render() {
    return (
      <Form horizontal onSubmit={this.submitFormHandler}>

        <FormElement
          propertyName="title"
          title="Photo title"
          type="text"
          value={this.state.title}
          changeHandler={this.inputChangeHandler}
          required
        />

        <FormElement
          propertyName="image"
          title="Album image"
          type="file"
          changeHandler={this.fileChangeHandler}
        />

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button bsStyle="primary" type="submit">Save</Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

export default AlbumForm;
