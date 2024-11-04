import styled from 'styled-components';

export const LabelWrapper = styled('div')`
  font-size: ${({ theme }) => theme.font.xxxl};
  font-weight: 600;
  width: 100%;
  color: ${({ theme }) => theme.color.white};
  border-bottom: 1px solid ${({ theme }) => theme.color.gray[800]};
  padding-bottom: 24px;
  margin-bottom: 24px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: ${({ theme }) => theme.font.mobile.xxxl};
    padding-bottom: min(3vw, 24px);
    margin-bottom: min(3vw, 24px);
  }
`;
