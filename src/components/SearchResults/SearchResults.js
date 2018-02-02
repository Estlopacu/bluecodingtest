import React from "react";
import giphy from "../../utils/giphy";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleModal, selectedGif } from '../../actions';
import get from "lodash/get";

class SearchResults extends React.Component {
  constructor() {
    super();
    this.state = {
      page: 1,
      randomImage: null
    };
    this.showModal = this.showModal.bind(this);
  }
  componentDidMount(){
    giphy.getRandom().then((result) => {
      this.setState({
        randomImage: get(result, "image_original_url")
      });
    });
  }
  showModal(event, index) {
    event.preventDefault();
    this.props.dispatch(toggleModal());
    this.props.dispatch(selectedGif(index));
  }
  render() {
    const { results, searchEnable } = this.props;
    return (
      <div className="d-flex flex-wrap justify-content-center justify-content-around">
        {(searchEnable && !results.length) && <p>No Results :(</p>}
        {!searchEnable && <div className="d-flex align-items-centerp-3"><img src={this.state.randomImage} style={{width: "100%"}}/></div>}
        {results.map((thumbnail, index) => {
          return (
            <div className="d-flex flex-column align-items-center thumbnail p-3" key={index} onClick={(e) => {this.showModal(e, index);}}>
              <img src={get(thumbnail, "images.fixed_height_small_still.url")}/>
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
  searchEnable: PropTypes.bool,
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
