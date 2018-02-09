import React, { Component } from 'react';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import { bindActionCreators } from 'redux';
import * as articlesActions from '../../actions/articlesActions';
import { CardColumns, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { queries, mutations, subscriptions } from '../../api'
import * as graphQLApiModule from '../../api/graphQLApi'
import NewArticleModal from '../../components/newArticleModal/NewArticleModal'

const graphQLApi = graphQLApiModule.default;
//remove  2 above

import Article from '../../components/article/Article';

import './articles.scss';

class Articles extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getArticles();
    this.toggle = this.toggle.bind(this);
    this.addArticle = this.addArticle.bind(this);
    //this.props.subscribeCreatedArticles();
    graphQLApi.subscribe({
      query: subscriptions.createdArticles
    }).subscribe(
      res => {
        console.log(res);
        alert(res.data.createdArticles.article.title);
      },
      err => console.log('err', err)
    )
  }

  toggle() {
    this.setState(
      {
        isImageLoaded: !(this.state && this.state.isImageLoaded)
      }
    );
  }

  addArticle(article) {
    this.props.putArticle(article);
    this.toggle();
  }

  render() {
    const domArticles = this.props.allArticles && this.props.allArticles.map(article => <Article key={article.id} {...article}/>);
    return (
      <div className={'articles' + (this.props.allArticles.length !== 0 ? ' articles--showed' : '')}>
        <h2>Articles</h2>
        <Button color="danger" onClick={this.toggle}>Add article</Button>
        <NewArticleModal isArticleModalOpened={this.state && this.state.isImageLoaded} toggle={this.toggle} addArticle={this.addArticle}/>
        <CardColumns>
          {domArticles}
        </CardColumns>
      </div>
    );
  }
}

export default
  connect(
    (state) => {
      return {
        allArticles: state.articles.all,
        newArticles: state.articles.new
      };
    },
    (dispatch) => {
      return {
        getArticles: bindActionCreators(articlesActions.getArticles, dispatch),
        putArticle: bindActionCreators(articlesActions.putArticle, dispatch),
        subscribeCreatedArticles: bindActionCreators(articlesActions.subscribeCreatedArticles, dispatch),
      }
    }
  )(Articles);
