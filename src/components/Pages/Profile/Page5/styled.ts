import styled from 'styled-components';

type TitleProps = {
  progress: number;
};

export const Page5Wrapper = styled('section')`
  width: 100%;
  height: 300dvh;
  background-color: red;
`;

export const Scene1 = styled('div')`
  width: 100%;
  height: 200dvh;
  background: ${({ theme }) =>
    `linear-gradient(90deg, ${theme.color.deepPurple[800]}, ${theme.color.indigo[400]})`};
  position: sticky;
  top: 0px;
`;

export const TitleWrapper = styled('div')`
  width: 100%;
  height: 100dvh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0px;
`;

export const Title = styled('h1')<TitleProps>`
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

export const Scene2 = styled('div')`
  width: 100%;
  height: fit-content;
  position: sticky;
  top: 0px;
  color: white;
  background-color: ${({ theme }) => theme.color.black};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 100px;
  padding-top: 100px;
  padding-bottom: 100px;
`;

export const DescriptionWrapper = styled('div')`
  width: min(90vw, 1200px);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 40px;

  @media (pointer: coarse) or (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const Description = styled('article')`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media (pointer: coarse) or (max-width: 1200px) {
    width: 100%;
    gap: min(2.5vw, 20px);
  }
`;

export const DescriptionTitle = styled('h2')`
  font-size: 4rem;
  font-weight: 600;
  color: ${({ theme }) => theme.color.white};
  word-break: keep-all;

  @media (pointer: coarse) or (max-width: 1200px) {
    font-size: min(10vw, 4rem);
  }
`;

export const DescriptionText = styled('p')`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.color.gray[600]};
  word-break: keep-all;

  @media (pointer: coarse) or (max-width: 1200px) {
    font-size: min(4vw, 1.6rem);
  }
`;
