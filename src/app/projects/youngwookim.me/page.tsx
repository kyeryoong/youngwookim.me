'use client';

import { useTheme } from 'styled-components';

import BadgeList from '@/components/Badge/BadgeList';
import GitBadge from '@/components/Badge/Premade/GitBadge';
import GitHubBadge from '@/components/Badge/Premade/GitHubBadge';
import MongoDBBadge from '@/components/Badge/Premade/MongoDBBadge';
import NextJSBadge from '@/components/Badge/Premade/NextJSBadge';
import StyledComponentsBadge from '@/components/Badge/Premade/StyledComponentsBadge';
import VercelBadge from '@/components/Badge/Premade/VercelBadge';
import Page from '@/components/Page';
import Intro from '@/components/Projects/Components/Intro';
import Label from '@/components/Projects/Components/Label';
import Member from '@/components/Projects/Components/Member';
import MemberList from '@/components/Projects/Components/MemberList';
import Text from '@/components/Projects/Components/Text';

import * as S from './styled';

const YoungWooKimMe = () => {
  const theme = useTheme();

  return (
    <>
      <Intro mouseScrollColor={theme.color.gray[500]}>
        <S.YoungWooKimMeIntroWrapper>
          <S.Label>P r o j e c t</S.Label>
          <S.Title>youngwookim.me</S.Title>
          <S.SubTitle>나를 나타낼 수 있는 포트폴리오</S.SubTitle>
        </S.YoungWooKimMeIntroWrapper>
      </Intro>

      <Page customStyle={{ position: 'relative' }}>
        <Label>개요</Label>
        <Text>youngwookim.me는 프론트 엔드 개발자 김영우의 포트폴리오 웹사이트 입니다.</Text>

        <Label>개발 인원</Label>
        <MemberList>
          <Member
            name={'kyeryoong'}
            position={'Developer'}
            profileImage={'https://avatars.githubusercontent.com/u/98510309?v=4&size=64'}
            linkUrl={'https://github.com/kyeryoong'}
          />
        </MemberList>

        <Label>기술 스택</Label>
        <BadgeList gap={16}>
          <NextJSBadge size={32} core />
          <VercelBadge size={32} core />
          <StyledComponentsBadge size={32} core />
          <MongoDBBadge size={32} core />
          <GitBadge size={32} core />
          <GitHubBadge size={32} core />
        </BadgeList>
      </Page>
    </>
  );
};

export default YoungWooKimMe;
