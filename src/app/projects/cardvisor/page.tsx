'use client';

import { RefObject, useCallback, useEffect, useRef, useState } from 'react';

import Header from '@/components/Pages/Projects/Components/Header';
import Heading1 from '@/components/Pages/Projects/Components/Heading/Heading1';
import Intro from '@/components/Pages/Projects/Components/Intro';
import Layout from '@/components/Pages/Projects/Components/Layout';
import Member from '@/components/Pages/Projects/Components/Member';
import MemberList from '@/components/Pages/Projects/Components/MemberList';
import Navigator from '@/components/Pages/Projects/Components/Navigator';
import SourceCodeButton from '@/components/Pages/Projects/Components/SourceCodeButton';
import SourceCodeButtonList from '@/components/Pages/Projects/Components/SourceCodeButtonList';
import Text from '@/components/Pages/Projects/Components/Text';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import useStore from '@/stores';
import ImageCarousel from '@/theme/ImageCarousel';

import * as S from './styled';

const Cardvisor = () => {
  const { menuStore } = useStore();

  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const ref3 = useRef<HTMLDivElement>(null);
  const ref4 = useRef<HTMLDivElement>(null);
  const ref5 = useRef<HTMLDivElement>(null);
  const ref6 = useRef<HTMLDivElement>(null);
  const ref7 = useRef<HTMLDivElement>(null);

  const refArray = [ref1, ref2, ref3, ref4, ref5, ref6, ref7];

  const [focusedIndex, setFocusedIndex] = useState<number>(0);

  const scrollOffset = 120;

  const handleHeading1Click = useCallback((ref: RefObject<HTMLDivElement>) => {
    const offsetTop = ref.current?.getBoundingClientRect().top ?? 0;

    window.scrollTo({
      top: window.scrollY + offsetTop - scrollOffset,
      behavior: 'smooth',
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const refPositions = refArray.map((ref: RefObject<HTMLDivElement>) =>
        Math.abs((ref.current?.getBoundingClientRect().top ?? 0) - scrollOffset),
      );

      setFocusedIndex(refPositions.indexOf(Math.min(...refPositions)));
    };

    window.addEventListener('scroll', handleScroll);
    menuStore.setShowHeader(false);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      menuStore.setShowHeader(true);
    };
  }, []);

  return (
    <>
      <Header name={'카드바이저'} />

      <Intro color={'#00C8C8'} imgSrc={'/projects/cardvisor/graphic.webp'}>
        <S.Subtitle>사용자 소비 패턴 기반 카드 추천 서비스</S.Subtitle>
        <S.Title>카드바이저</S.Title>
        <S.CardvisorLogo
          width={0}
          height={0}
          sizes={'100%'}
          alt={'cardvisor logo'}
          src={'/projects/cardvisor/cardvisor_logo.svg'}
        />
        <S.Label>
          2022년 홍익대학교 컴퓨터공학과
          <br />
          졸업 프로젝트 작품
        </S.Label>
      </Intro>

      <Layout>
        <Heading1 ref={ref1}>개요</Heading1>
        <Text>
          대한민국은 연간 카드 승인 금액이 약 200조원이 넘을 만큼, 카드 사용량이 많은 나라입니다.
          사용자 본인에게 적합한 카드를 사용하게되면, 효율적인 경제 활동을 할 수 있습니다. 그래서,
          우리팀은 소비자들이 자신이 원하는 혜택과 브랜드를 선택하여 가장 적합한 카드를 추천해주는
          서비스를 개발하였습니다.
        </Text>

        <Heading1 ref={ref2}>성과</Heading1>
        <Text>
          - 2022년도 홍익대학교 컴퓨터공학과 졸업 전시회 - 최우수상
          <br />
          - 마이 핀테크 서비스 해커톤 - 우수상(학생부)
          <br />- 2022년도 창작종합설계프로젝트 1, 2 - 지도 교수 선정 우수 작품
        </Text>

        <Heading1 ref={ref3}>개발 인원</Heading1>
        <MemberList>
          <Member
            name={'김민석'}
            id={'min-0404'}
            position={'Team Leader, Backend Devloper'}
            imageUrl={'https://avatars.githubusercontent.com/u/78293352?v=4size=64'}
            linkUrl={'https://github.com/min-0404'}
          />

          <Member
            name={'조융'}
            id={'yung5060'}
            position={'Backend Developer'}
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

        <Heading1 ref={ref4}>소스 코드</Heading1>
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

        <Heading1 ref={ref5}>구조</Heading1>
        <Text>
          <S.DiagramImage
            width={0}
            height={0}
            sizes={'100%'}
            src={'/projects/cardvisor/diagram_dark.webp'}
            alt={'cardvisor'}
          />
        </Text>

        <Heading1 ref={ref6}>스크린샷</Heading1>
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
            carouselOptions={{
              showPagination: true,
              showPrevNextButtons: true,
            }}
            carouselStyle={{ borderRadius: '8px' }}
          />
          {/* <ImageCarousel
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
          /> */}
        </Text>

        <Heading1 ref={ref7}>영상</Heading1>
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
        buttons={['개요', '성과', '개발 인원', '소스 코드', '구조', '스크린샷', '영상'].map(
          (name, index) => ({ name, onClick: () => handleHeading1Click(refArray[index]) }),
        )}
      />
      <ScrollToTopButton />
    </>
  );
};

export default Cardvisor;
