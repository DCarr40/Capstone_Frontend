import * as actionTypes from "./notificationsConstants";

export const INITIAL_STATE = {
  events: [], 
};

export const notiReducers = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case actionTypes.ADD_TO_NOTIFICATION:
      const item = action.payload;

      const existingItem = state.notificationItems.find(
        (itemId) => itemId.event === item.event
      );

      if (existingItem) {
        return {
          ...state,
          notificationItems: state.notificationItems.map((itemId) =>
            itemId.event === existingItem.event ? item : itemId
          ),
        };
      } else {
        return {
          ...state,
          notificationItems: [...state.notificationItems, item],
        };
      }
    case actionTypes.REMOVE_FROM_NOTIFICATION:
      return {
        ...state,
        notificationItems: state.notificationItems.filter(
          (itemId) => itemId.event !== action.payload
        ),
      };
    default:
      return state;
  }
};
