import styled from 'styled-components';

type CardVideoProps = {
  cardIndex?: number;
};

export const ProfilePageWrapper = styled('div')`
  width: 100vw;
  height: 100dvh;
  background-color: ${({ theme }) => theme.color.black};
  position: relative;
`;

export const Title = styled('h1')`
  font-size: ${({ theme }) => theme.font.xxxxxl};
  font-weight: 500;
  color: ${({ theme }) => theme.color.white};
  position: absolute;
  top: 20dvh;
  left: 15vw;
  z-index: 10;

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: ${({ theme }) => theme.font.mobile.xxxxl};
    top: 15dvh;
    left: 5vw;
  }
`;

export const ContentWrapper = styled('div')`
  position: absolute;
  bottom: 20dvh;
  right: 15vw;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 50px;

  @media (pointer: coarse) or (max-width: 1000px) {
    bottom: 7.5dvh;
    right: 5vw;
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
  margin-top: 12px;

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: ${({ theme }) => theme.font.mobile.xl};
    margin-top: 6px;
  }
`;

export const CardVideo = styled('video')<CardVideoProps>`
  width: 600px;
  height: 600px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 1s;

  @media (pointer: coarse) or (max-width: 1000px) {
    width: min(600px, 80vw);
    height: min(600px, 80vw);
  }
`;

export const CardVideo1 = styled(CardVideo)`
  opacity: ${({ cardIndex }) => (cardIndex === 0 ? 1 : 0)};
`;

export const CardVideo2 = styled(CardVideo)`
  opacity: ${({ cardIndex }) => (cardIndex === 1 ? 1 : 0)};
`;
