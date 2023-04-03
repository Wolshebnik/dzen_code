import { useRef, useEffect, useState } from 'react';

import { ChildrenProps } from 'types';
import { useDelayEllipsis } from 'hook/delay-ellipsis';

import * as Styles from './styles';

const EllipsisText = ({ children }: ChildrenProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [heightEl, setHeight] = useState<number | null>(null);
  const [hasToolTip, setToolTip] = useState(false);
  const [open, setOpen] = useDelayEllipsis(500);

  const deps = [ref?.current?.offsetWidth, ref?.current?.scrollWidth];

  useEffect(() => {
    setTimeout(() => {
      const offsetWidth = ref?.current?.offsetWidth || 0;
      const scrollWidth = ref?.current?.scrollWidth || 0;
      const widthRatio = scrollWidth / offsetWidth;

      if (ref.current !== null) {
        if (ref.current.innerHTML.includes('Specification 1')) {
        }
      }

      if (widthRatio > 1.0) {
        setToolTip(true);
      } else {
        setToolTip(false);
      }

      if (ref?.current) {
        const { height } = ref.current.getBoundingClientRect();
        setHeight(height);
      }
    }, 300);
  }, [...deps]);

  const onMouseEnter = () => {
    if (hasToolTip) {
      setOpen(true);
    }
  };

  const onMouseLeave = () => {
    setOpen(false);
  };

  return (
    <>
      <Styles.EllipsisDiv
        ref={ref}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {children}
      </Styles.EllipsisDiv>

      {open && (
        <Styles.ToolTip
          height={heightEl}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {children}
        </Styles.ToolTip>
      )}
    </>
  );
};

export { EllipsisText };
