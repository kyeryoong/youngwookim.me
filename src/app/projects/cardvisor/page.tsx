'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import ImageCarousel from '@/components/Pages/Projects/Components/ImageCarousel';
import Intro from '@/components/Pages/Projects/Components/Intro';
import Label from '@/components/Pages/Projects/Components/Label';
import Layout from '@/components/Pages/Projects/Components/Layout';
import Member from '@/components/Pages/Projects/Components/Member';
import MemberList from '@/components/Pages/Projects/Components/MemberList';
import Navigator from '@/components/Pages/Projects/Components/Navigator';
import SourceCodeButton from '@/components/Pages/Projects/Components/SourceCodeButton';
import SourceCodeButtonList from '@/components/Pages/Projects/Components/SourceCodeButtonList';
import Text from '@/components/Pages/Projects/Components/Text';
import ScrollToTopButton from '@/components/ScrollToTopButton';

import * as S from './styled';

const Cardvisor = () => {
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const ref3 = useRef<HTMLDivElement>(null);
  const ref4 = useRef<HTMLDivElement>(null);
  const ref5 = useRef<HTMLDivElement>(null);
  const ref6 = useRef<HTMLDivElement>(null);
  const ref7 = useRef<HTMLDivElement>(null);

  const [focusedIndex, setFocusedIndex] = useState<number>(0);

  const scrollOffset = 150;

  const handleClickLabel1 = useCallback(() => {
    const offsetTop = ref1.current?.getBoundingClientRect().top ?? 0;

    window.scrollTo({
      top: window.scrollY + offsetTop - scrollOffset,
      behavior: 'smooth',
    });
  }, []);

  const handleClickLabel2 = useCallback(() => {
    const offsetTop = ref2.current?.getBoundingClientRect().top ?? 0;

    window.scrollTo({
      top: window.scrollY + offsetTop - scrollOffset,
      behavior: 'smooth',
    });
  }, []);

  const handleClickLabel3 = useCallback(() => {
    const offsetTop = ref3.current?.getBoundingClientRect().top ?? 0;

    window.scrollTo({
      top: window.scrollY + offsetTop - scrollOffset,
      behavior: 'smooth',
    });
  }, []);

  const handleClickLabel4 = useCallback(() => {
    const offsetTop = ref4.current?.getBoundingClientRect().top ?? 0;

    window.scrollTo({
      top: window.scrollY + offsetTop - scrollOffset,
      behavior: 'smooth',
    });
  }, []);

  const handleClickLabel5 = useCallback(() => {
    const offsetTop = ref5.current?.getBoundingClientRect().top ?? 0;

    window.scrollTo({
      top: window.scrollY + offsetTop - scrollOffset,
      behavior: 'smooth',
    });
  }, []);

  const handleClickLabel6 = useCallback(() => {
    const offsetTop = ref6.current?.getBoundingClientRect().top ?? 0;

    window.scrollTo({
      top: window.scrollY + offsetTop - scrollOffset,
      behavior: 'smooth',
    });
  }, []);

  const handleClickLabel7 = useCallback(() => {
    const offsetTop = ref7.current?.getBoundingClientRect().top ?? 0;

    window.scrollTo({
      top: window.scrollY + offsetTop - scrollOffset,
      behavior: 'smooth',
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const refPositions = [
        Math.abs((ref1.current?.getBoundingClientRect().top ?? 0) - scrollOffset),
        Math.abs((ref2.current?.getBoundingClientRect().top ?? 0) - scrollOffset),
        Math.abs((ref3.current?.getBoundingClientRect().top ?? 0) - scrollOffset),
        Math.abs((ref4.current?.getBoundingClientRect().top ?? 0) - scrollOffset),
        Math.abs((ref5.current?.getBoundingClientRect().top ?? 0) - scrollOffset),
        Math.abs((ref6.current?.getBoundingClientRect().top ?? 0) - scrollOffset),
        Math.abs((ref7.current?.getBoundingClientRect().top ?? 0) - scrollOffset),
      ];

      setFocusedIndex(refPositions.indexOf(Math.min(...refPositions)));
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Intro>
        <S.CardvisorIntroWrapper>
          <S.Label>사용자 소비 패턴 기반 카드 추천 서비스</S.Label>
          <S.Title
            width={0}
            height={0}
            src={'/projects/cardvisor/logo.png'}
            sizes={'100%'}
            alt={'cardvisor'}
          />
          <S.SubTitle>
            2022년도 홍익대학교 컴퓨터공학과
            <br />
            졸업 프로젝트 작품
          </S.SubTitle>
        </S.CardvisorIntroWrapper>
      </Intro>

      <Layout>
        <Label ref={ref1}>개요</Label>
        <Text>
          대한민국은 연간 카드 승인 금액이 약 200조원이 넘을 만큼, 카드 사용량이 많은 나라입니다.
          사용자 본인에게 적합한 카드를 사용하게되면, 효율적인 경제 활동을 할 수 있습니다. 그래서,
          우리팀은 소비자들이 자신이 원하는 혜택과 브랜드를 선택하여 가장 적합한 카드를 추천해주는
          서비스를 개발하였습니다.
        </Text>

        <Label ref={ref2}>성과</Label>
        <Text>
          - 2022년도 홍익대학교 컴퓨터공학과 졸업 전시회 - 최우수상
          <br />
          - 마이 핀테크 서비스 해커톤 - 우수상(학생부)
          <br />- 2022년도 창작종합설계프로젝트 1, 2 - 지도 교수 선정 우수 작품
        </Text>

        <Label ref={ref3}>개발 인원</Label>
        <MemberList>
          <Member
            name={'김민석'}
            id={'min-0404'}
            position={'Team Leader, Backend Devloper (데이터 분석, 알고리즘 설계)'}
            imageUrl={'https://avatars.githubusercontent.com/u/78293352?v=4size=64'}
            linkUrl={'https://github.com/min-0404'}
          />

          <Member
            name={'조융'}
            id={'yung5060'}
            position={'Backend Developer (API 설계, 알고리즘 설계)'}
            imageUrl={'https://avatars.githubusercontent.com/u/80459033?v=4&size=64'}
            linkUrl={'https://github.com/yung5060'}
          />

          <Member
            name={'김영우'}
            id={'kyeryoong'}
            position={'Frontend Developer'}
            imageUrl={'https://avatars.githubusercontent.com/u/98510309?v=4&size=64'}
            linkUrl={'https://github.com/kyeryoong'}
          />
        </MemberList>

        <Label ref={ref4}>소스 코드</Label>
        <Text>
          <SourceCodeButtonList>
            <SourceCodeButton
              userName={'kyeryoong'}
              repositoryName={'cardvisor'}
              linkUrl={'https://github.com/kyeryoong/cardvisor'}
            />

            <SourceCodeButton
              userName={'min-0404'}
              repositoryName={'Graduation_Project'}
              linkUrl={'https://github.com/min-0404/Graduation_Project'}
            />
          </SourceCodeButtonList>
        </Text>

        <Label ref={ref5}>구조</Label>
        <Text>
          <S.DiagramImage
            width={0}
            height={0}
            sizes={'100%'}
            src={'/projects/cardvisor/diagram.webp'}
            alt={'cardvisor'}
          />
        </Text>

        <Label ref={ref6}>스크린샷</Label>
        <Text>
          <ImageCarousel
            images={[
              '/projects/cardvisor/1.webp',
              '/projects/cardvisor/2.webp',
              '/projects/cardvisor/3.webp',
              '/projects/cardvisor/4.webp',
              '/projects/cardvisor/5.webp',
              '/projects/cardvisor/6.webp',
              '/projects/cardvisor/7.webp',
              '/projects/cardvisor/8.webp',
              '/projects/cardvisor/9.webp',
            ]}
          />
        </Text>

        <Label ref={ref7}>영상</Label>
        <S.YouTubePlayerWrapper>
          <S.YouTubePlayer
            width={'100%'}
            height={'100%'}
            src={'https://www.youtube.com/embed/P6AUg1OHlSs?si=nTttA3TEwUOaUM5k'}
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </S.YouTubePlayerWrapper>
      </Layout>

      <Navigator
        focusedIndex={focusedIndex}
        buttons={[
          { name: '개요', onClick: handleClickLabel1 },
          { name: '성과', onClick: handleClickLabel2 },
          { name: '개발 인원', onClick: handleClickLabel3 },
          { name: '소스 코드', onClick: handleClickLabel4 },
          { name: '구조', onClick: handleClickLabel5 },
          { name: '스크린샷', onClick: handleClickLabel6 },
          { name: '영상', onClick: handleClickLabel7 },
        ]}
      />
      <ScrollToTopButton />
    </>
  );
};

export default Cardvisor;
