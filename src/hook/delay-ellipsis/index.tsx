import { useState, useEffect } from 'react';

export const useDelayEllipsis = (
  delay: number
): [boolean, (value: boolean) => void] => {
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [previewOpen, setPreviewOpen] = useState<boolean>(false);

  useEffect(() => {
    if (!open) {
      setTimer(
        setTimeout(() => {
          setPreviewOpen(false);
        }, delay)
      );
    }

    if (open && timer) {
      setTimer(null);
      setPreviewOpen(true);
      clearTimeout(timer);
    }
  }, [open]);

  return [previewOpen, setOpen];
};
