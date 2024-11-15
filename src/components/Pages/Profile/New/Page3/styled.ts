import styled from 'styled-components';

type TitleProps = {
  progress: number;
};

export const Page3Wrapper = styled('div')`
  width: 100%;
  height: 400dvh;
  display: flex;

  top: 0px;
  position: sticky;
`;

export const Scene1 = styled('div')`
  width: 100%;
  height: 100dvh;
  background-color: ${({ theme }) => theme.color.black};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
`;

export const TitleWrapper = styled('div')``;

export const TitleTop = styled('h1')<TitleProps>`
  font-size: 6rem;
  font-weight: 700;
  width: 100%;
  text-align: center;
  color: ${({ theme }) => theme.color.white};
  opacity: ${({ progress }) => (progress - 50) / 50};
  transform: ${({ progress }) =>
    progress < 100 ? `translateX(calc(-100% + ${progress}%))` : '0px'};
  transition: 0.1s;

  @media (pointer: coarse) or (max-width: 1200px) {
    font-size: min(10vw, 6rem);
  }
`;

export const TitleBottom = styled('h1')<TitleProps>`
  font-size: 6rem;
  font-weight: 700;
  width: 100%;
  text-align: center;
  color: ${({ theme }) => theme.color.white};
  opacity: ${({ progress }) => (progress - 50) / 50};
  transform: ${({ progress }) =>
    progress < 100 ? `translateX(calc(100% - ${progress}%))` : '0px'};
  transition: 0.1s;

  @media (pointer: coarse) or (max-width: 1200px) {
    font-size: min(10vw, 6rem);
  }
`;

export const Scene2 = styled('div')`
  width: 100%;
  height: 100dvh;
  position: fixed;
  top: 50dvh;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: 0.5s;

  @media (pointer: coarse) or (max-width: 1200px) {
    font-size: min(10vw, 6rem);
  }
`;

export const Title = styled('div')<TitleProps>`
  font-size: 6rem;
  font-weight: 700;
  color: ${({ theme, progress }) => (progress > 0 ? theme.color.youngBlue : 'white')};
  transform: ${({ progress }) =>
    progress > 0 ? 'translateY(-115%) scale(0.6)' : 'translateY(0%) scale(1)'};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: 0.5s;
`;
