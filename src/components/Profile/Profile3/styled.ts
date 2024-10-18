import Image from 'next/image';
import styled from 'styled-components';

type TableItemBaseProps = {
  $itemIndex: number;
  $hoveredIndex: number | null;
};

type ListElementProps = {
  $isHovered: boolean;
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

export const ItemsWrapper = styled('div')`
  width: 720px;
  height: 720px;
  position: fixed;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  transition: 0.5s;

  @media (pointer: coarse) or (max-width: 1400px) {
    width: 500px;
    height: 500px;
  }

  @media (pointer: coarse) or (max-width: 1000px) {
    width: min(500px, 90vw);
    height: min(500px, 90vw);
  }
`;

export const ItemBase = styled(Image)<TableItemBaseProps>`
  position: absolute;
  cursor: pointer;
  transition: 0.5s;

  opacity: ${({ $itemIndex, $hoveredIndex }) =>
    $hoveredIndex !== null && ($itemIndex === $hoveredIndex ? 1 : 0.4)};
  filter: ${({ $itemIndex, $hoveredIndex }) =>
    $hoveredIndex !== null && $itemIndex === $hoveredIndex
      ? 'drop-shadow(0px 0px 20px aqua)'
      : 'none'};

  &:hover {
    transform: scale(1.1);
    z-index: 10;
    filter: drop-shadow(0px 0px 20px aqua);
  }
`;

export const Item = {
  Keyboard: styled(ItemBase)`
    width: 60%;
    height: 40%;
    top: 50%;
    left: 0%;
    z-index: 2;
  `,
  Mouse: styled(ItemBase)`
    width: 18%;
    height: 18%;
    top: 82%;
    left: 65%;
    z-index: 3;
  `,
  Monitor: styled(ItemBase)`
    width: 68%;
    height: 68%;
    top: 0%;
    left: 18%;
    z-index: 1;
  `,
  Coffee: styled(ItemBase)`
    width: 16%;
    height: 24%;
    top: 25%;
    left: 7%;
    z-index: 1;
  `,
  Book: styled(ItemBase)`
    width: 36%;
    height: 24%;
    top: 57%;
    left: 64%;
    z-index: 1;
  `,
};

export const ListWrapper = styled('div')`
  position: absolute;
  bottom: 20dvh;
  right: 15vw;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (pointer: coarse) or (max-width: 1000px) {
    bottom: 15dvh;
    right: 5vw;
    gap: 5px;
  }
`;

export const ListElement = styled('div')`
  font-weight: 400;
  height: fit-content;
  text-align: right;
  transition: 0.5s;
  cursor: pointer;
`;

export const ListElementLabel = styled('div')<ListElementProps>`
  font-size: ${({ theme, $isHovered }) => ($isHovered ? theme.font.xxxxl : theme.font.xxxl)};
  line-height: ${({ $isHovered }) => ($isHovered ? '40px' : '30px')};
  color: ${({ theme, $isHovered }) => ($isHovered ? theme.color.white : theme.color.gray[500])};
  transition: 0.5s;

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: ${({ theme, $isHovered }) =>
      $isHovered ? theme.font.mobile.xxxl : theme.font.mobile.xxl};
    line-height: ${({ $isHovered }) => ($isHovered ? '30px' : '20px')};
  }
`;

export const ListElementDescription = styled('div')<ListElementProps>`
  line-height: ${({ $isHovered }) => ($isHovered ? '30px' : '0px')};
  color: ${({ theme, $isHovered }) => ($isHovered ? theme.color.white : theme.color.gray[500])};
  overflow: hidden;
  transition: 0.5s;

  @media (pointer: coarse) or (max-width: 1000px) {
    line-height: ${({ $isHovered }) => ($isHovered ? '20px' : '0px')};
  }
`;
