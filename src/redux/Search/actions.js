import Http from "../../shared/Http";
import { SEARCH, ADD_ITEM, DELETE_ITEM, UPDATE_STORE } from "./constants";
import mapFinalData from "./helpers/index";

const searchAction = keyword => {
  const url = `https://api-search.wincafe.net/search?q=${keyword}_&index=tournament`;
  return Http({
    url,
    method: "GET",
    actionType: SEARCH,
    mapFinalData
  });
};

export const addItemAction = id => ({ type: ADD_ITEM, payload: id });
export const deleteItemAction = id => ({ type: DELETE_ITEM, payload: id });
export const updateStoreAction = data => ({
  type: UPDATE_STORE,
  payload: data
});
export default searchAction;
