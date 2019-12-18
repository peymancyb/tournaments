import { useState, useCallback } from "react";

function useInputHandler(initialValue = "") {
  const [value, setValue] = useState(initialValue);

  const onChange = useCallback(v => setValue(v), []);

  return {
    value,
    onChange
  };
}

export default useInputHandler;
