import styled from 'styled-components';

type TechListWrapperProps = {
  $gap: number;
};

export const BadgeListWrapper = styled('div')<TechListWrapperProps>`
  margin-bottom: 96px;
  display: flex;
  flex-wrap: wrap;
  gap: ${({ $gap }) => `${$gap}px`};

  @media (pointer: coarse) or (max-width: 1000px) {
    margin-bottom: min(12vw, 96px);
    gap: ${({ $gap }) => `min(${$gap / 8}vw , ${$gap}px)`};
  }
`;

export const BadgeListHeader = styled('span')`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray[800]};
  padding-bottom: 32px;
  margin-bottom: 24px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  @media (pointer: coarse) or (max-width: 1000px) {
    padding-bottom: min(4vw, 32px);
    margin-bottom: min(3vw, 24px);
  }
`;

export const BadgeListCategoryName = styled('span')`
  font-size: ${({ theme }) => theme.font.xxxl};
  font-weight: 600;
  color: ${({ theme }) => theme.color.white};

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: ${({ theme }) => theme.font.mobile.xxxl};
  }
`;

export const BadgeListCount = styled('span')`
  font-size: ${({ theme }) => theme.font.xxxxl};
  font-weight: 700;
  color: ${({ theme }) => theme.color.white};

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: ${({ theme }) => theme.font.mobile.xxxl};
  }
`;
