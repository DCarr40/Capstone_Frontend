import * as actionTypes from "../constants/notifications";
import axios from "axios";

export const addToNotifications = (id) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/collections/event/${id}`);

  dispatch({
    type: actionTypes.ADD_TO_NOTIFICATION,

    payload: {
      event: data._id,
      title: data.title,
      details: data.details,
    },
  });

  localStorage.setItem(
    `notifications`,
    JSON.stringify(getState().notifications.notificationItems)
  );
};

export const removeFromNotifications = () => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_NOTIFICATION,
    payload: id
  });

  localStorage.setItem(`notifications`, JSON.stringify(getState().notifications.notificationItems))
};
