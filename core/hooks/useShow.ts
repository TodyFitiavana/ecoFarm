import { useState } from "react";

interface UseSHowReturn {
  show: boolean;
  changeShowState: (state: boolean) => void;
}

const useShow = (): UseSHowReturn => {
  const [show, setShow] = useState<boolean>(false);

  const changeShowState = (state: boolean): void => {
    setShow(state);
  };

  return { show, changeShowState };
};

export default useShow;
