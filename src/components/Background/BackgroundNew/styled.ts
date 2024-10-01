import styled from 'styled-components';

export const BackgroundWrapper = styled('div')`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.black};
  display: flex;
  align-content: center;
  flex-wrap: wrap;
  gap: 30px 40px;
  padding-left: 100px;
  padding-right: 100px;
`;

export const Text = styled('h1')`
  font-size: 5rem;
  font-weight: 500;
  height: 80px;
  line-height: 80px;
  color: ${({ theme }) => theme.color.white};
`;
