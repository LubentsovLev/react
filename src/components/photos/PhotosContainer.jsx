import React from "react";
import { connect } from "react-redux";
import {
  requestPixels,
  requestPixelsNew,
} from "../../redux/PhotosPage_reducer";
import Preloader from "../common/preloader/preloader";
import Photos from "./Photos";

class PhotosContainer extends React.Component {
  componentDidMount() {
    this.props.requestPixels();
  }
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Photos
          pixels={this.props.pixels}
          requestPixelsNext={this.props.requestPixelsNext}
          requestPixelsNew={this.props.requestPixelsNew}
          isFetching={this.props.isFetching}
          requestPixels={this.props.requestPixels}
        />
      </>
    );
  }
}

const mapSateToProps = (state) => {
  return {
    pixels: state.photosPage.pixels,
    isFetching: state.photosPage.isFetching,
  };
};

export default connect(mapSateToProps, { requestPixels, requestPixelsNew })(
  PhotosContainer
);
