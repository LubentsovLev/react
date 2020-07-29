import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/preloader";

class ProfileStatus extends React.Component {
  state = {
    status: this.props.status,
    editMode: false,
  };

  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };
  deActivateEditMode = () => {
    this.setState({
      editMode: false,
    });

    this.props.updateUserStatus(this.state.status);
  };
  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };
  componentDidUpdate(prevProps , prevState){
    if (prevProps.status !== this.props.status){
      this.setState({status:this.props.status})
    }
  }


  render() {
    return (
      <div className="">
        {!this.state.editMode && (
          <div className="">
            <span onDoubleClick={this.activateEditMode}>
              {this.props.status || "no"}
            </span>
          </div>
        )}
        {this.state.editMode && (
          <div className="">
            <input
              onChange={this.onStatusChange}
              autoFocus={true}
              onBlur={this.deActivateEditMode}
              value={this.state.status}
            ></input>
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
