import styled from 'styled-components';

export const Block = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const Wrapper = styled.div`
  padding: 0 20px;
`;

export const TextBlock = styled.div`
  padding: 20px 0;
`;

export const Title = styled.h3`
  padding-bottom: 20px;
  box-shadow: 0 1px 0 ${({ theme }) => theme.colors.grey};
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
