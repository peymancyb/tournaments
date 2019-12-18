import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const useStore = reducer => {
  const dispatch = useDispatch();

  const _value = useSelector(store => store[reducer]);

  const [state, setState] = useState(_value);

  useEffect(() => {
    setState(_value);
  }, [_value]);

  return [state, dispatch];
};

export default useStore;
