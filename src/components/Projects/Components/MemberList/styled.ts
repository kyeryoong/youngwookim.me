import styled from 'styled-components';

type MemberListWrapperProps = {
  gap: number;
  marginBottom: number;
};

export const MemberListWrapper = styled('div')<MemberListWrapperProps>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: ${({ gap }) => `${gap}px`};
  margin-bottom: ${({ marginBottom }) => `${marginBottom}px`};

  @media (pointer: coarse) or (max-width: 1000px) {
    gap: ${({ gap }) => `min(${gap / 8}vw , ${gap}px)`};
    margin-bottom: ${({ marginBottom }) => `min(${marginBottom / 8}vw , ${marginBottom}px)`};
  }
`;
