
export const createEvent = (event) => {
    return () => {
      return (dispatch, getState) => {
          //asyn call to DB
          dispatch({type: 'CREATE_EVENT', event});
      }
    }
}

