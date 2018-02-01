import React from "react";
import giphy from "../../utils/giphy";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleModal, selectedGif } from '../../actions';

class SearchResults extends React.Component {
  constructor() {
    super();
    this.state = {
      page: 1
    };
    this.showModal = this.showModal.bind(this);
  }
  showModal(event, thumbnail) {
    event.preventDefault();
    this.props.dispatch(toggleModal());
    this.props.dispatch(selectedGif(thumbnail));
  }
  render() {
    const { results, searchEnable } = this.props;
    return (
      <div className="d-flex flex-row flex-wrap justify-content-center justify-content-around">
        {(searchEnable && !results.length) && <p>No Results :(</p>}
        {results.map((thumbnail, index) => {
          return (
            <div className="d-flex flex-column align-items-center thumbnail p-3" key={index} onClick={(e) => {this.showModal(e, thumbnail);}}>
              <img src={thumbnail.images.fixed_height_small_still.url}/>
            </div>
          );
        })}
      </div>
    );
  }
}

SearchResults.propTypes = {
  results: PropTypes.node,
  searchText: PropTypes.string,
  searchEnable: PropTypes.boolean,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    results: state.searchResults,
    searchText: state.searchText,
    searchEnable: state.searchEnable
  };
};

export default connect(
  mapStateToProps
)(SearchResults);
