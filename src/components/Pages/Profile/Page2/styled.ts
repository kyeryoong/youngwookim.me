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
    padding: min(3vw, 24px);
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
    padding: min(3vw, 24px);
  }
`;

export const ItemLabel = styled('h2')`
  font-size: 1.6rem;
  font-weight: 300;

  @media (pointer: coarse) or (max-width: 1200px) {
    font-size: min(3.2vw, 1.6rem);
  }
`;

export const Name = styled(SingleItem)`
  color: ${({ theme }) => theme.color.black};
  background-color: ${({ theme }) => theme.color.white};
`;

export const NameLabel = styled(ItemLabel)`
  color: ${({ theme }) => theme.color.gray[500]};
`;

export const ProfileImage = styled(Image)`
  width: min(20vw, 300px);
  height: min(20vw, 300px);
  border-radius: min(20vw, 300px);
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
  font-size: 3rem;
  font-weight: 600;

  @media (pointer: coarse) or (max-width: 1200px) {
    font-size: min(6vw, 3rem);
  }
`;

export const NameEnglish = styled('p')`
  font-size: 1.6rem;
  font-weight: 300;

  @media (pointer: coarse) or (max-width: 1200px) {
    font-size: min(3.2vw, 1.6rem);
  }
`;

export const Position = styled(SingleItem)`
  background-color: ${({ theme }) => theme.color.blue[200]};
`;

export const PositionLabel = styled(ItemLabel)`
  color: ${({ theme }) => theme.color.blue[500]};
`;

export const PositionValue = styled('p')`
  font-size: 3rem;
  font-weight: 700;
  font-style: italic;
  width: 100%;
  text-align: center;
  color: ${({ theme }) => theme.color.indigo[700]};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (pointer: coarse) or (max-width: 1200px) {
    font-size: min(6vw, 3rem);
  }
`;

export const Education = styled(SingleItem)`
  background-color: #0d0b9d;
  color: white;
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
  font-size: 2.4rem;
  font-weight: 600;
  margin-bottom: 12px;

  @media (pointer: coarse) or (max-width: 1200px) {
    font-size: min(4.8vw, 2.4rem);
    margin-bottom: min(1vw, 12px);
  }
`;

export const EducationPeriod = styled('p')`
  font-size: 1.2rem;
  font-weight: 300;

  @media (pointer: coarse) or (max-width: 1200px) {
    font-size: min(2.4vw, 1.2rem);
  }
`;

export const Awards = styled(SingleItem)`
  background-color: #fff5cc;
`;

export const AwardsLabel = styled(ItemLabel)`
  width: fit-content;
  color: #e6b800;
  background-color: #fff5cc;
  outline: 6px solid #fff5cc;
  z-index: 1;
`;

export const AwardsCount = styled('h2')`
  font-size: 8rem;
  font-weight: 700;
  line-height: 6.6rem;
  position: absolute;
  top: 0px;
  right: 0px;
  transform: translate(-48px, 48px);
  background: linear-gradient(135deg, #fff0b3, #cca300);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;

  @media (pointer: coarse) or (max-width: 1200px) {
    font-size: min(12vw, 8rem);
    line-height: min(9.9vw, 6.6rem);
    transform: translate(calc(-1 * min(6vw, 48px)), min(6vw, 48px));
  }
`;

export const AwardsBorder = styled('div')`
  width: calc(100% - 48px);
  height: calc(100% - 48px);
  border: 1px solid #e6b800;
  border-radius: 8px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (pointer: coarse) or (max-width: 1200px) {
    width: calc(100% - min(6vw, 48px));
    height: calc(100% - min(6vw, 48px));
    border-radius: min(2vw, 8px);
  }
`;

export const AwardsList = styled('ul')`
  width: 100%;
  list-style: none;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 20px;

  @media (pointer: coarse) or (max-width: 1200px) {
    padding: min(3vw, 24px);
    gap: min(2.5vw, 20px);
  }
`;

export const AwardsItem = styled('li')`
  list-style: none;
  color: #e6b800;
  word-break: keep-all;
`;

export const AwardsTitle = styled('p')`
  font-size: 1.2rem;
  font-weight: 300;

  @media (pointer: coarse) or (max-width: 1200px) {
    font-size: min(1.8vw, 1.2rem);
  }
`;

export const AwardsContent = styled('p')`
  font-size: 2rem;
  font-weight: 600;

  @media (pointer: coarse) or (max-width: 1200px) {
    font-size: min(4vw, 2rem);
  }
`;

export const AwardsDate = styled('p')`
  font-size: 1.2rem;
  font-weight: 300;

  @media (pointer: coarse) or (max-width: 1200px) {
    font-size: min(1.8vw, 1.2rem);
  }
`;

export const WorkingExperience = styled(DoubleItem)`
  background: ${({ theme }) =>
    `linear-gradient(0deg, ${theme.color.green[300]}, ${theme.color.cyan[300]})`};
  color: white;
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
  font-weight: 600;

  @media (pointer: coarse) or (max-width: 1200px) {
    font-size: min(4.8vw, 2.4rem);
  }
`;

export const WorkingExperiencePosition = styled('p')`
  font-size: 1.6rem;
  font-weight: 300;
  margin-bottom: 12px;

  @media (pointer: coarse) or (max-width: 1200px) {
    font-size: min(3.2vw, 1.6rem);
    margin-bottom: min(1vw, 12px);
  }
`;

export const WorkingExperiencePeriod = styled('p')`
  font-size: 1.2rem;
  font-weight: 300;

  @media (pointer: coarse) or (max-width: 1200px) {
    font-size: min(2.4vw, 1.2rem);
  }
`;

export const WorkingYearsWrapper = styled('p')`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -65%);
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
  line-height: 1.2rem;
  transform: translateX(-30%);

  @media (pointer: coarse) or (max-width: 1200px) {
    font-size: min(2.4vw, 1.6rem);
    line-height: min(1.8vw, 1.2rem);
  }
`;

export const Tech = styled(DoubleItem)`
  flex: 0 1 100%;
  aspect-ratio: 3 / 1;
  background-color: ${({ theme }) => theme.color.gray[900]};
  padding: 0px;
  overflow: hidden;

  @media (pointer: coarse) or (max-width: 1200px) {
    aspect-ratio: 2 / 1;
  }
`;

export const TechLabel = styled(ItemLabel)`
  color: ${({ theme }) => theme.color.gray[500]};
  transform: translate(24px, 24px);

  @media (pointer: coarse) or (max-width: 1200px) {
    transform: translate(min(3vw, 24px), min(3vw, 24px));
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
