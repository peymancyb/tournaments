import axios from "axios";

const actionCreator = (actionType, payload = null) => ({
  type: actionType,
  payload
});

export default ({
  headers = {},
  method,
  url,
  actionType,
  mapFinalData
}) => async dispatch => {
  try {
    dispatch(actionCreator(actionType.PENDING));
    const options = {
      headers,
      method: method.toUpperCase()
    };
    const res = await axios(url, options);
    if (mapFinalData) {
      const finalData = mapFinalData(res.data);
      dispatch(actionCreator(actionType.SUCCESS, finalData));
    } else {
      dispatch(actionCreator(actionType.SUCCESS, res.data));
    }
  } catch (_err) {
    console.error("_err => ", _err); // eslint-disable-line
    dispatch(actionCreator(actionType.ERROR, _err));
  }
};
