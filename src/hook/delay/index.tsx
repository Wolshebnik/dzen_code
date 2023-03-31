import { useEffect, useState } from 'react';

export const usePopupDelay = (
  delay: number,
  isOpen: boolean,
  onClose: () => void
) => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsOverlayOpen(true);
    }
  }, [isOpen]);

  const handleClick = () => {
    setIsOverlayOpen(false);
    const timeout = setTimeout(() => {
      onClose();
      clearTimeout(timeout);
    }, delay);
  };

  return { isOverlayOpen, handleClick };
};
