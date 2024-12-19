import { styled } from 'styled-components';

export const TechList = styled('li')`
  width: fit-content;
  list-style: none;
  display: flex;
  animation: techCarouselScroll 20s infinite;
  animation-timing-function: linear;

  @keyframes techCarouselScroll {
    0% {
      transform: translate(0%, 7.5%);
    }

    100% {
      transform: translate(-100%, 7.5%);
    }
  }
`;

export const TechWrapper = styled('ul')`
  height: 100%;
  margin-right: 60px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;

  @media (pointer: coarse) or (max-width: 1200px) {
    margin-right: min(10vw, 60px);
    gap: min(3vw, 24px);
  }
`;

export const TechName = styled('p')`
  font-size: 1.4rem;
  font-weight: 300;
  width: 100%;
  text-align: center;
  color: ${({ theme }) => theme.color.gray[300]};
  word-break: keep-all;

  @media (pointer: coarse) or (max-width: 1200px) {
    font-size: min(2.8vw, 1.4rem);
  }
`;
