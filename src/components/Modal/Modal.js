import React from 'react';
import giphy from "../../utils/giphy";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import get from "lodash/get";
import { toggleModal } from '../../actions';

class Modal extends React.Component {
  render() {
    console.log(this.props.selectedGif);
    return (
      <ReactModal
         isOpen={this.props.showModal}
         shouldCloseOnOverlayClick={true}
         className="Modal"
         overlayClassName="Overlay"
      >
        <div className="d-flex flex-column justify-content-center">
          <h1 className="text-center">{get(this.props.selectedGif, "title")}</h1>
          <img src={get(this.props.selectedGif, "images.original.url")} />
          <button type="button" className="btn btn-info load-more" onClick={() => {this.props.dispatch(toggleModal());}}>Close</button>
        </div>
      </ReactModal>
    );
  }
}

Modal.propTypes = {
  showModal: PropTypes.boolean,
  selectedGif: PropTypes.object,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    showModal: state.showModal,
    selectedGif: state.selectedGif
  };
};

export default connect(
  mapStateToProps
)(Modal);
