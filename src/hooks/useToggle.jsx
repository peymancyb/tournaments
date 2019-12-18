import { useState } from "react";

const useToggle = (initial = false) => {
  const [state, setState] = useState(initial);

  const handleToggle = () => setState(!state);

  return [state, handleToggle];
};

export default useToggle;
