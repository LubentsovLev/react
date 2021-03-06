import React from "react";
import { connect } from "react-redux";
import { requestMusic, getAlbum } from "../../redux/musicPage_reducer";
import Music from "./Music";
import Preloader from "../common/preloader/preloader";

class MusicContainer extends React.Component {
  
  componentDidMount() {
    this.props.requestMusic();
  }
  

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Music
          music={this.props.music}
          albumData={this.props.albumData}
          requestMusic={this.props.requestMusic}
          getAlbum={this.props.getAlbum}
          track={this.props.track}
        />
      </>
    );
  }
}

const mapSateToProps = (state) => {
  return {
    music: state.musicPage.music,
    albumData: state.musicPage.albumData,
    track: state.musicPage.track,
    isFetching: state.musicPage.isFetching,
  };
};

export default connect(mapSateToProps, {
  requestMusic,
  getAlbum,
})(MusicContainer);
