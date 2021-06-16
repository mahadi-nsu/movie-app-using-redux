import React, { Component } from "react";
import { connect, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { toggleMessage, getMovies } from "./actions/actions";

class Toggle extends Component {
  render() {
    console.log(this.props.messageVisibility);
    console.log(this.props.movies);

    return (
      <div>
        {this.props.messageVisibility && (
          <p>you will see this is toggle value true!</p>
        )}
        <button onClick={this.props.toggleMessage}>Toggle me</button>
        <button onClick={this.props.getMovies}>Get movies</button>
      </div>
    );
  }
}

// make state avilable
const mapStateToProps = (state) => ({
  messageVisibility: state.messageReducer.messageVisibility,
  movies: state.messageReducer.movies,
});

// make actions dispatching available
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      toggleMessage,
      getMovies,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Toggle);
