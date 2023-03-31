import { useEffect, useState } from 'react';

export const usePopupDelay = (delay: number) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDelay, setIsDelay] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsDelay(true);
    }
  }, [isOpen]);

  const onClose = () => {
    setIsDelay(false);

    const timeout = setTimeout(() => {
      setIsOpen(false);
      clearTimeout(timeout);
    }, delay);
  };

  return { isOpen, setIsOpen, isDelay, onClose };
};
