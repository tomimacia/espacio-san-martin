import { useEffect, useState } from "react";

export const useWaitAction = () => {
  const [isAvail, setIsAvail] = useState(true);
  useEffect(() => {
    if (!isAvail) {
      setTimeout(() => {
        setIsAvail(true);
      }, 500);
    }
  }, [isAvail]);
  return { isAvail, setIsAvail };
};
