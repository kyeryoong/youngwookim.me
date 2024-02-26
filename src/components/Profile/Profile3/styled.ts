import Image from 'next/image';
import styled from 'styled-components';

type TableItemBaseProps = {
  itemIndex: number;
  hoveredIndex: number | null;
};

export const ProfilePageWrapper = styled('div')`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.black};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;

export const Heading = styled('h1')`
  width: 400px;
  font-size: ${({ theme }) => theme.font.xxxxxl};
  font-weight: 500;
  color: ${({ theme }) => theme.color.white};
`;

export const TableItemsWrapper = styled('div')`
  width: 800px;
  height: 800px;
  position: relative;
  /* background-color: red; */
`;

export const TableItemBase = styled(Image)<TableItemBaseProps>`
  position: absolute;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    transform: scale(1.1);
    z-index: 10;
    filter: drop-shadow(0px 0px 20px aqua);
  }

  opacity: ${({ itemIndex, hoveredIndex }) =>
    hoveredIndex !== null && (itemIndex === hoveredIndex ? 1 : 0.3)};
`;

export const TableItem = {
  Keyboard: styled(TableItemBase)`
    width: 54%;
    height: 36%;
    top: 50%;
    left: 5%;
    z-index: 2;
  `,
  Mouse: styled(TableItemBase)`
    width: 15%;
    height: 15%;
    top: 80%;
    left: 65%;
    z-index: 3;
  `,
  Monitor: styled(TableItemBase)`
    width: 60%;
    height: 60%;
    top: 5%;
    left: 20%;
    z-index: 1;
  `,
  Coffee: styled(TableItemBase)`
    width: 16%;
    height: 24%;
    top: 25%;
    left: 5%;
    z-index: 1;
  `,
  Book: styled(TableItemBase)`
    width: 36%;
    height: 24%;
    top: 55%;
    left: 60%;
    z-index: 1;
  `,
};

export const DescriptionWrapper = styled('div')`
  width: 400px;
  color: ${({ theme }) => theme.color.white};
`;

export const Description = styled('div')`
  width: 100%;
  height: fit-content;
  background-color: ${({ theme }) => theme.color.gray[900]};
  padding: 30px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

export const DescriptionImage = styled(Image)`
  width: 200px;
  height: 200px;
  margin-bottom: 20px;
  border-radius: 10px;
`;

export const DescriptionNameEng = styled('span')`
  font-size: ${({ theme }) => theme.font.xxl};
  color: ${({ theme }) => theme.color.white[800]};
`;

export const DescriptionNameKor = styled('span')`
  font-size: ${({ theme }) => theme.font.l};
  color: ${({ theme }) => theme.color.gray[500]};
  border-top: ${({ theme }) => `1px solid ${theme.color.gray[500]}`};
  padding-top: 20px;
  margin-top: 20px;
`;

export const DescriptionPrice = styled('span')`
  font-size: ${({ theme }) => theme.font.l};
  color: ${({ theme }) => theme.color.gray[500]};
`;

export const DescriptionPlaceHolder = styled('div')`
  font-size: ${({ theme }) => theme.font.xxl};
  color: ${({ theme }) => theme.color.gray[500]};
  text-align: right;
`;
