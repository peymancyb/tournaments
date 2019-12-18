import { useEffect } from "react";

const useLocalStorage = (savedDocuments, dispatch, updateStoreAction) => {
  useEffect(() => {
    if (savedDocuments.length > 0) {
      localStorage.setItem("data", JSON.stringify(savedDocuments));
    }
  }, [savedDocuments, dispatch]);

  useEffect(() => {
    const data = localStorage.getItem("data");
    if (data && JSON.parse(data).length > 0) {
      dispatch(updateStoreAction(JSON.parse(data)));
    }
  }, [dispatch, updateStoreAction]);
};

export default useLocalStorage;
