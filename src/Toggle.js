import React, { Component } from "react";
import { connect, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { toggleMessage } from "./actions/actions";

class Toggle extends Component {
  render() {
    console.log(this.props.messageVisibility);

    return (
      <div>
        {this.props.messageVisibility && (
          <p>you will see this is toggle value true!</p>
        )}
        <button onClick={this.props.toggleMessage}>Toggle me</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  messageVisibility: state.messageReducer.messageVisibility,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      toggleMessage,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Toggle);
