'use client';

import TechList from '@/components/Badge/BadgeList';
import CSS3Badge from '@/components/Badge/Premade/CSS3Badge';
import FigmaBadge from '@/components/Badge/Premade/FigmaBadge';
import FirebaseBadge from '@/components/Badge/Premade/FirebaseBadge';
import GitBadge from '@/components/Badge/Premade/GitBadge';
import GitHubBadge from '@/components/Badge/Premade/GitHubBadge';
import GitLabBadge from '@/components/Badge/Premade/GitLabBadge';
import HTML5Badge from '@/components/Badge/Premade/HTML5Badge';
import JavaScriptBadge from '@/components/Badge/Premade/JavaScriptBadge';
import MobXBadge from '@/components/Badge/Premade/MobXBadge';
import MongoDBBadge from '@/components/Badge/Premade/MongoDBBadge';
import MySQLBadge from '@/components/Badge/Premade/MySQLBadge';
import NextJSBadge from '@/components/Badge/Premade/NextJSBadge';
import ReactBadge from '@/components/Badge/Premade/ReactBadge';
import StyledComponentsBadge from '@/components/Badge/Premade/StyledComponentsBadge';
import TypeScriptBadge from '@/components/Badge/Premade/TypeScriptBadge';
import VercelBadge from '@/components/Badge/Premade/VercelBadge';
import { ScrollToTopButton } from '@/components/ScrollToTopButton';
import Page from '@/theme/Page';

const TechPage = () => {
  return (
    <Page>
      <TechList name="Front-end">
        <HTML5Badge />
        <JavaScriptBadge />
        <TypeScriptBadge core />
        <ReactBadge core />
        <MobXBadge core />
        <NextJSBadge />
        <VercelBadge />
      </TechList>

      <TechList name="Style Sheet & Design">
        <CSS3Badge core />
        <StyledComponentsBadge core />
        <FigmaBadge core />
      </TechList>

      <TechList name="Database">
        <MongoDBBadge />
        <MySQLBadge />
        <FirebaseBadge />
      </TechList>

      <TechList name="Version Control">
        <GitBadge core />
        <GitHubBadge />
        <GitLabBadge core />
      </TechList>

      <ScrollToTopButton />
    </Page>
  );
};

export default TechPage;
