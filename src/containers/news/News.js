import React, { Component } from 'react';
import './news.scss';
import axios from 'axios';
import * as newsActions from '../../actions/newsActions';
import Article from '../../components/article/Article';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class News extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    axios.get(
      'https://newsapi.org/v2/top-headlines?sources=axios&apiKey=1659a6b6b5a0479cb6fe83393d2cad92'
    ).then((response) => {
        this.props.setNews(response.data.articles);
    })
  }

  render() {
    const domArticles = this.props.articles.map(article => Article(article));
    return (
      <div>
        <div className="news">News</div>
        <div className="articles">
          {domArticles}
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => {
    return {articles: state.news.articles};
  },
  (dispatch) => {
    return {
      setNews: bindActionCreators(newsActions.setNews, dispatch),
    }
  }
)(News);
