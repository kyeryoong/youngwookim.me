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
import Intro from '@/components/Projects/Components/Intro';
import Label from '@/components/Projects/Components/Label';
import Layout from '@/components/Projects/Components/Layout';
import Member from '@/components/Projects/Components/Member';
import MemberList from '@/components/Projects/Components/MemberList';
import Navigator from '@/components/Projects/Components/Navigator';
import Text from '@/components/Projects/Components/Text';

import * as S from './styled';

const YoungWooKimMe = () => {
  const theme = useTheme();

  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const ref3 = useRef<HTMLDivElement>(null);

  const [focusedIndex, setFocusedIndex] = useState<number>(0);

  const scrollOffset = 150;

  const handleClickLabel1 = useCallback(() => {
    const offsetTop = ref1.current?.getBoundingClientRect().top || 0;

    window.scrollTo({
      top: window.scrollY + offsetTop - scrollOffset,
      behavior: 'smooth',
    });
  }, []);

  const handleClickLabel2 = useCallback(() => {
    const offsetTop = ref2.current?.getBoundingClientRect().top || 0;

    window.scrollTo({
      top: window.scrollY + offsetTop - scrollOffset,
      behavior: 'smooth',
    });
  }, []);

  const handleClickLabel3 = useCallback(() => {
    const offsetTop = ref3.current?.getBoundingClientRect().top || 0;

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
        <Label ref={ref1}>개요</Label>
        <Text>youngwookim.me는 프론트 엔드 개발자 김영우의 포트폴리오 웹사이트 입니다.</Text>

        <Label ref={ref2}>개발 인원</Label>
        <MemberList>
          <Member
            name={'kyeryoong'}
            position={'Developer'}
            profileImage={'https://avatars.githubusercontent.com/u/98510309?v=4&size=64'}
            linkUrl={'https://github.com/kyeryoong'}
          />
        </MemberList>

        <Label ref={ref3}>기술 스택</Label>
        <BadgeList gap={16}>
          <NextJSBadge size={32} core />
          <VercelBadge size={32} core />
          <StyledComponentsBadge size={32} core />
          <MongoDBBadge size={32} core />
          <GitBadge size={32} core />
          <GitHubBadge size={32} core />
        </BadgeList>
      </Layout>

      <Navigator
        focusedIndex={focusedIndex}
        buttons={[
          { name: '개요', onClick: handleClickLabel1 },
          { name: '개발 인원', onClick: handleClickLabel2 },
          { name: '기술 스택', onClick: handleClickLabel3 },
        ]}
      />
    </>
  );
};

export default YoungWooKimMe;
