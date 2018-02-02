import React from "react";
import PropTypes from 'prop-types';
import giphy from "../../utils/giphy";
import { searchGifs } from '../../actions';
import { connect } from 'react-redux';

class SearchForm extends React.Component {
  constructor(){
    super();
    this.state = { page: 1 };
    this.search = this.search.bind(this);
  }
  search(event) {
    event.preventDefault();
    const fieldValue = new FormData(event.target).get("search").trim();
    if(fieldValue) {
      giphy.get(fieldValue, this.state.page)
        .then(data => {
          this.props.dispatch(searchGifs({
            searchText: fieldValue,
            searchResults: data,
            searchEnable: true
          }));
        });
    }
    else {
      this.props.dispatch(searchGifs({
        searchText: null,
        searchResults: [],
        searchEnable: false
      }));
    }
  }
  render() {
    return (
      <div className="d-flex justify-content-center">
        <form onSubmit={this.search} className="col col-sm-6 9 p-2">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="type somenthing" name="search"/>
          </div>
          <div className="form-group text-center">
            <input type="submit" className="btn btn-raised btn-primary" value="Search"/>
          </div>
        </form>
      </div>
    );
  }
}

SearchForm.propTypes = {
    dispatch: PropTypes.func.isRequired
};

export default connect()(SearchForm);
