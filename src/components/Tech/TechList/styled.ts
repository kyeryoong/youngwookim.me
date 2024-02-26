import styled from 'styled-components';

export const TechListWrapper = styled('div')`
  margin-bottom: 100px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const TechListHeader = styled('span')`
  width: 100%;
  color: white;
  border-bottom: ${({ theme }) => `1px solid ${theme.color.white}`};
  padding-bottom: 35px;
  margin-bottom: 25px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

export const TechListCategoryName = styled('span')`
  font-size: ${({ theme }) => theme.font.xxxl};
  font-weight: 600;
  color: ${({ theme }) => theme.color.white};
`;

export const TechListCount = styled('span')`
  font-size: ${({ theme }) => theme.font.xxxxl};
  font-weight: 700;
  color: ${({ theme }) => theme.color.white};
`;
