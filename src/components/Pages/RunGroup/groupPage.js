import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export const GroupPage = ({ group }) => {
  const dispatch = useDispatch();
  const history = useHistory("/groupPage");
  const groupsDataArray = useSelector((state) => state.runGroupReducers);
  const [groupData, setGroupData] = useState({
    name: "",
    groupType: "",
    events: [],
    runners: [],
  });
};
