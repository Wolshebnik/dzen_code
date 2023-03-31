import styled from 'styled-components';

export const WrapPage = styled.div`
  display: flex;
  height: 100%;
`;

export const WrapOutlet = styled.div`
  position: relative;
  width: 100%;
  height: calc(100% - 80px);
  padding: 40px 80px;
  overflow-y: auto;
`;
