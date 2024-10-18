import styled from 'styled-components';

export const ProfilePageWrapper = styled('div')`
  width: 100vw;
  height: 100dvh;
  background-color: ${({ theme }) => theme.color.black};
  padding-left: 15vw;
  padding-right: 15vw;
  padding-top: 20dvh;
  padding-bottom: 20dvh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (pointer: coarse) or (max-width: 1000px) {
    padding-left: 5vw;
    padding-right: 5vw;
    padding-top: 15dvh;
    padding-bottom: 15dvh;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const TitleWrapper = styled('div')`
  width: 35vw;
  height: 60vh;
  z-index: 10;

  @media (pointer: coarse) or (max-width: 1000px) {
    width: 90vw;
    height: 30vh;
  }
`;

export const Title = styled('h1')`
  font-size: ${({ theme }) => theme.font.xxxxxl};
  font-weight: 500;
  color: ${({ theme }) => theme.color.white};

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: ${({ theme }) => theme.font.mobile.xxxxxl};
  }
`;

export const ContentWrapper = styled('div')`
  width: 35vw;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 50px;
  z-index: 10;

  @media (pointer: coarse) or (max-width: 1000px) {
    width: 90vw;
    height: 30vh;
    gap: 30px;
  }
`;

export const Content = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const ContentTitle = styled('span')`
  font-size: ${({ theme }) => theme.font.xxxxl};
  font-weight: 600;
  color: ${({ theme }) => theme.color.white};

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: ${({ theme }) => theme.font.mobile.xxxxl};
  }
`;

export const ContentSubtitle = styled('span')`
  font-size: ${({ theme }) => theme.font.xl};
  color: ${({ theme }) => theme.color.white};

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: ${({ theme }) => theme.font.mobile.xl};
  }
`;

export const ContentDays = styled('span')`
  font-size: ${({ theme }) => theme.font.xl};
  color: ${({ theme }) => theme.color.gray[500]};
  margin-top: 10px;

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: ${({ theme }) => theme.font.mobile.xl};
    margin-top: 5px;
  }
`;

export const CardVideo = styled('video')`
  width: 600px;
  height: 600px;
  max-width: 600px;
  max-height: 600px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (pointer: coarse) or (max-width: 1000px) {
    width: 80vw;
    height: 80vw;
  }
`;

export const CardVideo1 = styled(CardVideo)`
  animation-name: Animation1;
  animation-duration: 14s;
  animation-iteration-count: infinite;

  @keyframes Animation1 {
    0% {
      opacity: 1;
    }

    10% {
      opacity: 1;
    }

    20% {
      opacity: 1;
    }

    30% {
      opacity: 0;
    }

    40% {
      opacity: 0;
    }

    50% {
      opacity: 0;
    }

    60% {
      opacity: 0;
    }

    70% {
      opacity: 0;
    }

    80% {
      opacity: 1;
    }

    90% {
      opacity: 1;
    }

    100% {
      opacity: 1;
    }
  }
`;

export const CardVideo2 = styled(CardVideo)`
  animation-name: Animation2;
  animation-duration: 14s;
  animation-iteration-count: infinite;
  opacity: 0;

  @keyframes Animation2 {
    0% {
      opacity: 0;
    }

    10% {
      opacity: 0;
    }

    20% {
      opacity: 0;
    }

    30% {
      opacity: 1;
    }

    40% {
      opacity: 1;
    }

    50% {
      opacity: 1;
    }

    60% {
      opacity: 1;
    }

    70% {
      opacity: 1;
    }

    80% {
      opacity: 0;
    }

    90% {
      opacity: 0;
    }

    100% {
      opacity: 0;
    }
  }
`;
