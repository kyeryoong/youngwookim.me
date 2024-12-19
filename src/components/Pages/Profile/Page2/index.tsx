import { useEffect, useMemo, useRef, useState } from 'react';

import CSS3Badge from '@/components/Badge/Premade/CSS3Badge';
import HTML5Badge from '@/components/Badge/Premade/HTML5Badge';
import JavaScriptBadge from '@/components/Badge/Premade/JavaScriptBadge';
import MobXBadge from '@/components/Badge/Premade/MobXBadge';
import ReactBadge from '@/components/Badge/Premade/ReactBadge';
import StyledComponentsBadge from '@/components/Badge/Premade/StyledComponentsBadge';
import TypeScriptBadge from '@/components/Badge/Premade/TypeScriptBadge';
import jetBrainsMono from '@/font/jetBrainsMono';

import * as S from './styled';

const TechList = () => {
  return (
    <S.TechList>
      <S.TechWrapper>
        <HTML5Badge showName={false} size={80} />
        <S.TechName>HTML5</S.TechName>
      </S.TechWrapper>
      <S.TechWrapper>
        <CSS3Badge showName={false} size={80} />
        <S.TechName>CSS3</S.TechName>
      </S.TechWrapper>
      <S.TechWrapper>
        <JavaScriptBadge showName={false} size={80} />
        <S.TechName>JavaScript</S.TechName>
      </S.TechWrapper>
      <S.TechWrapper>
        <TypeScriptBadge showName={false} size={80} />
        <S.TechName>TypeScript</S.TechName>
      </S.TechWrapper>
      <S.TechWrapper>
        <ReactBadge showName={false} size={80} />
        <S.TechName>React.js</S.TechName>
      </S.TechWrapper>
      <S.TechWrapper>
        <MobXBadge showName={false} size={80} />
        <S.TechName>MobX</S.TechName>
      </S.TechWrapper>
      <S.TechWrapper>
        <StyledComponentsBadge showName={false} size={80} />
        <S.TechName>styled components</S.TechName>
      </S.TechWrapper>
    </S.TechList>
  );
};

const Page2 = () => {
  const ref = useRef<HTMLUListElement>(null);

  const [show, setShow] = useState<boolean>(false);

  const workingYears = useMemo(() => {
    const now = new Date();
    const date = new Date('2023-07-03');
    const years = (now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24 * 365.25);

    return parseFloat(years.toFixed(1));
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === ref.current) {
              setShow(true);
            }
          } else {
            if (entry.target === ref.current) {
              setShow(false);
            }
          }
        });
      },
      { threshold: 0.2 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <S.Page2Wrapper>
      <S.ItemsWrapper ref={ref}>
        <S.Name show={show}>
          <S.NameLabel>Name</S.NameLabel>
          <S.ProfileImage width={300} height={300} src={'/profile/profile.webp'} alt={'Profile'} />
          <S.NameValueWrapper>
            <S.NameKorean>김영우</S.NameKorean>
            <S.NameEnglish>Kim Young-Woo</S.NameEnglish>
          </S.NameValueWrapper>
        </S.Name>

        <S.Position show={show} delay={100}>
          <S.PositionLabel>Position</S.PositionLabel>
          <S.PositionValue className={jetBrainsMono.className}>front-end</S.PositionValue>
        </S.Position>

        <S.Education show={show} delay={200}>
          <S.EducationLabel>Education</S.EducationLabel>
          <S.EducationImage
            width={0}
            height={0}
            sizes={'100%'}
            src={'/profile/education.webp'}
            alt={'Hongik University'}
          />

          <S.EducationValueWrapper>
            <S.EducationUniveristy>
              홍익대학교
              <br />
              컴퓨터공학전공
            </S.EducationUniveristy>
            <S.EducationPeriod>2017.03 ~ 2023.02</S.EducationPeriod>
          </S.EducationValueWrapper>
        </S.Education>

        <S.Awards show={show}>
          <S.AwardsLabel>Awards</S.AwardsLabel>
          <S.AwardsBorder />
          <S.AwardsCount>2</S.AwardsCount>
          <S.AwardsList>
            <S.AwardsItem>
              <S.AwardsTitle>홍익대학교 컴퓨터공학과 졸업 전시회</S.AwardsTitle>
              <S.AwardsContent>최우수상</S.AwardsContent>
              <S.AwardsDate>2022.11</S.AwardsDate>
            </S.AwardsItem>
            <S.AwardsItem>
              <S.AwardsTitle>마이 핀테크 서비스 해커톤</S.AwardsTitle>
              <S.AwardsContent>우수상(학생부)</S.AwardsContent>
              <S.AwardsDate>2022.07</S.AwardsDate>
            </S.AwardsItem>
          </S.AwardsList>
        </S.Awards>

        <S.WorkingExperience show={show} delay={300}>
          <S.WorkingExperienceLabel>Working Experience</S.WorkingExperienceLabel>
          <S.WorkingYearsWrapper>
            <S.WorkingYearsValue>{workingYears}</S.WorkingYearsValue>
            <S.WorkingYearsLabel>yrs</S.WorkingYearsLabel>
          </S.WorkingYearsWrapper>

          <S.WorkingExperienceValueWrapper>
            <S.WorkingExperienceCompany>티맥스와플</S.WorkingExperienceCompany>
            <S.WorkingExperiencePosition>
              WAPL 협업 솔루션 Front-end 연구원
            </S.WorkingExperiencePosition>
            <S.WorkingExperiencePeriod>2023.07 ~</S.WorkingExperiencePeriod>
          </S.WorkingExperienceValueWrapper>
        </S.WorkingExperience>

        <S.Tech show={show} delay={400}>
          <S.TechLabel>Tech</S.TechLabel>
          <S.TechCarouselWrapper>
            <S.TechCarousel>
              <TechList />
              <TechList />
            </S.TechCarousel>
          </S.TechCarouselWrapper>
        </S.Tech>
      </S.ItemsWrapper>
    </S.Page2Wrapper>
  );
};
export default Page2;
