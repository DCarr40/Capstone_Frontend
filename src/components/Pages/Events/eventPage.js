import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export const GroupPage = ({ group }) => {
  const dispatch = useDispatch();
  const history = useHistory("/eventPage");
  const eventsDataArray = useSelector((state) => state.eventReducers);
  const [eventData, setEventData] = useState({
    name: "",
    groupType: "",
    events: [],
    runners: [],
  });
};
