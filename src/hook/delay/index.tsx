import { useEffect, useState } from 'react';

export const usePopupDelay = (duration: number) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDuration, setIsDuration] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsDuration(true);
    }
  }, [isOpen]);

  const onClose = () => {
    setIsDuration(false);

    const timeout = setTimeout(() => {
      setIsOpen(false);
      clearTimeout(timeout);
    }, duration);
  };

  return { isOpen, setIsOpen, isDuration, onClose };
};
