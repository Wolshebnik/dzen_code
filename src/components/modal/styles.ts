import styled, { css } from 'styled-components';

export const Block = styled.div`
  position: relative;
  border-radius: 6px;

  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.grey};
    box-shadow: ${theme.shadow};
  `}
`;

export const StyledClose = styled.div`
  position: absolute;
  top: -20px;
  right: -20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;

  ${({ theme }) => css`
    transition: ${theme.transition};
    background-color: ${theme.colors.white};
    box-shadow: ${theme.shadow};

    :hover {
      transform: rotate(90deg);
    }
  `}
`;

export const Title = styled.h3`
  padding: 20px;
  font-size: 24px;
  box-shadow: 0 1px 0 ${({ theme }) => theme.colors.grey};
`;

export const BlockElements = styled.div`
  display: flex;
  flex-direction: column;

  > :last-child {
    box-shadow: none;
  }
`;

export const Element = styled.div`
  display: grid;
  grid-template-columns:
    10px 40px minmax(200px, 2fr) minmax(100px, 1fr)
    24px;
  align-items: center;
  gap: 20px;
  padding: 0 20px;
  height: 70px;
  cursor: pointer;

  ${({ theme }) => css`
    transition: ${theme.transition};
    box-shadow: 0 1px 0 ${theme.colors.grey};

    :hover {
      box-shadow: 0px 10px 15px -5px rgba(0, 0, 0, 0.2);

      :last-child {
        box-shadow: 0px -10px 15px -5px rgba(0, 0, 0, 0.2);
      }
    }
  `}
`;

export const Circle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.green};
`;

export const Image = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.span``;
export const SerialNumber = styled.span``;

export const Status = styled.div``;

export const WrapIcon = styled.span`
  display: flex;

  > svg {
    width: 20px;
  }
`;
