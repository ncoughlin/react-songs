import React from "react";
import { connect } from "react-redux";

// functional component
const SongDetail = ({ song }) => {
  if (!song) {
    return <div>Select song for detail.</div>;
  }
  return (
    <div>
      <h1>Title: {song.title}</h1>
      <h2>Duration: {song.duration}</h2>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
