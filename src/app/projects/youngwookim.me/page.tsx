'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useTheme } from 'styled-components';

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

import * as S from './styled';

const YoungWooKimMe = () => {
  const theme = useTheme();

  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const ref3 = useRef<HTMLDivElement>(null);
  const ref4 = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const handleScroll = () => {
      const refPositions = [
        Math.abs((ref1.current?.getBoundingClientRect().top ?? 0) - scrollOffset),
        Math.abs((ref2.current?.getBoundingClientRect().top ?? 0) - scrollOffset),
        Math.abs((ref3.current?.getBoundingClientRect().top ?? 0) - scrollOffset),
        Math.abs((ref4.current?.getBoundingClientRect().top ?? 0) - scrollOffset),
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
      <Intro mouseScrollColor={theme.color.gray[500]}>
        <S.YoungWooKimMeIntroWrapper>
          <S.Label>project</S.Label>
          <S.Title>youngwookim.me</S.Title>
          <S.SubTitle>나를 나타낼 수 있는 포트폴리오 웹페이지</S.SubTitle>
        </S.YoungWooKimMeIntroWrapper>
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
        buttons={[
          { name: '개요', onClick: handleClickLabel1 },
          { name: '개발 인원', onClick: handleClickLabel2 },
          { name: '소스 코드', onClick: handleClickLabel3 },
          { name: '기술 스택', onClick: handleClickLabel4 },
        ]}
      />

      <ScrollToTopButton />
    </>
  );
};

export default YoungWooKimMe;
