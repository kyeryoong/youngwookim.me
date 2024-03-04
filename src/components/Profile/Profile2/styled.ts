import styled from 'styled-components';

export const ProfilePageWrapper = styled('div')`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.black};
  padding-left: 15vw;
  padding-right: 15vw;
  padding-top: 20vh;
  padding-bottom: 20vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (pointer: coarse) or (max-width: 1000px) {
    padding-left: 5vw;
    padding-right: 5vw;
    padding-top: 15vh;
    padding-bottom: 15vh;
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

export const CardVideoWrapper = styled('div')`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardVideo = styled('video')`
  width: 600px;
  height: 600px;
  max-width: 600px;
  max-height: 600px;

  @media (pointer: coarse) or (max-width: 1000px) {
    width: 70vw;
    height: 70vw;
  }
`;
