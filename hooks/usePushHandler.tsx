import { useEffect, useState, useCallback } from "react";

export const usePushHandler = (isPresent: boolean, callback: () => void): (() => void) => {
  const [isTriggered, setIsTriggered] = useState(false);

  const trigger = useCallback(() => {
    setIsTriggered(true);
  }, []);

  useEffect(() => {
    if (isTriggered && isPresent) {
      callback();
      setIsTriggered(false);
    }
  }, [isTriggered, isPresent, callback]);

  return trigger;
};


