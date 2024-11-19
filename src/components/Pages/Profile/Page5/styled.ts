import styled from 'styled-components';

type TitleProps = {
  progress: number;
};

export const Page5Wrapper = styled('section')`
  width: 100%;
  height: 400vh;
  background-color: red;
`;

export const Scene1 = styled('section')`
  width: 100%;
  height: 225vh;
  background: ${({ theme }) =>
    `linear-gradient(270deg, ${theme.color.cyan[300]}, ${theme.color.green[300]})`};
  position: sticky;
  top: 0px;
`;

export const TitleWrapper = styled('div')`
  width: 100%;
  height: 100vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0px;
`;

export const Title1 = styled('h1')<TitleProps>`
  font-size: 6rem;
  font-weight: 700;
  width: fit-content;
  transform: ${({ progress }) => (progress > 98 ? 'scale(1.0)' : 'scale(0.85)')};
  word-break: keep-all;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 1) ${({ progress }) => `${progress}%`},
    rgba(255, 255, 255, 0.25) ${({ progress }) => `${progress}%`}
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  transition: background-clip 0.25s;
  transition: transform 0.5s;

  @media (pointer: coarse) or (max-width: 1200px) {
    font-size: min(10vw, 6rem);
  }
`;

export const Scene2 = styled('section')`
  width: 100%;
  height: 400vh;
  position: sticky;
  top: 0px;
  color: white;
  background-color: ${({ theme }) => theme.color.black};
`;

export const DescriptionListWrapper = styled('ul')`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: sticky;
  top: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title2 = styled('div')`
  color: ${({ theme }) => theme.color.white};
  width: 100%;
  height: calc(32vh - 160px);
  padding: 0px 100px;
  position: absolute;
  top: 160px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (pointer: coarse) or (max-width: 1000px) {
    height: calc(24vh - 100px);
    top: 100px;
    padding: 0px 5vw;
  }
`;

export const Title2Text = styled('h2')`
  font-size: min(4.5vw, 3rem);
  font-weight: 600;
`;

export const Title2Index = styled('h2')`
  font-size: min(6vw, 4rem);
  color: ${({ theme }) => theme.color.gray[700]};
`;

export const Title2IndexHighlight = styled('strong')`
  color: ${({ theme }) => theme.color.cyan[500]};
`;

export const DescriptionWrapper = styled('li')`
  display: none;
  width: min(100%, 1280px);
  height: 68vh;
  position: absolute;
  bottom: 0vh;
  display: grid;
  grid-template-columns: fit-content(100%) 1fr;
  gap: 60px;
  padding: 80px 80px 0px 80px;
  border-radius: 16px 16px 0px 0px;
  background: ${({ theme }) =>
    `linear-gradient(270deg, ${theme.color.cyan[300]}, ${theme.color.green[300]})`};
  box-shadow: 0px 0px 20px 10px rgba(50, 50, 50, 0.1);
  transition: 0.5s;

  @media (pointer: coarse) or (max-width: 1000px) {
    height: 76vh;
    grid-template-columns: none;
    grid-template-rows: fit-content(100%) 1fr;
    gap: min(7.5vw, 60px);
    padding: min(10vw, 80px) min(5vw, 80px) 0px min(5vw, 80px);
  }
`;

export const PhoneWrapper = styled('div')`
  @media (pointer: coarse) or (max-width: 1000px) {
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    margin-bottom: 0px;
    order: 1;
  }
`;

export const Description = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (pointer: coarse) or (max-width: 1000px) {
    gap: min(2vw, 32px);
    order: -1;
  }
`;

export const DescriptionTitle = styled('h2')`
  font-size: 3.2rem;
  font-weight: 600;
  color: white;
  word-break: keep-all;

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: min(8vw, 3.2rem);
  }
`;

export const DescriptionText = styled('p')`
  font-size: 1.6rem;
  font-weight: 400;
  color: white;
  word-break: keep-all;

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: min(4vw, 1.6rem);
  }
`;
