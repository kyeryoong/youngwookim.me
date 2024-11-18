import styled from 'styled-components';

type DescriptionsWrapperProps = {
  show: boolean;
};

export const Page4Wrapper = styled('section')`
  width: 100%;
  height: 150vh;
  display: flex;
  flex-direction: row;
  top: 0px;
  position: sticky;
  transition: 0.5s;
`;

export const DescriptionsCarouselWrapper = styled('div')<DescriptionsWrapperProps>`
  width: 100%;
  height: 70vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 0px;
  transform: ${({ show }) => (show ? 'translateY(0%)' : 'translateY(50%)')};
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: 0.5s;
`;

export const DescriptionCarousel = styled('article')<DescriptionsWrapperProps>`
  display: flex;
  align-items: center;
  animation: ${({ show }) => show && 'scroll 15s infinite'};
  animation-timing-function: linear;

  @keyframes scroll {
    0% {
      transform: translateX(0%);
    }

    100% {
      transform: translateX(calc(-4 * min(72vw, 560px)));
    }
  }
`;

export const DescriptionList = styled('li')`
  list-style: none;
  display: flex;
`;

export const DescriptionWrapper = styled('div')`
  width: min(90vw, 560px);
  height: min(90vw, 560px);
  padding: 20px;
`;

export const Description = styled('figure')`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) =>
    theme.mode === 'dark' ? theme.color.gray[900] : theme.color.black};
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0px 0px 20px 10px rgba(50, 50, 50, 0.1);
  transition: 0.5s;
  display: flex;
  flex-direction: column;

  @media (pointer: coarse) or (max-width: 1000px) {
    padding: min(5vw, 40px);
    border-radius: min(2.5vw, 20px);
  }
`;

export const DescriptionTitle = styled('h2')`
  font-size: 3rem;
  font-weight: 600;
  color: ${({ theme }) => theme.color.gray[200]};

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: min(6vw, 3rem);
  }
`;

export const DescriptionSubtitle = styled('h3')`
  font-size: 1.6rem;
  font-weight: 400;
  color: ${({ theme }) => theme.color.gray[500]};
  margin-bottom: 32px;

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: min(3.2vw, 1.6rem);
    margin-bottom: min(4vw, 32px);
  }
`;

export const DescriptionContentList = styled('ul')`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (pointer: coarse) or (max-width: 1000px) {
    gap: min(2vw, 16px);
  }
`;

export const DescriptionContent = styled('li')`
  font-size: 1.6rem;
  font-weight: 400;
  width: 100%;
  border-radius: 8px;
  padding: 24px;
  color: ${({ theme }) => theme.color.gray[300]};
  background-color: ${({ theme }) => theme.color.gray[950]};
  list-style: none;
  word-break: keep-all;

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: min(3.2vw, 1.6rem);
    border-radius: min(1vw, 8px);
    padding: min(3vw, 24px);
  }
`;
