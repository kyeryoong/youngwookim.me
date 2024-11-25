import Image from 'next/image';
import { styled } from 'styled-components';

type ItemProps = {
  show: boolean;
  delay?: number;
};

const gapSize = '20px';

export const Page2Wrapper = styled('section')`
  width: 100%;
  height: 200vh;
  background-color: ${({ theme }) => theme.color.black};
  top: 0px;
  position: relative;
  padding: 100px;
  display: flex;
  flex-direction: column;

  @media (pointer: coarse) or (max-width: 1200px) {
    padding: 100px min(5vw, 100px);
  }
`;

export const ItemsWrapper = styled('ul')`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: ${gapSize};
`;

export const SingleItem = styled('li')<ItemProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 0 1 calc((100% - (${gapSize} * 2)) / 3);
  aspect-ratio: 1 / 1;
  list-style: none;
  border-radius: 8px;
  padding: 24px;
  box-sizing: border-box;
  opacity: ${({ show }) => (show ? 1 : 0)};
  transform: ${({ show }) => (show ? 'translateY(0%)' : 'translateY(10%)')};
  transition: 0.75s;
  transition-delay: ${({ delay }) => `${delay}ms`};

  @media (pointer: coarse) or (max-width: 1200px) {
    flex: 0 1 calc((100% - ${gapSize}) / 2);
    border-radius: min(2vw, 8px);
    padding: min(4vw, 24px);
  }
`;

export const DoubleItem = styled('li')<ItemProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 0 1 calc((100% - (${gapSize} / 2)) * 2 / 3);
  aspect-ratio: 2 / 1;
  list-style: none;
  border-radius: 8px;
  padding: 24px;
  box-sizing: border-box;
  opacity: ${({ show }) => (show ? 1 : 0)};
  transform: ${({ show }) => (show ? 'translateY(0%)' : 'translateY(10%)')};
  transition: 0.75s;
  transition-delay: ${({ delay }) => `${delay}ms`};

  @media (pointer: coarse) or (max-width: 1200px) {
    flex: 0 1 100%;
    border-radius: min(2vw, 8px);
    padding: min(6vw, 24px);
  }
`;

export const ItemLabel = styled('h2')`
  font-size: max(2vw, 1rem);
  font-weight: 300;
`;

export const Name = styled(SingleItem)`
  color: ${({ theme }) => theme.color.black};
  background-color: ${({ theme }) => theme.color.white};
`;

export const NameLabel = styled(ItemLabel)`
  color: ${({ theme }) => theme.color.gray[500]};
`;

export const ProfileImage = styled(Image)`
  width: min(16vw, 300px);
  height: min(16vw, 300px);
  border-radius: min(16vw, 300px);
  object-fit: cover;
  object-position: 0px 0px;
  background-color: ${({ theme }) => theme.color.gray[200]};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -65%);
`;

export const NameValueWrapper = styled('div')`
  text-align: right;
`;

export const NameKorean = styled('p')`
  font-size: max(3.6vw, 1rem);
  font-weight: 600;
`;

export const NameEnglish = styled('p')`
  font-size: max(2vw, 1rem);
`;

export const Position = styled(SingleItem)`
  background-color: ${({ theme }) => theme.color.blue[200]};
`;

export const PositionLabel = styled(ItemLabel)`
  color: ${({ theme }) => theme.color.blue[500]};
`;

export const PositionValue = styled('p')`
  font-size: max(4vw, 1rem);
  font-weight: 700;
  font-style: italic;
  width: 100%;
  text-align: center;
  color: ${({ theme }) => theme.color.indigo[700]};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Education = styled(SingleItem)`
  background-color: #0d0b9d;
  overflow: hidden;
`;

export const EducationLabel = styled(ItemLabel)`
  color: white;
  z-index: 1;
`;

export const EducationImage = styled(Image)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  opacity: 0.3;
`;

export const EducationValueWrapper = styled('div')`
  width: fit-content;
  align-self: flex-end;
  text-align: right;
  word-break: keep-all;
  z-index: 1;
`;

export const EducationUniveristy = styled('p')`
  font-size: 3rem;
  margin-bottom: 12px;

  @media (pointer: coarse) or (max-width: 1200px) {
    font-size: min(4.5vw, 3rem);
    margin-bottom: min(1vw, 12px);
  }
`;

export const EducationPeriod = styled('p')`
  font-size: 1.2rem;
  font-weight: 300;

  @media (pointer: coarse) or (max-width: 1200px) {
    font-size: min(1.8vw, 1.2rem);
  }
`;

export const WorkingExperience = styled(SingleItem)`
  background: ${({ theme }) =>
    `linear-gradient(0deg, ${theme.color.green[300]}, ${theme.color.cyan[300]})`};
`;

export const WorkingExperienceLabel = styled(ItemLabel)`
  color: white;
`;

export const WorkingExperienceValueWrapper = styled('div')`
  width: fit-content;
  align-self: flex-end;
  text-align: right;
  word-break: keep-all;
  z-index: 1;
`;

export const WorkingExperienceCompany = styled('p')`
  font-size: 2.4rem;

  @media (pointer: coarse) or (max-width: 1200px) {
    font-size: min(3.6vw, 2.4rem);
  }
`;

export const WorkingExperiencePosition = styled('p')`
  font-size: 1.4rem;
  font-weight: 300;
  margin-bottom: 12px;

  @media (pointer: coarse) or (max-width: 1200px) {
    font-size: min(2.1vw, 1.4rem);
    margin-bottom: min(1vw, 12px);
  }
`;

export const WorkingExperiencePeriod = styled('p')`
  font-size: 1.2rem;
  font-weight: 300;

  @media (pointer: coarse) or (max-width: 1200px) {
    font-size: min(1.8vw, 1.2rem);
  }
`;

export const WorkingYearsWrapper = styled('p')`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
  display: flex;
`;

export const WorkingYearsValue = styled('h2')`
  font-size: 12rem;
  font-weight: 700;
  line-height: 9rem;

  @media (pointer: coarse) or (max-width: 1200px) {
    font-size: min(18vw, 12rem);
    line-height: min(13.5vw, 9rem);
  }
`;

export const WorkingYearsLabel = styled('h3')`
  font-size: 1.6rem;
  font-weight: 300;
  line-height: 1.2rem;

  @media (pointer: coarse) or (max-width: 1200px) {
    font-size: min(2.4vw, 1.6rem);
    line-height: min(1.8vw, 1.2rem);
  }
`;

export const Tech = styled(DoubleItem)`
  background-color: ${({ theme }) => theme.color.gray[900]};
  padding: 0px;
  overflow: hidden;
`;

export const TechLabel = styled(ItemLabel)`
  color: ${({ theme }) => theme.color.gray[500]};
  transform: translate(24px, 24px);

  @media (pointer: coarse) or (max-width: 1200px) {
    font-size: translateY(min(4vw, 24px), min(4vw, 24px));
  }
`;

export const TechCarouselWrapper = styled('div')`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const TechCarousel = styled('article')`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const TechList = styled('li')`
  width: fit-content;
  list-style: none;
  display: flex;
  flex: 1;
  animation: techCarouselScroll 12s infinite;
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
    gap: min(4vw, 24px);
  }
`;

export const TechName = styled('p')`
  font-size: 1.6rem;
  font-weight: 300;
  width: 100%;
  text-align: center;
  color: ${({ theme }) => theme.color.gray[300]};
  word-break: keep-all;

  @media (pointer: coarse) or (max-width: 1200px) {
    font-size: min(2.4vw, 1.6rem);
  }
`;
