import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useResetReducer = reducerName => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: `RESET_${reducerName.toUpperCase()}_REDUCER` });
  }, []);
};

export default useResetReducer;
