'use client';

import { RefObject, useCallback, useEffect, useRef, useState } from 'react';

import BadgeList from '@/components/Badge/BadgeList';
import GitBadge from '@/components/Badge/Premade/GitBadge';
import GitHubBadge from '@/components/Badge/Premade/GitHubBadge';
import MongoDBBadge from '@/components/Badge/Premade/MongoDBBadge';
import NextJSBadge from '@/components/Badge/Premade/NextJSBadge';
import StyledComponentsBadge from '@/components/Badge/Premade/StyledComponentsBadge';
import VercelBadge from '@/components/Badge/Premade/VercelBadge';
import Heading1 from '@/components/Pages/Projects/Components/Heading/Heading1';
import Intro from '@/components/Pages/Projects/Components/Intro';
import Layout from '@/components/Pages/Projects/Components/Layout';
import Member from '@/components/Pages/Projects/Components/Member';
import MemberList from '@/components/Pages/Projects/Components/MemberList';
import Navigator from '@/components/Pages/Projects/Components/Navigator';
import SourceCodeButton from '@/components/Pages/Projects/Components/SourceCodeButton';
import Text from '@/components/Pages/Projects/Components/Text';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import { useStore } from '@/stores';

import * as S from './styled';

const YoungWooKimMe = () => {
  const { menuStore } = useStore();

  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const ref3 = useRef<HTMLDivElement>(null);
  const ref4 = useRef<HTMLDivElement>(null);

  const refArray = [ref1, ref2, ref3, ref4];

  const [focusedIndex, setFocusedIndex] = useState<number>(0);

  const scrollOffset = 150;

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
      <Intro color={'white'} imgSrc={'/projects/youngwookim.me/graphic.webp'}>
        <S.Subtitle>나를 나타낼 수 있는 포트폴리오 웹페이지</S.Subtitle>
        <S.Title>youngwookim.me</S.Title>
      </Intro>

      <Layout>
        <Heading1 ref={ref1}>개요</Heading1>
        <Text>youngwookim.me는 프론트 엔드 개발자 김영우의 포트폴리오 웹사이트 입니다.</Text>

        <Heading1 ref={ref2}>개발 인원</Heading1>
        <MemberList>
          <Member
            id={'kyeryoong'}
            position={'Developer'}
            imageUrl={'https://avatars.githubusercontent.com/u/98510309?v=4&size=64'}
            linkUrl={'https://github.com/kyeryoong'}
          />
        </MemberList>

        <Heading1 ref={ref3}>소스 코드</Heading1>
        <Text>
          <SourceCodeButton
            userName={'kyeryoong'}
            repositoryName={'youngwookim.me'}
            linkUrl={'https://github.com/kyeryoong/youngwookim.me'}
          />
        </Text>

        <Heading1 ref={ref4}>기술 스택</Heading1>
        <Text>
          <BadgeList gap={16}>
            <NextJSBadge size={32} core />
            <VercelBadge size={32} core />
            <StyledComponentsBadge size={32} core />
            <MongoDBBadge size={32} core />
            <GitBadge size={32} core />
            <GitHubBadge size={32} core />
          </BadgeList>
        </Text>
      </Layout>

      <Navigator
        focusedIndex={focusedIndex}
        buttons={['개요', '개발 인원', '소스 코드', '기술 스택'].map((name, index) => ({
          name,
          onClick: () => handleHeading1Click(refArray[index]),
        }))}
      />

      <ScrollToTopButton />
    </>
  );
};

export default YoungWooKimMe;
