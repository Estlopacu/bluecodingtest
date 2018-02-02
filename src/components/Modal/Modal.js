import React from 'react';
import giphy from "../../utils/giphy";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import get from "lodash/get";
import { toggleModal } from '../../actions';

class Modal extends React.Component {
  constructor() {
    super();
    this.state = {
      currentSlide: 0
    };
    this.changeSlide = this.changeSlide.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if(this.state.selectedGif !== nextProps.selectedGif){
      this.setState({
        currentSlide: nextProps.selectedGif
      });
    }
  }
  changeSlide(value) {
    this.setState({
      currentSlide: this.state.currentSlide + value
    });
  }
  render() {
    const { searchResults } = this.props;
    return (
      <ReactModal
         isOpen={this.props.showModal}
         className="Modal"
         overlayClassName="Overlay"
         ariaHideApp={false}
      >
        {searchResults.map((thumbnail, index) => {
          return (
            index === this.state.currentSlide && <div className="d-flex align-items-center p-3" key={index}>
              <img src={get(thumbnail, "images.fixed_height.url")}/>
            </div>
          );
        })}
        <div className="d-flex flex-wrap justify-content-center justify-content-around p-3">
          <button type="button" className="btn btn-raised btn-primary" disabled={this.state.currentSlide === 0} onClick={() => {this.changeSlide(-1);}}>Before</button>
          <button type="button" className="btn btn-raised btn-primary" disabled={this.state.currentSlide >= searchResults.length - 1} onClick={() => {this.changeSlide(1);}}>Next</button>
        </div>
        <div className="d-flex flex-wrap justify-content-center justify-content-around p-3">
          <button type="button" className="btn btn-raised btn-link" onClick={() => {this.props.dispatch(toggleModal());}}>Close</button>
        </div>
      </ReactModal>
    );
  }
}

Modal.propTypes = {
  showModal: PropTypes.bool,
  searchResults: PropTypes.node,
  dispatch: PropTypes.func.isRequired,
  selectedGif: PropTypes.number
};

const mapStateToProps = state => {
  return {
    showModal: state.showModal,
    searchResults: state.searchResults,
    selectedGif: state.selectedGif
  };
};

export default connect(
  mapStateToProps
)(Modal);
