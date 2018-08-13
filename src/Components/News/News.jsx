import {connect} from 'react-redux';
import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import Spinner from 'react-svg-spinner';
import * as actions from '../../Redux/actions/news';
import SingleHeadLine from './SingleHeadline';

class News extends Component {
  componentDidMount() {
    const {getNews, loadNews} = this.props;
    loadNews();
    setTimeout(() => {
      getNews();
    }, 1500);
  }

  render() {
    const {news, loading} = this.props;
    return (
      <Fragment>
        {loading ? (
          <div className="spinner">
            <Spinner size="320px" color="#2DB1FF" />
          </div>
        ) : (
          news.map(n => (
            <SingleHeadLine
              key={n.title}
              title={n.title}
              description={n.description}
              urlToImage={n.urlToImage}
              news={n}
            />
          ))
        )}
      </Fragment>
    );
  }
}
News.propTypes = {
  getNews: PropTypes.func.isRequired,
  news: PropTypes.arrayOf(Object).isRequired,
  loading: PropTypes.bool.isRequired,
  loadNews: PropTypes.func.isRequired,
};
export default connect(
  state => ({
    loading: state.news.isLoading,
    news: state.news.news,
  }),
  dispatch => ({
    getNews: () => dispatch(actions.getNews()),
    loadNews: () => dispatch(actions.getNewsStart()),
  }),
)(News);
