import { useEffect, useMemo, useRef, useState } from 'react';

import jetBrainsMono from '@/font/jetBrainsMono';

import * as S from './styled';

const Page2 = () => {
  const ref1 = useRef<HTMLLIElement>(null);
  const ref2 = useRef<HTMLLIElement>(null);

  const [show1, setShow1] = useState<boolean>(false);
  const [show2, setShow2] = useState<boolean>(false);

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
            if (entry.target === ref1.current) {
              setShow1(true);
            } else if (entry.target === ref2.current) {
              setShow2(true);
            }
          } else {
            if (entry.target === ref1.current) {
              setShow1(false);
            } else if (entry.target === ref2.current) {
              setShow2(false);
            }
          }
        });
      },
      { threshold: 0.1 },
    );

    if (ref1.current && ref2.current) {
      observer.observe(ref1.current);
      observer.observe(ref2.current);
    }

    return () => {
      if (ref1.current && ref2.current) {
        observer.unobserve(ref1.current);
        observer.unobserve(ref2.current);
      }
    };
  }, []);

  return (
    <S.Page2Wrapper>
      <S.ItemsWrapper>
        <S.Name ref={ref1} show={show1}>
          <S.NameLabel>Name</S.NameLabel>
          <S.ProfileImage width={300} height={300} src={'/profile/profile.webp'} alt={'Profile'} />
          <S.NameValueWrapper>
            <S.NameKorean>김영우</S.NameKorean>
            <S.NameEnglish>Kim Young-Woo</S.NameEnglish>
          </S.NameValueWrapper>
        </S.Name>

        <S.Position show={show1} delay={100}>
          <S.PositionLabel>Position</S.PositionLabel>
          <S.PositionValue className={jetBrainsMono.className}>front-end</S.PositionValue>
        </S.Position>

        <S.Education show={show1} delay={200}>
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

        <S.WorkingExperience ref={ref2} show={show2}>
          <S.WorkingExperienceLabel>Working Experience</S.WorkingExperienceLabel>
          <S.WorkingYears>{workingYears}</S.WorkingYears>
        </S.WorkingExperience>

        <S.Tech show={show2} delay={100}>
          <S.ItemLabel>Tech</S.ItemLabel>
        </S.Tech>
      </S.ItemsWrapper>
    </S.Page2Wrapper>
  );
};
export default Page2;
