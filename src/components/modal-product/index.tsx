import * as Icon from 'assets';

import { IModal } from './type';
import * as Styles from './styles';
import { useRef, useEffect } from 'react';

export const ModalProduct = ({
  isOpen,
  onClose,
  duration,
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

  const handleDelete = () => {
    setIsOpen(true);
  };

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
              <Styles.Element>
                <Styles.Circle />

                <Styles.Image
                  src="https://images.philips.com/is/image/PhilipsConsumer/346B1C_00-IMS-ru_UA?wid=420&hei=360&$jpglarge$"
                  alt="product"
                />
                <Styles.Description>
                  <Styles.Name>Description</Styles.Name>
                  <Styles.Name>SerialNumber</Styles.Name>
                </Styles.Description>

                <Styles.Status>Свободен</Styles.Status>

                <Styles.WrapIcon onClick={handleDelete}>
                  <Icon.Delete />
                </Styles.WrapIcon>
              </Styles.Element>

              <Styles.Element>
                <Styles.Circle />

                <Styles.Image
                  src="https://images.philips.com/is/image/PhilipsConsumer/346B1C_00-IMS-ru_UA?wid=420&hei=360&$jpglarge$"
                  alt="product"
                />

                <Styles.Description>
                  <Styles.Name>Description</Styles.Name>
                  <Styles.Name>SerialNumber</Styles.Name>
                </Styles.Description>

                <Styles.Status>Свободен</Styles.Status>

                <Styles.WrapIcon>
                  <Icon.Delete />
                </Styles.WrapIcon>
              </Styles.Element>

              <Styles.Element>
                <Styles.Circle />

                <Styles.Image
                  src="https://images.philips.com/is/image/PhilipsConsumer/346B1C_00-IMS-ru_UA?wid=420&hei=360&$jpglarge$"
                  alt="product"
                />

                <Styles.Description>
                  <Styles.Name>Description</Styles.Name>
                  <Styles.Name>SerialNumber</Styles.Name>
                </Styles.Description>

                <Styles.Status>Свободен</Styles.Status>

                <Styles.WrapIcon>
                  <Icon.Delete />
                </Styles.WrapIcon>
              </Styles.Element>

              {/* <Styles.Element>
                <Styles.Circle />

                <Styles.Image
                  src="https://images.philips.com/is/image/PhilipsConsumer/346B1C_00-IMS-ru_UA?wid=420&hei=360&$jpglarge$"
                  alt="product"
                />

                <Styles.Description>
                  <Styles.Name>Description</Styles.Name>
                  <Styles.Name>SerialNumber</Styles.Name>
                </Styles.Description>

                <Styles.Status>Свободен</Styles.Status>

                <Styles.WrapIcon>
                  <Icon.Delete />
                </Styles.WrapIcon>
              </Styles.Element>

              <Styles.Element>
                <Styles.Circle />

                <Styles.Image
                  src="https://images.philips.com/is/image/PhilipsConsumer/346B1C_00-IMS-ru_UA?wid=420&hei=360&$jpglarge$"
                  alt="product"
                />

                <Styles.Description>
                  <Styles.Name>Description</Styles.Name>
                  <Styles.Name>SerialNumber</Styles.Name>
                </Styles.Description>

                <Styles.Status>Свободен</Styles.Status>

                <Styles.WrapIcon>
                  <Icon.Delete />
                </Styles.WrapIcon>
              </Styles.Element>

              <Styles.Element>
                <Styles.Circle />

                <Styles.Image
                  src="https://images.philips.com/is/image/PhilipsConsumer/346B1C_00-IMS-ru_UA?wid=420&hei=360&$jpglarge$"
                  alt="product"
                />

                <Styles.Description>
                  <Styles.Name>Description</Styles.Name>
                  <Styles.Name>SerialNumber</Styles.Name>
                </Styles.Description>

                <Styles.Status>Свободен</Styles.Status>

                <Styles.WrapIcon>
                  <Icon.Delete />
                </Styles.WrapIcon>
              </Styles.Element>

              <Styles.Element>
                <Styles.Circle />

                <Styles.Image
                  src="https://images.philips.com/is/image/PhilipsConsumer/346B1C_00-IMS-ru_UA?wid=420&hei=360&$jpglarge$"
                  alt="product"
                />

                <Styles.Description>
                  <Styles.Name>Description</Styles.Name>
                  <Styles.Name>SerialNumber</Styles.Name>
                </Styles.Description>

                <Styles.Status>Свободен</Styles.Status>

                <Styles.WrapIcon>
                  <Icon.Delete />
                </Styles.WrapIcon>
              </Styles.Element>

              <Styles.Element>
                <Styles.Circle />

                <Styles.Image
                  src="https://images.philips.com/is/image/PhilipsConsumer/346B1C_00-IMS-ru_UA?wid=420&hei=360&$jpglarge$"
                  alt="product"
                />

                <Styles.Description>
                  <Styles.Name>Description</Styles.Name>
                  <Styles.Name>SerialNumber</Styles.Name>
                </Styles.Description>

                <Styles.Status>Свободен</Styles.Status>

                <Styles.WrapIcon>
                  <Icon.Delete />
                </Styles.WrapIcon>
              </Styles.Element>

              <Styles.Element>
                <Styles.Circle />

                <Styles.Image
                  src="https://images.philips.com/is/image/PhilipsConsumer/346B1C_00-IMS-ru_UA?wid=420&hei=360&$jpglarge$"
                  alt="product"
                />

                <Styles.Description>
                  <Styles.Name>Description</Styles.Name>
                  <Styles.Name>SerialNumber</Styles.Name>
                </Styles.Description>

                <Styles.Status>Свободен</Styles.Status>

                <Styles.WrapIcon>
                  <Icon.Delete />
                </Styles.WrapIcon>
              </Styles.Element>

              <Styles.Element>
                <Styles.Circle />

                <Styles.Image
                  src="https://images.philips.com/is/image/PhilipsConsumer/346B1C_00-IMS-ru_UA?wid=420&hei=360&$jpglarge$"
                  alt="product"
                />

                <Styles.Description>
                  <Styles.Name>Description</Styles.Name>
                  <Styles.Name>SerialNumber</Styles.Name>
                </Styles.Description>

                <Styles.Status>Свободен</Styles.Status>

                <Styles.WrapIcon>
                  <Icon.Delete />
                </Styles.WrapIcon>
              </Styles.Element>

              <Styles.Element>
                <Styles.Circle />

                <Styles.Image
                  src="https://images.philips.com/is/image/PhilipsConsumer/346B1C_00-IMS-ru_UA?wid=420&hei=360&$jpglarge$"
                  alt="product"
                />

                <Styles.Description>
                  <Styles.Name>Description</Styles.Name>
                  <Styles.Name>SerialNumber</Styles.Name>
                </Styles.Description>

                <Styles.Status>Свободен</Styles.Status>

                <Styles.WrapIcon>
                  <Icon.Delete />
                </Styles.WrapIcon>
              </Styles.Element>
              <Styles.Element>
                <Styles.Circle />

                <Styles.Image
                  src="https://images.philips.com/is/image/PhilipsConsumer/346B1C_00-IMS-ru_UA?wid=420&hei=360&$jpglarge$"
                  alt="product"
                />

                <Styles.Description>
                  <Styles.Name>Description</Styles.Name>
                  <Styles.Name>SerialNumber</Styles.Name>
                </Styles.Description>

                <Styles.Status>Свободен</Styles.Status>

                <Styles.WrapIcon>
                  <Icon.Delete />
                </Styles.WrapIcon>
              </Styles.Element>
              <Styles.Element>
                <Styles.Circle />

                <Styles.Image
                  src="https://images.philips.com/is/image/PhilipsConsumer/346B1C_00-IMS-ru_UA?wid=420&hei=360&$jpglarge$"
                  alt="product"
                />

                <Styles.Description>
                  <Styles.Name>Description</Styles.Name>
                  <Styles.Name>SerialNumber</Styles.Name>
                </Styles.Description>

                <Styles.Status>Свободен</Styles.Status>

                <Styles.WrapIcon>
                  <Icon.Delete />
                </Styles.WrapIcon>
              </Styles.Element>
              <Styles.Element>
                <Styles.Circle />

                <Styles.Image
                  src="https://images.philips.com/is/image/PhilipsConsumer/346B1C_00-IMS-ru_UA?wid=420&hei=360&$jpglarge$"
                  alt="product"
                />

                <Styles.Description>
                  <Styles.Name>Description</Styles.Name>
                  <Styles.Name>SerialNumber</Styles.Name>
                </Styles.Description>

                <Styles.Status>Свободен</Styles.Status>

                <Styles.WrapIcon>
                  <Icon.Delete />
                </Styles.WrapIcon>
              </Styles.Element>
              <Styles.Element>
                <Styles.Circle />

                <Styles.Image
                  src="https://images.philips.com/is/image/PhilipsConsumer/346B1C_00-IMS-ru_UA?wid=420&hei=360&$jpglarge$"
                  alt="product"
                />

                <Styles.Description>
                  <Styles.Name>Description</Styles.Name>
                  <Styles.Name>SerialNumber</Styles.Name>
                </Styles.Description>

                <Styles.Status>Свободен</Styles.Status>

                <Styles.WrapIcon>
                  <Icon.Delete />
                </Styles.WrapIcon>
              </Styles.Element>
              <Styles.Element>
                <Styles.Circle />

                <Styles.Image
                  src="https://images.philips.com/is/image/PhilipsConsumer/346B1C_00-IMS-ru_UA?wid=420&hei=360&$jpglarge$"
                  alt="product"
                />

                <Styles.Description>
                  <Styles.Name>Description</Styles.Name>
                  <Styles.Name>SerialNumber</Styles.Name>
                </Styles.Description>

                <Styles.Status>Свободен</Styles.Status>

                <Styles.WrapIcon>
                  <Icon.Delete />
                </Styles.WrapIcon>
              </Styles.Element>
              <Styles.Element>
                <Styles.Circle />

                <Styles.Image
                  src="https://images.philips.com/is/image/PhilipsConsumer/346B1C_00-IMS-ru_UA?wid=420&hei=360&$jpglarge$"
                  alt="product"
                />

                <Styles.Description>
                  <Styles.Name>Description</Styles.Name>
                  <Styles.Name>SerialNumber</Styles.Name>
                </Styles.Description>

                <Styles.Status>Свободен</Styles.Status>

                <Styles.WrapIcon>
                  <Icon.Delete />
                </Styles.WrapIcon>
              </Styles.Element>

              <Styles.Element>
                <Styles.Circle />

                <Styles.Image
                  src="https://images.philips.com/is/image/PhilipsConsumer/346B1C_00-IMS-ru_UA?wid=420&hei=360&$jpglarge$"
                  alt="product"
                />

                <Styles.Description>
                  <Styles.Name>Description</Styles.Name>
                  <Styles.Name>SerialNumber</Styles.Name>
                </Styles.Description>

                <Styles.Status>Свободен</Styles.Status>

                <Styles.WrapIcon>
                  <Icon.Delete />
                </Styles.WrapIcon>
              </Styles.Element>

              <Styles.Element>
                <Styles.Circle />

                <Styles.Image
                  src="https://images.philips.com/is/image/PhilipsConsumer/346B1C_00-IMS-ru_UA?wid=420&hei=360&$jpglarge$"
                  alt="product"
                />

                <Styles.Description>
                  <Styles.Name>Description</Styles.Name>
                  <Styles.Name>SerialNumber</Styles.Name>
                </Styles.Description>

                <Styles.Status>Свободен</Styles.Status>

                <Styles.WrapIcon>
                  <Icon.Delete />
                </Styles.WrapIcon>
              </Styles.Element>

              <Styles.Element>
                <Styles.Circle />

                <Styles.Image
                  src="https://images.philips.com/is/image/PhilipsConsumer/346B1C_00-IMS-ru_UA?wid=420&hei=360&$jpglarge$"
                  alt="product"
                />

                <Styles.Description>
                  <Styles.Name>Description</Styles.Name>
                  <Styles.Name>SerialNumber</Styles.Name>
                </Styles.Description>

                <Styles.Status>Свободен</Styles.Status>

                <Styles.WrapIcon>
                  <Icon.Delete />
                </Styles.WrapIcon>
              </Styles.Element>

              <Styles.Element>
                <Styles.Circle />

                <Styles.Image
                  src="https://images.philips.com/is/image/PhilipsConsumer/346B1C_00-IMS-ru_UA?wid=420&hei=360&$jpglarge$"
                  alt="product"
                />

                <Styles.Description>
                  <Styles.Name>Description</Styles.Name>
                  <Styles.Name>SerialNumber</Styles.Name>
                </Styles.Description>

                <Styles.Status>Свободен</Styles.Status>

                <Styles.WrapIcon onClick={handleDelete}>
                  <Icon.Delete />
                </Styles.WrapIcon>
              </Styles.Element> */}
            </Styles.BlockElements>
          </Styles.Block>
        </Styles.TranslateBlock>
      )}
    </>
  );
};
