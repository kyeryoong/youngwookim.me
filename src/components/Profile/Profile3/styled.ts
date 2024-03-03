import Image from 'next/image';
import styled from 'styled-components';

type TableItemBaseProps = {
  $itemIndex: number;
  $hoveredIndex: number | null;
};

export const ProfilePageWrapper = styled('div')`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.black};
  padding-left: 15vw;
  padding-right: 15vw;
  padding-top: 20vh;
  padding-bottom: 20vh;
  display: grid;
  grid-template-columns: fit-content(100%) 1fr;

  @media (pointer: coarse) or (max-width: 1300px) {
    padding-left: 5vw;
    padding-right: 5vw;
    padding-top: 15vh;
    padding-bottom: 15vh;
    grid-template-columns: auto;
    grid-template-rows: fit-content(100%) 1fr;
  }
`;

export const DescriptionWrapper = styled('div')`
  color: ${({ theme }) => theme.color.white};
  position: relative;

  @media (pointer: coarse) or (max-width: 1300px) {
    width: 90vw;
    height: fit-content;
  }
`;

export const Title = styled('h1')`
  font-size: ${({ theme }) => theme.font.xxxxxxl};
  font-weight: 500;
  color: ${({ theme }) => theme.color.white};

  @media (pointer: coarse) or (max-width: 1300px) {
    width: 90vw;
    font-size: ${({ theme }) => theme.font.mobile.xxxxxxl};
  }
`;

export const Description = styled('div')`
  width: 500px;
  height: fit-content;
  background-color: ${({ theme }) => theme.color.gray[900]};
  padding: 30px;
  position: absolute;
  bottom: 0px;
  left: 0px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;

  @media (pointer: coarse) or (max-width: 1300px) {
    width: 90vw;
    height: fit-content;
    padding: min(5vw, 30px);
    top: 0px;
  }
`;

export const DescriptionImage = styled(Image)`
  width: 200px;
  height: 200px;
  margin-bottom: 20px;
  border-radius: 10px;

  @media (pointer: coarse) or (max-width: 1300px) {
    width: 30vw;
    height: fit-content;
    max-width: 200px;
    max-height: 200px;
    top: 0px;
  }
`;

export const DescriptionNameEng = styled('span')`
  font-size: ${({ theme }) => theme.font.xxl};
  color: ${({ theme }) => theme.color.white[800]};

  @media (pointer: coarse) or (max-width: 1300px) {
    font-size: ${({ theme }) => theme.font.mobile.xxl};
  }
`;

export const DescriptionNameKor = styled('span')`
  font-size: ${({ theme }) => theme.font.l};
  color: ${({ theme }) => theme.color.gray[500]};
  border-top: ${({ theme }) => `1px solid ${theme.color.gray[500]}`};
  padding-top: 20px;
  margin-top: 20px;

  @media (pointer: coarse) or (max-width: 1300px) {
    font-size: ${({ theme }) => theme.font.mobile.l};
  }
`;

export const DescriptionPrice = styled('span')`
  font-size: ${({ theme }) => theme.font.l};
  color: ${({ theme }) => theme.color.gray[500]};

  @media (pointer: coarse) or (max-width: 1300px) {
    font-size: ${({ theme }) => theme.font.mobile.l};
  }
`;

export const ItemsWrapper = styled('div')`
  width: min(60vh, 35vw);
  height: min(60vh, 35vw);
  position: relative;
  align-self: end;
  justify-self: end;

  @media (pointer: coarse) or (max-width: 1300px) {
    width: min(90vw, 55vh);
    height: min(90vw, 55vh);
    padding-left: 5vw;
    padding-right: 5vw;
    justify-self: center;
  }
`;

export const ItemBase = styled(Image)<TableItemBaseProps>`
  position: absolute;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    transform: scale(1.1);
    z-index: 10;
    filter: drop-shadow(0px 0px 20px aqua);
  }

  opacity: ${({ $itemIndex, $hoveredIndex }) =>
    $hoveredIndex !== null && ($itemIndex === $hoveredIndex ? 1 : 0.3)};
`;

export const Item = {
  Keyboard: styled(ItemBase)`
    width: 54%;
    height: 36%;
    top: 50%;
    left: 5%;
    z-index: 2;
  `,
  Mouse: styled(ItemBase)`
    width: 15%;
    height: 15%;
    top: 80%;
    left: 65%;
    z-index: 3;
  `,
  Monitor: styled(ItemBase)`
    width: 60%;
    height: 60%;
    top: 5%;
    left: 20%;
    z-index: 1;
  `,
  Coffee: styled(ItemBase)`
    width: 16%;
    height: 24%;
    top: 25%;
    left: 5%;
    z-index: 1;
  `,
  Book: styled(ItemBase)`
    width: 36%;
    height: 24%;
    top: 55%;
    left: 60%;
    z-index: 1;
  `,
};
