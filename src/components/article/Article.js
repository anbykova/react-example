import React, { Component } from 'react';
import './article.scss';
import { Card, Button, CardTitle, CardText, CardBody, CardImg } from 'reactstrap';

class Article extends Component {

  constructor(props) {
    super(props);
    this.handleImageLoaded = this.handleImageLoaded.bind(this);
  }

  handleImageLoaded() {
    this.setState(
      {
        isImageLoaded: true
      }
    );
  }

  render() {
    return (
      <Card className="article">
        {this.props.imageURL && <CardImg top src={this.props.imageURL} className={"article-image" + (this.state && this.state.isImageLoaded ? " article-image--loaded" : "")} onLoad={this.handleImageLoaded} alt="Card image" />}
        <CardBody>
          <CardTitle>{this.props.title}</CardTitle>
          <CardText>{this.props.description && this.props.description.slice(0, 100)}</CardText>
          <Button className="article-action_more">View More</Button>
        </CardBody>
      </Card>
    )
  }
}

export default Article;
