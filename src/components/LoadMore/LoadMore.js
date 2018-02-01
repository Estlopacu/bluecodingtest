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
    const { searchEnable } = this.props;
    return (
      searchEnable &&
        <div className="d-flex flex-row flex-wrap justify-content-center justify-content-around">
        <button type="button" className="btn btn-info load-more" onClick={this.onMore}>Load More!</button>
      </div>
    );
  }
}

LoadMore.propTypes = {
  searchText: PropTypes.string,
  searchEnable: PropTypes.boolean,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    searchText: state.searchText,
    searchEnable: state.searchEnable
  };
};

export default connect(
  mapStateToProps
)(LoadMore);
