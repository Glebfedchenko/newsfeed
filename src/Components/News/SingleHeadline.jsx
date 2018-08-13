import React from 'react';
import PropTypes from 'prop-types';

const SingleHeadLine = ({news}) => {
  const {title, description, urlToImage} = news;
  return (
    <div style={{}}>
      <h1>{title} </h1>
      <h4>{description}</h4>
      <img src={urlToImage} alt="" style={{height: `auto`, width: `100%`}} />
    </div>
  );
};
SingleHeadLine.propTypes = {
  news: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    urlToImage: PropTypes.string,
  }).isRequired,
};
export default SingleHeadLine;
