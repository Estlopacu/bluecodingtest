import React from "react";
import giphy from "../../utils/giphy";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addMore } from '../../actions';

class LoadMore extends React.Component {
  constructor() {
    super();
    this.state = {
      page: 1
    };
    this.onMore = this.onMore.bind(this);
  }
  onMore(event) {
    event.preventDefault();
    this.setState({ page: this.state.page + 1}, () => {
      giphy.get(this.props.searchText, this.state.page)
        .then(data => {
          this.props.dispatch(addMore({
            searchResults: data
          }));
        });
    });
  }
  render() {
    const { searchEnable, searchResults } = this.props;
    return (
    (searchEnable && searchResults.length !== 0) ?
        <div className="d-flex flex-nowrap justify-content-center">
        <button type="button" className="btn btn-raised btn-primary" onClick={this.onMore}>Load More!</button>
      </div> : null
    );
  }
}

LoadMore.propTypes = {
  searchText: PropTypes.string,
  searchEnable: PropTypes.bool,
  dispatch: PropTypes.func.isRequired,
  searchResults: PropTypes.object
};

const mapStateToProps = state => {
  return {
    searchText: state.searchText,
    searchEnable: state.searchEnable,
    searchResults: state.searchResults
  };
};

export default connect(
  mapStateToProps
)(LoadMore);
