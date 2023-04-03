import styled, { css } from 'styled-components';

const wrapper = css`
  padding: 0 20px;
`;

export const Block = styled.div`
  max-width: 600px;
  overflow: hidden;
`;

export const TextBlock = styled.div`
  padding-top: 20px;
`;

export const Title = styled.h3`
  ${wrapper};
  padding-bottom: 20px;
  box-shadow: 0 1px 0 ${({ theme }) => theme.colors.grey};
`;

export const ProductBlock = styled.div`
  ${wrapper};
  display: grid;
  grid-template-columns: 10px 40px 1fr;
  align-items: center;
  gap: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
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

export const Name = styled.span`
  width: 472px;
  font-weight: 500;
`;

export const SerialNumber = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.grey};
`;

export const ButtonBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 15px;
  padding: 24px 20px;
  background-color: ${({ theme }) => theme.colors.green};
  border-radius: 0 0 6px 6px;
`;
