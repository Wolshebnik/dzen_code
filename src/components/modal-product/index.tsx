import { useRef, useEffect } from 'react';

import * as Icon from 'assets';
import { EllipsisText } from 'components';

import { IModal } from './type';
import * as Styles from './styles';

export const ModalProduct = ({
  isOpen,
  onClose,
  duration,
  products,
  onDelete,
  setIsOpen,
  isDuration,
}: IModal) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        if (ref.current !== null) {
          ref.current.style.display = 'flex';
        }
      }, duration);
    }
  }, [isOpen, isDuration]);

  return (
    <>
      {isOpen && (
        <Styles.TranslateBlock
          ref={ref}
          duration={duration}
          isDuration={isDuration}
        >
          <Styles.Block isDuration={isDuration} duration={duration}>
            <Styles.StyledClose onClick={onClose}>
              <Icon.Close />
            </Styles.StyledClose>

            <Styles.Title>Название</Styles.Title>

            <Styles.BlockElements>
              {products.map((product) => (
                <Styles.Element key={product.id}>
                  <Styles.Circle />

                  <Styles.Image src={product.photo} alt="product" />

                  <Styles.Description>
                    <Styles.Name>
                      <EllipsisText>{product.specification}</EllipsisText>
                    </Styles.Name>

                    <Styles.SerialNumber>
                      {product.serialNumber}
                    </Styles.SerialNumber>
                  </Styles.Description>

                  <Styles.Status>Свободен</Styles.Status>

                  <Styles.WrapIcon
                    onClick={() => {
                      setIsOpen(true);
                      onDelete(product.id);
                    }}
                  >
                    <Icon.Delete />
                  </Styles.WrapIcon>
                </Styles.Element>
              ))}
            </Styles.BlockElements>
          </Styles.Block>
        </Styles.TranslateBlock>
      )}
    </>
  );
};
