import { useState } from "react";

const useStore = (initial = []) => {
  const [list, setList] = useState(initial);

  const add = element => setList(prevState => [...prevState, element]);
  const remove = index =>
    setList(prevState => prevState.filter((el, _index) => index !== _index));

  return {
    state: {
      list,
      add,
      remove
    }
  };
};

export default useStore;
