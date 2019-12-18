import { handleActions } from "redux-actions";
import { SEARCH, ADD_ITEM, DELETE_ITEM, UPDATE_STORE } from "./constants";

const initialState = {
  success: false,
  pending: false,
  redirect: false,
  error: null,
  documents: [],
  savedDocuments: [],
  storedDocuments: null
};

const Search = handleActions(
  {
    [SEARCH.PENDING]: (state = initialState) => ({
      ...state,
      pending: true
    }),

    [ADD_ITEM]: (state = initialState, { payload }) => ({
      ...state,
      savedDocuments: [
        ...state.savedDocuments,
        ...state.documents.filter(e => e.id === payload)
      ]
    }),

    [DELETE_ITEM]: (state = initialState, { payload }) => ({
      ...state,
      savedDocuments: state.savedDocuments.filter(e => e.id !== payload)
    }),

    [UPDATE_STORE]: (state = initialState, { payload }) => ({
      ...state,
      savedDocuments: payload
    }),

    [SEARCH.SUCCESS]: (state = initialState, { payload: documents }) => ({
      ...state,
      pending: false,
      success: true,
      redirect: true,
      documents
    }),

    [SEARCH.ERROR]: (state = initialState, { error }) => ({
      ...state,
      pending: false,
      success: false,
      error
    }),

    [SEARCH.RESET]: (state = initialState) => ({
      ...state,
      redirect: false
    })
  },
  initialState
);

export default Search;
