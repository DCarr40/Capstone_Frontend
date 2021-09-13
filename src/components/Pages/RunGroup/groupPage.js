import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addRunnerToRunGroupAction } from "../../Redux/RunGroup/rungroupActions";

export const GroupPage = ({ group }) => {
  const dispatch = useDispatch();
  const history = useHistory("/groupPage");
  const groupsDataArray = useSelector((state) => state.runGroupReducers);
  const groupId = localStorage.getItem("groupId");
  const newRunner = localStorage.getItem("userInfo");

const joinGroupOnClick = () => {
  dispatch(addRunnerToRunGroupAction(groupId,newRunner));
}
 
const letsGoBack = () => {
  history.push("/homepage");
};

  return(
    <div>
    <h2>Group Page</h2>
    <button type="button" onClick={joinGroupOnClick}> Join Group </button>
    <button type="button" class> Leave Group </button>
    <br></br>
    <div>
        <button className="btn" onClick={letsGoBack}>
          <i class="fas fa-arrow-left"> Go Back</i>
        </button>
      </div>
    </div>
  )
 
};
