import styled from 'styled-components';

export const YoungWooKimMeIntroWrapper = styled('div')`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Label = styled('h3')`
  font-size: min(7vw, 3.5rem);
  font-weight: 200;
  color: ${({ theme }) => theme.color.gray[400]};
`;

export const Title = styled('h1')`
  font-size: 10vw;
  font-weight: 600;
  background: ${({ theme }) =>
    `linear-gradient(135deg, ${theme.color.gray[900]}, ${theme.color.gray[100]})`};
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  margin-top: 5dvh;
  margin-bottom: 5dvh;
`;

export const SubTitle = styled('h2')`
  font-size: min(6vw, 3rem);
  font-weight: 200;
  color: ${({ theme }) => theme.color.gray[400]};
`;
