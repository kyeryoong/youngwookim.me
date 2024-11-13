import styled from 'styled-components';

type TitleProps = {
  progress: number;
};

type SideProps = {
  progress: number;
};

export const Page3Wrapper = styled('div')`
  width: 100%;
  height: 500dvh;
  display: flex;
  background-color: ${({ theme }) => theme.color.white};
  top: 0px;
  position: sticky;
`;

export const Scene1 = styled('div')`
  width: 100%;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
`;

export const TitleWrapper = styled('div')<TitleProps>``;

export const TitleTop = styled('h1')<TitleProps>`
  font-size: 6rem;
  font-weight: 700;
  width: 100%;
  text-align: center;
  color: ${({ theme }) => theme.color.gray[800]};
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
  color: ${({ theme }) => theme.color.gray[800]};
  opacity: ${({ progress }) => (progress - 50) / 50};
  transform: ${({ progress }) =>
    progress < 100 ? `translateX(calc(100% - ${progress}%))` : '0px'};
  transition: 0.1s;

  @media (pointer: coarse) or (max-width: 1200px) {
    font-size: min(10vw, 6rem);
  }
`;

export const Scene2 = styled('div')`
  font-size: 6rem;
  font-weight: 700;
  width: 100%;
  height: 100dvh;
  color: white;
  background-color: blue;
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

export const Scene3 = styled('div')`
  width: 100%;
  height: 100dvh;
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: white;
`;

export const Side = styled('div')<SideProps>`
  width: ${({ progress }) => (progress > 0 ? '50%' : '100%')};
  height: 100dvh;
  font-size: 6rem;
  font-weight: 700;
  color: ${({ progress }) => (progress > 0.5 ? 'transparent' : 'white')};
  background-color: blue;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: 0.5s;
`;

export const Scene4 = styled('div')``;
