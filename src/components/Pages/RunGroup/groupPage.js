import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addRunnerToRunGroupAction, deleteRunGroupAction } from "../../Redux/RunGroup/rungroupActions";

export const GroupPage = ({ group }) => {
  const dispatch = useDispatch();
  const history = useHistory("/groupPage");
  const groupsDataArray = useSelector((state) => state.runGroupReducers);
  const groupId = localStorage.getItem("groupId");
  const newRunner = localStorage.getItem("userInfo");

const joinGroupOnClick = () => {
  dispatch(addRunnerToRunGroupAction(groupId,newRunner));
  alert("You have now Joined this Running Group");
}

const deleteRunGroupOnClick = () => {
  dispatch(deleteRunGroupAction(groupId));
  alert("You have now deleted this Run Group");
}
 
const letsGoBack = () => {
  window.location.assign("/homepage");
};

  return(
<div className="container">
    <div>
    <h2 className="white-text ">Group Page</h2>
    <div className="card z-depth-1 event-summary rcorners fadeaway hoverable">
      <div className="card-content ">
        <span className="card-title ">{localStorage.getItem("currentGroupName")}</span>
        <p>Group Type -{localStorage.getItem("currentGroupType")}</p>
        <p>Group Runners -{localStorage.getItem("currentGroupRunners")}</p>
        <p>Group Events -{localStorage.getItem("currentGroupEvents")}</p>

      </div>
    </div>
    <button type="button" onClick={joinGroupOnClick}> Join Event </button>
    <button type="button" class> Leave Event </button>
    <button type="button" onClick={deleteRunGroupOnClick} >Delete Event </button>
    <br></br>
    <div>
        <button className="btn" onClick={letsGoBack}>
          <i class="fas fa-arrow-left"> Go Back</i>
        </button>
      </div>
    </div>
    </div>
  )
 
};
