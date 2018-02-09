import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormFeedback} from 'reactstrap';

class NewArticleModal extends Component {

  constructor(props) {
    super(props);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateDescription = this.updateDescription.bind(this);
    this.updateAuthor = this.updateAuthor.bind(this);
    this.addArticle = this.addArticle.bind(this);

  }

  updateTitle(event) {
    this.setState({
      title: event.target.value
    })
  }

  updateDescription(event) {
    this.setState({
      description: event.target.value
    })
  }

  updateAuthor(event) {
    this.setState({
      username: event.target.value
    })
  }

  addArticle(event) {
    event.preventDefault();
    event.stopPropagation();
    console.log(this.form.checkValidity());
    if (this.state && this.form.checkValidity()) {
      this.props.addArticle({
        title: this.state.title,
        description: this.state.description,
        username: this.state.username
      })
    } else {
      this.form.classList.add('was-validated');
    }
  }


  render() {
    //invalid={this.state && this.state.title === '' }
    return (
      <Modal isOpen={this.props.isArticleModalOpened} toggle={this.props.toggle}>
        <Form className="needs-validation" noValidate innerRef={(form) => (this.form = form)}>
          <ModalHeader toggle={this.props.toggle}>Add Article</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="articleTitle">Title</Label>
               <Input type="text" name="title" id="articleTitle" required onChange={this.updateTitle} placeholder="title..." />
              <FormFeedback>Title is mandatory</FormFeedback>
            </FormGroup>
            <FormGroup>
              <Label for="articleDescription">Description</Label>
              <Input type="textarea" name="description" onChange={this.updateDescription} id="articleDescription" />
            </FormGroup>
            <FormGroup>
              <Label for="authorName">Author</Label>
              <Input type="text" name="author" id="authorName" required onChange={this.updateAuthor} placeholder="author..." />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" type="submit" onClick={this.addArticle}>Submit</Button>{' '}
            <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
          </ModalFooter>
        </Form>
      </Modal>
    )
  }
}

export default NewArticleModal;
