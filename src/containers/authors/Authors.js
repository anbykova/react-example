import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authorsActions from '../../actions/authorsActions'
import './authors.scss'
import Author from '../../components/author/Author'

class Authors extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
      this.props.getAuthors();
      //this.props.putAuthor({id: '123', name: 'john'});
  }

  render() {
    const domAuthors = this.props.authors && this.props.authors.map(author => Author(author));
    return (
      <div className="authors">
        <h2>Authors</h2>
        <ul className="authors-content">{domAuthors}</ul>
      </div>
    );
  }
}

export default connect(
  (state) => {
    return {authors: state.authors.all};
  },
  (dispatch) => {
    return {
      getAuthors: bindActionCreators(authorsActions.getAuthors, dispatch),
      putAuthor: bindActionCreators(authorsActions.putAuthor, dispatch)
    }
  }
)(Authors);
